const Produit = require('../models/produit');

// Créer un produit
exports.creerProduit = async (req, res) => {
    try {
        const { nom, description, prix, quantite_stock } = req.body;
        const image = req.file ? req.file.filename : null;

        const produit = await Produit.create({
            nom,
            description,
            prix,
            quantite_stock,
            image,
            utilisateurId: req.user.id, // pris depuis le token JWT
        });

        res.status(201).json(produit);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtenir tous les produits
exports.obtenirProduits = async (req, res) => {
    try {
        const produits = await Produit.findAll({ where: { utilisateurId: req.user.id } });
        res.status(200).json(produits);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtenir un seul produit par ID
exports.obtenirProduit = async (req, res) => {
    try {
        const produit = await Produit.findOne({
            where: { id: req.params.id, utilisateurId: req.user.id }
        });

        if (!produit) {
            return res.status(404).json({ message: "Produit non trouvé" });
        }

        res.status(200).json(produit);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Mettre à jour un produit
exports.mettreAJourProduit = async (req, res) => {
    try {
        const { nom, description, prix, quantite_stock } = req.body;

        const produit = await Produit.findOne({
            where: { id: req.params.id, utilisateurId: req.user.id }
        });

        if (!produit) {
            return res.status(404).json({ message: "Produit non trouvé" });
        }

        const nouvelleImage = req.file ? req.file.filename : produit.image;

        await produit.update({
            nom: nom || produit.nom,
            description: description || produit.description,
            prix: prix || produit.prix,
            quantite_stock: quantite_stock || produit.quantite_stock,
            image: nouvelleImage,
        });

        res.status(200).json(produit);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Supprimer un produit
exports.supprimerProduit = async (req, res) => {
    try {
        const produit = await Produit.findOne({
            where: { id: req.params.id, utilisateurId: req.user.id }
        });

        if (!produit) {
            return res.status(404).json({ message: "Produit non trouvé" });
        }

        await produit.destroy();
        res.status(200).json({ message: "Produit supprimé avec succès" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
