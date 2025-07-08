-- Database schema untuk rancangin website
CREATE DATABASE IF NOT EXISTS db_rancangin;
USE db_rancangin;

-- Tabel untuk menyimpan pesan contact
CREATE TABLE IF NOT EXISTS messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    company VARCHAR(255),
    service_in_demand VARCHAR(100),
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabel untuk services (optional)
CREATE TABLE IF NOT EXISTS services (
    id_service VARCHAR(50) PRIMARY KEY,
    title_services VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample services
INSERT INTO services (id_service, title_services, description) VALUES
('web', 'Web Development', 'Pembuatan website modern dan responsif'),
('mobile', 'Mobile App Development', 'Pengembangan aplikasi mobile untuk iOS dan Android'),
('uiux', 'UI/UX Design', 'Desain antarmuka dan pengalaman pengguna'),
('digital', 'Digital Marketing', 'Strategi pemasaran digital'),
('security', 'Cybersecurity', 'Solusi keamanan digital'),
('cloud', 'Cloud Solutions', 'Implementasi solusi cloud')
ON DUPLICATE KEY UPDATE title_services=VALUES(title_services);

-- Lihat struktur tabel
DESCRIBE messages;
DESCRIBE services;
