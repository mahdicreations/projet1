#!/bin/bash

# ========================================================================
# SARAHGLAM'S - AUTO-BUILD & DEPLOYMENT SCRIPT
# ========================================================================

# Arrêter le script en cas d'erreur
set -e

echo "✨ 1. Lancement de la compilation statique (npm run build)..."
npm run build

echo "📦 2. Ajout des fichiers au gestionnaire de version Git (y compris le dossier 'out')..."
git add .

echo "💾 3. Création du commit Git..."
git commit -m "Auto-build and deploy"

echo "🚀 4. Poussée des fichiers vers le dépôt distant (main)..."
git push origin main

echo "🎉 Déploiement automatique terminé avec succès ! ✨"
