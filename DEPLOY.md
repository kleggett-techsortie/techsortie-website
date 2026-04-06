# Deploy TechSortie to Azure Static Web Apps

## Quick Deploy (5 Minutes)

### Step 1: Login to Azure
Go to: https://portal.azure.com

### Step 2: Create Static Web App

1. Click **"Create a resource"** (big + icon)
2. Search for **"Static Web App"**
3. Click **"Create"**

### Step 3: Configure Basic Settings

**Basics tab:**
- **Subscription:** Select your Azure subscription
- **Resource Group:** 
  - Click "Create new"
  - Name it: `techsortie-rg`
- **Name:** `techsortie` (or any name you prefer)
  - This becomes your URL: `techsortie.azurestaticapps.net`
- **Plan type:** **Free** (perfect for this site)
- **Region:** 
  - **East US 2** (recommended) or closest to Northern Virginia
- **Deployment details:**
  - Source: **Other**

Click **"Review + create"** → **"Create"**

Wait 30 seconds for deployment to complete, then click **"Go to resource"**

### Step 4: Upload Your Site

1. In your Static Web App resource, look at the left menu
2. Click **"Upload"** (under Deployment)
3. Click **"Browse for files"** or drag and drop
4. **Select ALL files** from the `techsortie-website` folder:
   ```
   ✓ index.html
   ✓ styles.css
   ✓ script.js
   ✓ favicon.ico
   ✓ staticwebapp.config.json
   ✓ All .png images (banner, profile, logos, etc.)
   ```
5. Click **"Upload"**

**Wait 1-2 minutes for deployment to complete.**

### Step 5: View Your Live Site

1. In Azure Portal, go to your Static Web App
2. Click **"Overview"** in the left menu
3. Look for **"URL"** - it will be something like:
   ```
   https://techsortie.azurestaticapps.net
   ```
4. Click the URL - your site is LIVE! 🚀

---

## Add Custom Domain (Optional)

### Buy Domain (if you don't have one)
- Namecheap, GoDaddy, Google Domains, etc.
- Suggested: `techsortie.com`

### Configure in Azure

1. In your Static Web App → Click **"Custom domains"**
2. Click **"+ Add"**
3. Choose **"Custom domain on Azure DNS"** or **"Custom domain on other DNS"**
4. Enter your domain: `techsortie.com`
5. Azure will show you DNS records to add

### Add DNS Records

Go to your domain registrar's DNS settings and add:

**For root domain (techsortie.com):**
```
Type: TXT
Name: @
Value: [verification-code-from-azure]
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: techsortie.azurestaticapps.net
```

**Wait 5-10 minutes** for DNS propagation, then click **"Validate"** in Azure.

**SSL Certificate:** Azure automatically provisions a free SSL certificate (HTTPS). No configuration needed!

---

## Update Your Site Later

To update the site after initial deployment:

### Option A: Azure Portal Upload
1. Go to your Static Web App
2. Click "Upload"
3. Upload updated files
4. Done!

### Option B: GitHub Auto-Deploy (Recommended for Future)

1. Create a GitHub repository for your site
2. Push your website files to GitHub
3. In Azure Portal, go to your Static Web App
4. Click "Deployment" → "Configure"
5. Connect your GitHub repository
6. Every time you push to GitHub, Azure auto-deploys!

---

## Troubleshooting

**Issue: Files not uploading**
- Make sure you're uploading files, not the folder
- Select all files individually
- Try a different browser

**Issue: Site shows 404**
- Wait 2-3 minutes after upload
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

**Issue: Images not loading**
- Verify all .png files were uploaded
- Check file names match exactly (case-sensitive)

**Issue: Custom domain not working**
- Wait 10-15 minutes for DNS propagation
- Use https://dnschecker.org to verify DNS records
- Make sure TXT record is added for verification

---

## Cost

**Azure Static Web Apps Free Tier includes:**
- ✅ 100 GB bandwidth per month
- ✅ 0.5 GB storage
- ✅ Custom domains + Free SSL
- ✅ Global CDN (fast worldwide)
- ✅ Automatic HTTPS
- ✅ No credit card required for free tier

**Your site will cost: $0/month**

---

## Site URLs

After deployment you'll have:

**Default Azure URL:**
```
https://[your-app-name].azurestaticapps.net
```

**After custom domain setup:**
```
https://techsortie.com
https://www.techsortie.com
```

Both will work automatically with SSL!

---

## Next Steps After Deployment

1. **Test everything:**
   - All pages load
   - Contact form displays correctly
   - Mobile view works
   - All images show up

2. **Update contact info:**
   - Make sure phone number is correct
   - Update email once domain is set up

3. **Add Google Analytics** (optional):
   - Get tracking ID from Google Analytics
   - Add to `index.html` before `</head>`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

4. **Setup email forwarding:**
   - Once you own `techsortie.com`
   - Forward `kenny@techsortie.com` to your real email
   - Most domain registrars offer free email forwarding

---

## Support

**Azure Documentation:**
https://docs.microsoft.com/en-us/azure/static-web-apps/

**Need Help?**
- Azure Support (free tier has community support)
- Call Kenny: 757-816-2672

---

**Ready to deploy? Follow Step 1 above!** 🚀
