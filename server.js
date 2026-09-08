const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',            
    database: 'portafolioweb'   // <-- ACÁ CAMBIÁS 'formulario' POR 'portafolioweb'
});

db.connect(err => {
    if (err) {
        console.error('Error al conectar a MySQL:', err);
    } else {
        console.log('Conectado a MySQL correctamente 🟢');
    }
});

// Ruta POST
app.post('/api/contacto', (req, res) => {
    const { nombre, asunto, mensaje } = req.body;

    if (!nombre || !asunto || !mensaje) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    const query = 'INSERT INTO formulario (nombre, asunto, mensaje) VALUES (?, ?, ?)';
    db.query(query, [nombre, asunto, mensaje], (err, result) => {
        if (err) {
            console.error('Error al insertar:', err);
            return res.status(500).json({ error: 'Error al guardar en la base de datos' });
        }
        res.status(201).json({ mensaje: 'Guardado con éxito', id: result.insertId });
    });
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});