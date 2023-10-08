const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

function verificarToken(req, res, next) {
    let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ msg: 'Acceso denegado. Token no proporcionado' });
  }
    //esto solo en insomnia
    token = token.split( ' ')[1];
  try {
    const decoded = jwt.verify(token, secretKey);
    req.usuario = decoded.usuario;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token no válido' });
  }
}

module.exports = verificarToken;
