const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Utilisateur = require('./utilisateur');

// Définition du modèle Produit
const Produit = sequelize.define('Produit', {
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    prix: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    quantite_stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    image: {
        type: DataTypes.STRING,  // Chemin du fichier image stocké
        allowNull: true
    },
}, {
    tableName: 'produits',  
    timestamps: false,       
});

// Définir la relation Produit → Utilisateur (clé étrangère utilisateurId)
Produit.belongsTo(Utilisateur, { foreignKey: 'utilisateurId' });

module.exports = Produit;
