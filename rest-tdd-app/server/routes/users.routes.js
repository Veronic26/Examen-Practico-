/**
 * Rutas de Usuarios
 * Autor: Veronica Thalia Campoverde Maza
 */

const express = require('express');
const router = express.Router();
const users = require('../data/users.json');

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }

  res.json(user);
});

module.exports = router;
