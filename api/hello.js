// hello.js — Endpoint de verificación: confirma que el backend responde

export default function handler(req, res) {
    res.status(200).json({ok: true});
}