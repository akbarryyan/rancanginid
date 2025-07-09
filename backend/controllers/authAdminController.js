import { db } from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// POST /api/admin/login
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email dan password wajib diisi" });
    }
    // Ambil data admin dari database berdasarkan email
    const [rows] = await db.query(
      "SELECT * FROM admin WHERE email = ? LIMIT 1",
      [email]
    );
    if (rows.length === 0) {
      return res.status(401).json({ error: "Email tidak ditemukan" });
    }
    const admin = rows[0];
    // Cek password hash
    const match = await bcrypt.compare(password, admin.password);
    if (!match) {
      return res.status(401).json({ error: "Password salah" });
    }
    // Jangan kirim password ke client
    const { password: _, ...adminData } = admin;
    // Generate JWT token
    const token = jwt.sign(
      { id: admin.id, email: admin.email, role: admin.role || "admin" },
      process.env.JWT_SECRET || "rancangin_secret",
      { expiresIn: "1d" }
    );
    res.json({ message: "Login berhasil", admin: adminData, token });
  } catch (err) {
    console.error("[Admin Login] Error:", err);
    res.status(500).json({ error: "Terjadi kesalahan server" });
  }
};
