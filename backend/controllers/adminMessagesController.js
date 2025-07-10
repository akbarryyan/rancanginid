import { db } from "../config/db.js";

// GET all messages
export const getAllMessages = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT 
        id_message AS id,
        full_name AS name,
        email,
        phone,
        company,
        service_in_demand AS service,
        message,
        status,
        priority,
        created_at AS createdAt,
        read_at AS readAt,
        replied_at AS repliedAt
      FROM messages
      ORDER BY created_at DESC
    `);
    res.json(rows);
  } catch (err) {
    console.error("[Messages] Error getAllMessages:", err);
    res.status(500).json({ error: "Gagal mengambil pesan" });
  }
};

// UPDATE status to read
export const markAsRead = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await db.query(
      "UPDATE messages SET status = 'read', read_at = NOW() WHERE id_message = ?",
      [id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Pesan tidak ditemukan" });
    }
    res.json({ message: "Pesan ditandai sebagai dibaca" });
  } catch (err) {
    console.error("[Messages] Error markAsRead:", err);
    res.status(500).json({ error: "Gagal update status pesan" });
  }
};

// UPDATE status to replied
export const markAsReplied = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await db.query(
      "UPDATE messages SET status = 'replied', replied_at = NOW() WHERE id_message = ?",
      [id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Pesan tidak ditemukan" });
    }
    res.json({ message: "Pesan ditandai sebagai dibalas" });
  } catch (err) {
    console.error("[Messages] Error markAsReplied:", err);
    res.status(500).json({ error: "Gagal update status pesan" });
  }
};

// DELETE message
export const deleteMessage = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await db.query(
      "DELETE FROM messages WHERE id_message = ?",
      [id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Pesan tidak ditemukan" });
    }
    res.json({ message: "Pesan berhasil dihapus" });
  } catch (err) {
    console.error("[Messages] Error deleteMessage:", err);
    res.status(500).json({ error: "Gagal menghapus pesan" });
  }
};
