# Build Instructions - Shorter Timlin Archivists Website

## Prerequisites

- Hugo Extended v0.155.1 or higher
- Git
- GitHub account (for deployment)
- Netlify account (for hosting)

## Local Development

### 1. Install Hugo (if not already installed)

Hugo is already installed at `~/bin/hugo` on this system.

To verify installation:
```bash
export PATH="$HOME/bin:$PATH"
hugo version
```

Expected output: `hugo v0.157.0+extended` or higher

### 2. Start Local Development Server

From the project directory (`/home/benj/projects/helen`):

```bash
export PATH="$HOME/bin:$PATH"
hugo server -D
```

**Options:**
- `-D` = Include draft content
- `--bind 0.0.0.0` = Allow external access (useful for testing on other devices)
- `--port 1313` = Default port (change if needed)
- `--disableFastRender` = Full rebuilds on change (slower but more reliable)

**Access the site:**
- Local: http://localhost:1313
- Network: http://[your-ip]:1313 (if using --bind 0.0.0.0)

**Hot Reload:**
The server automatically rebuilds when you save changes to content or layouts.

### 3. Stop the Server

Press `Ctrl+C` in the terminal running Hugo server.

## Building for Production

### Build Static Site

```bash
export PATH="$HOME/bin:$PATH"
hugo --gc --minify
```

**Build flags:**
- `--gc` = Clean up unused cache files
- `--minify` = Minify HTML, CSS, JS for faster loading
- `--baseURL` = Override base URL if needed

**Output:**
- Static files generated in `public/` directory
- This is what gets deployed to your web host

### Verify Build

Check that the build completed successfully:
```bash
ls -la public/
```

You should see:
- `index.html` (homepage)
- Directories: `about/`, `services/`, `case-studies/`, `contact/`, etc.
- `css/`, `js/` directories
- `sitemap.xml`

## Deployment Options

### Option 1: Netlify (Recommended)

**A. Initial Setup**

1. **Create GitHub Repository:**
   ```bash
   # Create a new repository on GitHub first, then:
   cd /home/benj/projects/helen
   git remote add origin https://github.com/YOUR-USERNAME/shorter-timlin-archivists.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authenticate
   - Select your repository
   - Netlify will auto-detect settings from `netlify.toml`
   - Click "Deploy site"

**B. Configuration (already done in netlify.toml):**
- Build command: `hugo --gc --minify`
- Publish directory: `public`
- Hugo version: 0.155.1
- Environment: Production

**C. Enable Form Notifications:**
- Go to Site Settings → Forms
- Enable form notifications
- Add email address for form submissions
- Forms will appear at: Site Settings → Forms → Form submissions

**D. Custom Domain Setup:**
- Go to Site Settings → Domain management
- Click "Add custom domain"
- Follow DNS configuration instructions
- SSL certificate is automatically provisioned

**Continuous Deployment:**
- Push to `main` branch → automatic production deploy
- Pull requests → automatic preview deployments with unique URLs

### Option 2: Manual Deployment (Any Web Host)

1. **Build the site:**
   ```bash
   export PATH="$HOME/bin:$PATH"
   hugo --gc --minify
   ```

2. **Upload the `public/` folder contents to your web host:**
   - Via FTP/SFTP
   - Via hosting control panel
   - Via rsync, etc.

**Note:** Contact form will NOT work without Netlify Forms or alternative form backend.

### Option 3: GitHub Pages

1. **Build the site:**
   ```bash
   export PATH="$HOME/bin:$PATH"
   hugo --gc --minify
   ```

2. **Deploy to GitHub Pages:**
   - Create a `gh-pages` branch
   - Push `public/` contents to this branch
   - Enable GitHub Pages in repository settings

**Note:** Contact form requires alternative form backend (Formspree, Basin, etc.)

## Content Management

### Creating New Case Studies

```bash
export PATH="$HOME/bin:$PATH"
hugo new case-studies/project-name.md
```

This creates a new file at `content/case-studies/project-name.md` using the template from `archetypes/case-study.md`.

**Edit the file:**
1. Update front matter (title, date, client, categories, etc.)
2. Change `draft = true` to `draft = false` when ready to publish
3. Write content in the provided sections
4. Add images to `static/images/case-studies/`

### Creating New Testimonials

```bash
export PATH="$HOME/bin:$PATH"
hugo new testimonials/client-name.md
```

**Edit the file:**
1. Fill in client_name, client_role, client_organization
2. Set `featured = true` for homepage display
3. Write 50-100 word testimonial
4. Change `draft = false` when ready

### Editing Existing Pages

Content files are in `content/`:
- Homepage: `content/_index.md`
- About: `content/about.md`
- Services: `content/services.md`
- Contact: `content/contact.md`

Edit with any text editor, save, and Hugo will auto-rebuild if server is running.

## Adding Images

### Logo
```bash
# Add your logo to:
cp your-logo.svg static/images/logo/logo.svg
```

### Favicon
```bash
cp your-favicon.ico static/favicon.ico
```

### Case Study Images
```bash
cp project-images/* static/images/case-studies/project-name/
```

Reference in case study front matter:
```yaml
images = ["/images/case-studies/project-name/image1.jpg"]
featured_image = "/images/case-studies/project-name/hero.jpg"
```

## Configuration Updates

### Update Contact Information

Edit `hugo.toml`:
```toml
[params.contact]
  email = "your-actual-email@example.com"
  phone = "+44 1234 567890"
  address = "Your actual address"
```

### Update Base URL (after domain setup)

Edit `hugo.toml`:
```toml
baseURL = 'https://www.yourdomain.com/'
```

### Update Colors/Branding

Edit `hugo.toml` under `[params.colors]`:
```toml
[params.colors]
  primary = "#2c3e50"  # Change to your brand color
  black = "#2f2f41"
  white = "#ffffff"
  white_offset = "#f8f9fa"
  grey = "#5C5A5A"
```

## Testing Checklist

Before deploying to production:

- [ ] Test all pages load correctly
- [ ] Test navigation menu on desktop and mobile
- [ ] Test contact form submission (on Netlify preview)
- [ ] Verify all images display properly
- [ ] Check case studies render correctly
- [ ] Verify testimonials appear on homepage (if featured)
- [ ] Test responsive design on mobile devices
- [ ] Check all internal links work
- [ ] Verify external links open correctly
- [ ] Run Lighthouse audit (aim for 90+ performance)
- [ ] Check browser console for errors

## Troubleshooting

### Hugo command not found
```bash
export PATH="$HOME/bin:$PATH"
```

### Build errors about SCSS
Make sure you're using Hugo Extended (not standard Hugo):
```bash
hugo version
# Should show "extended"
```

### Form not working locally
Netlify Forms only work when deployed to Netlify. For local testing, form will submit but won't send emails.

### Changes not showing
Hard refresh browser: `Ctrl+Shift+R` (Linux/Windows) or `Cmd+Shift+R` (Mac)

### Port already in use
```bash
# Find and kill the process
pkill -f "hugo server"
# Or use a different port
hugo server --port 1314
```

## Git Workflow

### Committing Changes
```bash
git status
git add .
git commit -m "Description of changes"
git push origin main
```

### Creating a New Feature Branch
```bash
git checkout -b feature-name
# Make changes
git add .
git commit -m "Feature description"
git push origin feature-name
# Create pull request on GitHub
```

## Performance Optimization

### Optimize Images Before Uploading
- Use WebP format when possible (with JPEG/PNG fallbacks)
- Compress images: aim for <200KB per image
- Use appropriate dimensions (max 1920px wide for hero images)
- Tools: ImageOptim, TinyPNG, Squoosh

### Minification
Already configured in build command (`--gc --minify`)

### Caching
Already configured in `netlify.toml` for static assets

## Security

### Form Spam Protection
- Honeypot field already implemented in contact form
- Netlify provides additional spam filtering
- Consider adding reCAPTCHA if spam becomes an issue

### HTTPS
- Automatically provided by Netlify
- Certificate auto-renews

### Security Headers
Already configured in `netlify.toml`:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block

## Support & Resources

- **Hugo Documentation:** https://gohugo.io/documentation/
- **Hugo Serif Theme:** https://github.com/zerostaticthemes/hugo-serif-theme
- **Netlify Documentation:** https://docs.netlify.com/
- **Netlify Forms:** https://docs.netlify.com/forms/setup/

## Quick Reference Commands

```bash
# Start development server
export PATH="$HOME/bin:$PATH" && hugo server -D

# Build for production
export PATH="$HOME/bin:$PATH" && hugo --gc --minify

# Create new case study
export PATH="$HOME/bin:$PATH" && hugo new case-studies/project-name.md

# Create new testimonial
export PATH="$HOME/bin:$PATH" && hugo new testimonials/client-name.md

# Check Hugo version
export PATH="$HOME/bin:$PATH" && hugo version

# Git commit and push
git add . && git commit -m "Update content" && git push
```
