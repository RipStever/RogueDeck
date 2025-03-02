# PowerShell script for deploying to GitHub Pages

Write-Host "Building web app..." -ForegroundColor Green
flutter build web --release --base-href /RogueDeck/

# Switch to the build/web directory
Write-Host "Setting up Git in the build/web directory..." -ForegroundColor Green
Set-Location -Path "C:\Users\lowen\card_game\build\web"

# Initialize Git (if needed)
if (-not (Test-Path -Path ".git")) {
    git init
}

# Configure git user
git config user.name "RipStever"
git config user.email "lowendz113@gmail.com"

# Force clean state by removing remote if exists
git remote remove origin

# Re-add the remote
git remote add origin https://github.com/RipStever/RogueDeck.git

# Add all files
git add .

# Commit
git commit -m "Deploy to GitHub Pages"

# Create gh-pages branch
git branch -M gh-pages

# Force push to gh-pages branch
git push -f origin gh-pages

Write-Host "Deployment complete!" -ForegroundColor Green

# Return to original directory
Set-Location -Path "C:\Users\lowen\card_game"
