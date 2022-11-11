import { mysql } from '../config/db_config.js';

// Obtiene todos los usuarios de la tabla usuarios
export function getUserData(req, res) {
    mysql.query("SELECT * FROM usuarios ORDER BY id DESC", (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err });
        }

        return res.status(200).json(rows);
    });
}

// Guarda los datos del usuario en la tabla usuarios
export function saveUserData(req, res) {
    const { nombres, documento, lugar_origen, empresa, cargo, salario, jefe_inmediato, telefono, correo_personal, correo_corporativo } = req.body;
    mysql.query('INSERT INTO usuarios SET nombres = ?, documento = ?, lugar_origen = ?, empresa = ?, cargo = ?, salario = ?, jefe_inmediato = ?, telefono = ?, correo_personal = ?, correo_corporativo = ?',
        [nombres, documento, lugar_origen, empresa, cargo, salario, jefe_inmediato, telefono, correo_personal, correo_corporativo],
        (err, rows) => {
            if (err) {
                return res.status(500).json({ error: err });
            }

            return res.status(200).json({ message: "Usuario creado con éxito" });
        });
}