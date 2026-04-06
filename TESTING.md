# TechSortie Website - Local Testing Guide

## Problem: Website shows unstyled (no CSS)

This happens when opening `index.html` directly in your browser (file:// URL). Modern browsers block certain features for security.

## Solution: Run a local web server

### Option 1: Python (Easiest - Works on Mac/Linux/Windows)

```bash
# Navigate to the website folder
cd techsortie-website

# Run the server
python server.py

# OR if you don't have the server.py:
python -m http.server 8000
```

Then open: **http://localhost:8000**

### Option 2: Node.js (if you have it)

```bash
# Install http-server globally
npm install -g http-server

# Run in the website folder
cd techsortie-website
http-server

# Opens at http://localhost:8080
```

### Option 3: VS Code Live Server Extension

1. Open the `techsortie-website` folder in VS Code
2. Install "Live Server" extension
3. Right-click `index.html` → "Open with Live Server"

### Option 4: Just Deploy to Azure

The easiest solution is to just deploy it to Azure Static Web Apps (free tier). Once deployed, everything will work perfectly because it's served over HTTP.

## Verify Files Are Present

Make sure all these files are in the same folder:
```
techsortie-website/
├── index.html          ✓ Main HTML
├── styles.css          ✓ Styles (17KB)
├── script.js           ✓ JavaScript
├── favicon.ico         ✓ Icon
├── techsortie_banner.png      ✓ Banner image
├── techsortie_profile.png     ✓ Logo
└── (other images)
```

## Quick Azure Deploy (No Local Testing Needed)

1. Go to https://portal.azure.com
2. Create → Static Web App
3. Choose "Upload" as source
4. Drag and drop all files
5. Done - Live website with working CSS

---

**Still having issues?**
- Check browser console (F12) for errors
- Make sure you're not blocking CSS/JS in browser settings
- Try a different browser
- Contact Kenny at 757-816-2672
