import { db } from "../config/db.js";

export const createMessage = async (req, res) => {
	try {
		const {
			name,
			email,
			phone,
			company,
			service,
			message,
		} = req.body;

		console.log(
			"[Controller] POST /api/contact started..."
		);
		console.log(
			"[Controller] Request body:",
			req.body
		);

		// Validasi input
		if (
			!name ||
			!email ||
			!message
		) {
			console.log(
				"[Controller] Validation failed: missing required fields"
			);
			return res
				.status(
					400
				)
				.json(
					{
						error: "Nama, email, dan pesan wajib diisi",
					}
				);
		}

		const query = `INSERT INTO messages (full_name, email, phone, company, service_in_demand, message, created_at) 
      VALUES (?, ?, ?, ?, ?, ?, NOW())`;

		const [result] =
			await db.execute(
				query,
				[
					name,
					email,
					phone ||
						null,
					company ||
						null,
					service ||
						null,
					message,
				]
			);

		console.log(
			"[Controller] DB Insert OK:",
			result
		);
		res.status(201).json({
			message: "Message sent successfully",
			id: result.insertId,
		});
	} catch (err) {
		console.error(
			"[Controller] Error:",
			err
		);
		res.status(500).json({
			error: "Gagal mengirim pesan. Silakan coba lagi.",
		});
	}
};
