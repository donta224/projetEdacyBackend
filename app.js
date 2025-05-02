const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const produitRoutes = require('./routes/produitRoutes');
const path = require('path');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Pour rendre les fichiers du dossier uploads accessibles
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/utilisateurs', authRoutes);
app.use('/api/produits', produitRoutes);

// Synchroniser Sequelize avec la base de données
sequelize.sync()
  .then(() => {
    console.log('✅ Connexion à la base de données réussie');

    // Démarrer le serveur
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Serveur backend démarré sur le port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ Impossible de connecter à la base de données :', error);
  });
