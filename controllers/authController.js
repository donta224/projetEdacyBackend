const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Utilisateur = require('../models/utilisateur');

// Inscription
exports.inscrireUtilisateur = async (req, res) => {
    const { nom, email, mot_de_passe } = req.body;

    try {
        const utilisateurExiste = await Utilisateur.findOne({ where: { email } });

        if (utilisateurExiste) {
            return res.status(400).json({ message: "Cet email est déjà utilisé" });
        }

        const motDePasseCrypte = await bcrypt.hash(mot_de_passe, 10);

        const utilisateur = await Utilisateur.create({
            nom,
            email,
            mot_de_passe: motDePasseCrypte,
        });

        res.status(201).json({ message: "Utilisateur inscrit avec succès" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Connexion
exports.connecterUtilisateur = async (req, res) => {
    const { email, mot_de_passe } = req.body;

    try {
        const utilisateur = await Utilisateur.findOne({ where: { email } });

        if (!utilisateur) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }

        const motDePasseValide = await bcrypt.compare(mot_de_passe, utilisateur.mot_de_passe);

        if (!motDePasseValide) {
            return res.status(401).json({ message: "Mot de passe incorrect" });
        }

        const token = jwt.sign(
            { id: utilisateur.id, nom: utilisateur.nom, email: utilisateur.email },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
