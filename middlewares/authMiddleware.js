const jwt = require('jsonwebtoken');

// Middleware de protection
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded; // Ajout des infos utilisateur au request
            next();
        } catch (error) {
            return res.status(401).json({ message: "Token invalide" });
        }
    } else {
        return res.status(401).json({ message: "Accès refusé, token manquant" });
    }
};

module.exports = authMiddleware;
