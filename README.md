# TechSortie Website

Dark hacker-aesthetic website for TechSortie offensive security services.

## Features

- ⚡ Dark theme with animated grid background
- 🎯 Glitch effects and terminal aesthetics
- 📱 Fully responsive design
- 🔥 Smooth animations and transitions
- 💻 Terminal window with live command simulation
- 📊 Animated statistics counters
- 📬 Contact form (ready for backend integration)

## Tech Stack

- Pure HTML5, CSS3, JavaScript
- Google Fonts (JetBrains Mono, Outfit)
- No build process required
- No dependencies

## Deployment to Azure Static Web Apps

### Option 1: Azure Portal (Easiest)

1. **Create Azure Static Web App:**
   - Go to [Azure Portal](https://portal.azure.com)
   - Click "Create a resource"
   - Search for "Static Web App"
   - Click "Create"

2. **Configure:**
   - Subscription: Select your subscription
   - Resource Group: Create new or use existing
   - Name: `techsortie` (or your preferred name)
   - Plan type: Free (for personal sites)
   - Region: Choose closest to your target audience
   - Deployment source: "Other" (manual upload)

3. **Deploy:**
   - Once created, go to your Static Web App resource
   - Click "Upload" in the left menu
   - Upload all files from the `techsortie-website` folder
   - Your site will be live at: `https://[your-app-name].azurestaticapps.net`

### Option 2: Azure CLI

```bash
# Install Azure CLI if you haven't
# https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

# Login to Azure
az login

# Create resource group
az group create --name techsortie-rg --location eastus

# Create Static Web App
az staticwebapp create \
  --name techsortie \
  --resource-group techsortie-rg \
  --source . \
  --location eastus \
  --branch main \
  --app-location "/" \
  --output-location "/"

# Deploy
az staticwebapp deploy \
  --name techsortie \
  --resource-group techsortie-rg \
  --app-location .
```

### Option 3: GitHub Actions (Recommended for Production)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/techsortie.git
   git push -u origin main
   ```

2. **Create Static Web App with GitHub:**
   - In Azure Portal, create Static Web App
   - Choose "GitHub" as deployment source
   - Authorize GitHub access
   - Select your repository
   - Azure will automatically create a GitHub Action workflow

3. **Automatic Deployments:**
   - Every push to `main` branch will automatically deploy
   - Preview deployments for pull requests

## Custom Domain Setup

1. **In Azure Portal:**
   - Go to your Static Web App
   - Click "Custom domains"
   - Click "Add"
   - Enter your domain: `techsortie.com`

2. **DNS Configuration:**
   Add these records to your DNS provider:
   ```
   Type: CNAME
   Name: www
   Value: [your-app-name].azurestaticapps.net

   Type: TXT
   Name: @
   Value: [verification-code-from-azure]
   ```

3. **SSL Certificate:**
   - Azure automatically provisions free SSL certificates
   - Your site will be accessible via HTTPS

## Environment Variables

For the contact form to work, you'll need to add a backend. Options:

### Azure Functions (Recommended)

Add an `api` folder with Azure Functions:

```javascript
// api/contact/index.js
module.exports = async function (context, req) {
    const { name, email, company, message } = req.body;
    
    // Send email using SendGrid, Mailgun, or similar
    // Store in database if needed
    
    context.res = {
        status: 200,
        body: { success: true }
    };
};
```

### Configure in Azure:
- Go to Static Web App > Configuration
- Add API endpoint settings
- Environment variables for email service

## File Structure

```
techsortie-website/
├── index.html              # Main HTML file
├── styles.css              # All styles
├── script.js               # JavaScript functionality
├── favicon.png             # Favicon
├── techsortie_dark_logo.png    # Logo for dark backgrounds
├── techsortie_light_logo.png   # Logo for light backgrounds
└── techsortie_icon_dark.png    # Icon version
```

## Performance Optimization

The site is already optimized, but for production:

1. **Image Optimization:**
   ```bash
   # Install imagemin-cli
   npm install -g imagemin-cli imagemin-pngquant

   # Optimize PNGs
   imagemin *.png --out-dir=. --plugin=pngquant
   ```

2. **Minification (optional):**
   - CSS: Use cssnano or clean-css
   - JS: Use terser or uglify-js
   - HTML: Use html-minifier

3. **CDN Configuration:**
   - Azure Static Web Apps includes global CDN
   - No additional configuration needed

## Cost

**Azure Static Web Apps Free Tier includes:**
- 100 GB bandwidth/month
- Custom domain + SSL
- Global CDN
- Automatic HTTPS
- GitHub Actions integration

For TechSortie's needs, the free tier is more than sufficient.

## Support & Updates

To update the site:
1. Make changes locally
2. Test in browser
3. Upload to Azure (portal) or push to GitHub (auto-deploy)

## Email Configuration

Replace `kenny@techsortie.com` in the code with your actual email once domain is configured.

## Analytics (Optional)

Add Google Analytics or Plausible by inserting tracking code before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

**Built for TechSortie | Offensive Security**  
First strike, mission complete.