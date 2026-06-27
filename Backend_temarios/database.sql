CREATE DATABASE IF NOT EXISTS proyecto_profe;

USE proyecto_profe;

CREATE TABLE IF NOT EXISTS temarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(150) NOT NULL,
  descripcion TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO temarios (titulo, descripcion)
SELECT 'Introduccion a Node.js', 'Primeros pasos con Node.js y Express'
WHERE NOT EXISTS (
  SELECT 1 FROM temarios WHERE titulo = 'Introduccion a Node.js'
);
