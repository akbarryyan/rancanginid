import { db } from "../config/db.js";

export const createMessage = (req, res) => {
  const { name, email, phone, company, service, message } = req.body;

  const query = `INSERT INTO messages (full_name, email, phone, company, service_in_demand, message, created_at) 
    VALUES (?, ?, ?, ?, ?, ?, NOW())`;

  db.query(
    query,
    [name, email, phone, company, service, message],
    (err, result) => {
      if (err) {
        console.error("Error inserting message:", err);
        return res.status(500).json({ error: "Internal server error" });
      }
      res.status(201).json({ message: "Message sent successfully" });
    }
  );
};
