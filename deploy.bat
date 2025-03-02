@echo off
echo Building web app...
flutter build web --release --base-href /RogueDeck/

echo Setting up git...
cd build/web
git init
git config user.name "Your Name"
git config user.email "your.email@example.com"
git add .
git commit -m "Deploy to GitHub Pages"
git branch -M gh-pages
git remote add origin https://github.com/RipStever/RogueDeck.git
git push -f origin gh-pages

echo Deployment complete!
