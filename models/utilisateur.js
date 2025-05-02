const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Définition du modèle Utilisateur
const Utilisateur = sequelize.define('Utilisateur', {
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    mot_de_passe: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'utilisateurs', 
    timestamps: true           
});

module.exports = Utilisateur;
