import { db } from "../config/db.js";

export const getAllServices = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT id_service, title_services FROM services"
    );
    console.log("rows:", rows);
    res.json(rows);
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// export const createService = async (req, res) => {
//   const { name, description, price } = req.body;
//   try {
//     const newService = await db.query(
//       "INSERT INTO services (name, description, price) VALUES ($1, $2, $3) RETURNING *",
//       [name, description, price]
//     );
//     res.status(201).json(newService.rows[0]);
//   } catch (error) {
//     console.error("Error creating service:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };
