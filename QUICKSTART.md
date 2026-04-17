# Quick Start Guide

## Run Locally (Development)

```bash
cd /home/benj/projects/helen
export PATH="$HOME/bin:$PATH"
hugo server -D
```

Open browser to: **http://localhost:1313**

Press `Ctrl+C` to stop.

## Build for Production

```bash
export PATH="$HOME/bin:$PATH"
hugo --gc --minify
```

Output in `public/` directory.

## Deploy to Netlify

### One-Time Setup

1. **Push to GitHub:**
   ```bash
   # Create repo on GitHub first, then:
   git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git
   git push -u origin main
   ```

2. **Connect Netlify:**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository
   - Netlify auto-detects settings from `netlify.toml`
   - Click "Deploy site"

### Future Updates

```bash
git add .
git commit -m "Update content"
git push
```

Netlify automatically rebuilds and deploys.

## Add Content

### New Case Study
```bash
export PATH="$HOME/bin:$PATH"
hugo new case-studies/project-name.md
```

Edit `content/case-studies/project-name.md`, change `draft = false`, save.

### New Testimonial
```bash
export PATH="$HOME/bin:$PATH"
hugo new testimonials/client-name.md
```

Edit `content/testimonials/client-name.md`, set `featured = true` for homepage, change `draft = false`.

## Update Contact Info

Edit `hugo.toml`:
```toml
[params.contact]
  email = "your-email@example.com"
  phone = ""
  address = "Your Address"
```

## Add Images

- **Logo:** `static/images/logo/logo.svg`
- **Favicon:** `static/favicon.ico`
- **Case studies:** `static/images/case-studies/`

---

**For detailed instructions, see [BUILD.md](BUILD.md)**
