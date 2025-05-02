# Projet Edacy Backend

Ce projet est une API REST développée avec Node.js, Express et Sequelize, utilisant MySQL comme SGBD. Il permet la gestion de produits et d'utilisateurs.

## Prérequis

- **Node.js** (v14 ou supérieur recommandé)
- **npm** (installé avec Node.js)
- **XAMPP** (pour MySQL)
- **Git**

## Installation

1. **Cloner le dépôt**

```bash
git clone https://github.com/donta224/projetEdacyBackend.git
cd projetEdacyBackend
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Configurer la base de données**

- Lancez XAMPP et démarrez le serveur MySQL.
- Créez une base de données nommée `gestion_produits` via phpMyAdmin ou en ligne de commande MySQL :

```sql
CREATE DATABASE gestion_produits;
```

- Par défaut, la connexion utilise l'utilisateur `root` sans mot de passe (voir `config/database.js`). Modifiez ce fichier si besoin.

4. **Configurer les variables d'environnement**

Créez un fichier `.env` à la racine du projet (s'il n'existe pas) et ajoutez :

```
JWT_SECRET=supersecret1234
```

## Lancer le serveur

```bash
node app.js
```

Ou, pour le développement avec rechargement automatique :

```bash
npx nodemon app.js
```

Le serveur sera accessible sur `http://localhost:5000` (ou le port défini dans votre variable d'environnement `PORT`).

## Structure du projet

- `app.js` : Point d'entrée de l'application
- `config/` : Configuration (base de données, multer)
- `routes/` : Définition des routes API
- `controllers/` : Logique métier
- `models/` : Modèles Sequelize
- `middlewares/` : Middlewares personnalisés
- `uploads/` : Dossier pour les fichiers uploadés

## Technologies utilisées

- Node.js
- Express
- Sequelize
- MySQL (via XAMPP)
- JWT pour l'authentification
- Multer pour l'upload de fichiers

## Remarques

- Assurez-vous que MySQL tourne bien sur XAMPP avant de lancer le backend.
- Les endpoints principaux sont accessibles sous `/api/utilisateurs` et `/api/produits`.
