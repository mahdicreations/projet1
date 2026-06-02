#!/bin/bash

# ========================================================================
# SARAHGLAM'S - AUTO-BUILD & DEPLOYMENT SCRIPT
# ========================================================================

# Arrêter le script en cas d'erreur
set -e

echo "✨ 1. Lancement de la compilation statique (npm run build)..."
npm run build

echo "📂 2. Copie récursive des fichiers compilés à la racine du projet..."
node copy-out.js

echo "📦 3. Ajout de TOUS les fichiers (source + compilés racine) à Git..."
git add .

echo "💾 4. Création du commit Git..."
git commit -m "Auto-build and deploy everything"

echo "🚀 5. Poussée des fichiers vers le dépôt distant (main)..."
git push origin main

echo "🎉 Déploiement automatique terminé avec succès ! ✨"
