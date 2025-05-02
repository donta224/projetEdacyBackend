const express = require('express');
const { inscrireUtilisateur, connecterUtilisateur } = require('../controllers/authController');

const router = express.Router();

// Inscription
router.post('/inscription', inscrireUtilisateur);

// Connexion
router.post('/connexion', connecterUtilisateur);

module.exports = router;
