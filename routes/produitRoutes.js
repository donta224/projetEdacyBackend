const express = require('express');
const { creerProduit, obtenirProduits, obtenirProduit, mettreAJourProduit, supprimerProduit } = require('../controllers/produitController');
const authMiddleware = require('../middlewares/authMiddleware');
const upload = require('../config/multer');

const router = express.Router();

// CRUD PRODUITS (routes protégées)
router.post('/', authMiddleware, upload.single('image'), creerProduit); // Créer un produit avec upload image
router.get('/', authMiddleware, obtenirProduits); // Lire tous les produits
router.get('/:id', authMiddleware, obtenirProduit); // Lire un produit spécifique
router.put('/:id', authMiddleware, upload.single('image'), mettreAJourProduit); // Modifier un produit avec possibilité de changer image
router.delete('/:id', authMiddleware, supprimerProduit); // Supprimer un produit

module.exports = router;
