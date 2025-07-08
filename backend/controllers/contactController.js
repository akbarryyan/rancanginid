import { db } from "../config/db.js";

export const createMessage = (req, res) => {
  const { name, email, phone, company, service, message } = req.body;

  console.log("[Controller] POST /api/contact started...");

  const query = `INSERT INTO messages (full_name, email, phone, company, service_in_demand, message, created_at) 
    VALUES (?, ?, ?, ?, ?, ?, NOW())`;

  db.query(
    query,
    [name, email, phone, company, service, message],
    (err, result) => {
      if (err) {
        console.error("[Controller] DB Error:", err);
        return res.status(500).json({ error: "Internal server error" });
      }
      console.log("[Controller] DB Insert OK, sending response...");
      res.status(201).json({ message: "Message sent successfully" });
    }
  );
};
