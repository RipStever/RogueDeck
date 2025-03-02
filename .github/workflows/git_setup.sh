#!/bin/bash
# Setup Git configuration for GitHub Pages deployment

# Configure Git user
git config --global user.name "RipStever"
git config --global user.email "lowendz113@gmail.com"

# Initialize repository if needed
if [ ! -d .git ]; then
  git init
  git branch -m main
fi

# Add files and commit
git add .
git commit -m "Deploy to GitHub Pages"

# Set remote if not already set
if ! git remote | grep -q origin; then
  git remote add origin https://github.com/RipStever/RogueDeck.git
fi

# Force push to main branch
git push -f origin main
