import { db } from "../config/db.js";

// GET all blogs
export const getAllBlogs = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM blog ORDER BY created_at DESC"
    );
    res.json(rows);
  } catch (err) {
    console.error("[Blog] Error getAllBlogs:", err);
    res.status(500).json({ error: "Gagal mengambil data blog" });
  }
};

// GET single blog by id
export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.query("SELECT * FROM blog WHERE id_blog = ?", [id]);
    if (rows.length === 0)
      return res.status(404).json({ error: "Blog tidak ditemukan" });
    res.json(rows[0]);
  } catch (err) {
    console.error("[Blog] Error getBlogById:", err);
    res.status(500).json({ error: "Gagal mengambil data blog" });
  }
};

// CREATE blog
export const createBlog = async (req, res) => {
  try {
    const {
      title_blog,
      description,
      content,
      overview_image,
      creator,
      label_tech,
    } = req.body;
    if (!title_blog || !description || !creator) {
      return res
        .status(400)
        .json({ error: "Judul, deskripsi, dan creator wajib diisi" });
    }
    const [result] = await db.query(
      `INSERT INTO blog (title_blog, description, content, overview_image, creator, label_tech, created_at) VALUES (?, ?, ?, ?, ?, ?, NOW())`,
      [
        title_blog,
        description,
        content || null,
        overview_image || null,
        creator,
        label_tech || null,
      ]
    );
    res
      .status(201)
      .json({ message: "Blog berhasil dibuat", id_blog: result.insertId });
  } catch (err) {
    console.error("[Blog] Error createBlog:", err);
    res.status(500).json({ error: "Gagal membuat blog" });
  }
};

// UPDATE blog
export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title_blog,
      description,
      content,
      overview_image,
      creator,
      label_tech,
    } = req.body;
    const [result] = await db.query(
      `UPDATE blog SET title_blog=?, description=?, content=?, overview_image=?, creator=?, label_tech=? WHERE id_blog=?`,
      [
        title_blog,
        description,
        content || null,
        overview_image,
        creator,
        label_tech,
        id,
      ]
    );
    if (result.affectedRows === 0)
      return res.status(404).json({ error: "Blog tidak ditemukan" });
    res.json({ message: "Blog berhasil diupdate" });
  } catch (err) {
    console.error("[Blog] Error updateBlog:", err);
    res.status(500).json({ error: "Gagal update blog" });
  }
};

// DELETE blog
export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await db.query("DELETE FROM blog WHERE id_blog = ?", [id]);
    if (result.affectedRows === 0)
      return res.status(404).json({ error: "Blog tidak ditemukan" });
    res.json({ message: "Blog berhasil dihapus" });
  } catch (err) {
    console.error("[Blog] Error deleteBlog:", err);
    res.status(500).json({ error: "Gagal hapus blog" });
  }
};
