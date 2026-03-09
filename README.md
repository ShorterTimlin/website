# Shorter Timlin Archivists Website

Professional static website for Shorter Timlin Archivists built with Hugo.

## Overview

This is a professional business website showcasing archival services, case studies, client testimonials, and contact information. Built with Hugo static site generator and the Hugo Serif theme.

## Tech Stack

- **Hugo** v0.157.0+ (Extended)
- **Theme**: Hugo Serif Theme
- **Deployment**: GitHub Pages via GitHub Actions
- **Forms**: Netlify Forms markup is still present in the contact form

## Local Development

### Prerequisites

- Hugo Extended v0.155.1 or higher
- Git

### Running Locally

```bash
# Install Hugo (if not already installed)
# Download from: https://github.com/gohugoio/hugo/releases

# Clone the repository
git clone [repository-url]
cd helen

# Start the development server
hugo server -D

# Access the site at http://localhost:1313
```

## Project Structure

```
/
├── archetypes/          # Content templates
│   ├── case-study.md
│   ├── testimonial.md
│   └── default.md
├── content/             # Site content
│   ├── _index.md        # Homepage
│   ├── about.md
│   ├── services.md
│   ├── contact.md
│   ├── case-studies/    # Portfolio projects
│   └── testimonials/    # Client reviews
├── layouts/
│   ├── partials/
│   │   └── contact-form.html
│   └── shortcodes/
│       └── contact-form.html
├── static/
│   └── images/          # Images and assets
├── themes/
│   └── hugo-serif-theme/
├── hugo.toml            # Site configuration
├── netlify.toml         # Deployment configuration
└── README.md
```

## Content Management

### Creating a Case Study

```bash
hugo new case-studies/my-project.md
```

Edit the front matter and content following the template in `archetypes/case-study.md`.

### Creating a Testimonial

```bash
hugo new testimonials/client-name.md
```

Edit the front matter and content following the template in `archetypes/testimonial.md`.

## Deployment

### GitHub Pages Deployment

1. Push to the `main` branch
2. In GitHub, open `Settings > Pages`
3. Set the source to `GitHub Actions` if it is not already enabled
4. The workflow in `.github/workflows/hugo.yml` will build and publish the site automatically on each push

### Build Command

```bash
hugo --gc --minify
```

### GitHub Pages URL

The site is configured for the repository Pages URL:

```text
https://shortertimlin.github.io/website/
```

If you later attach a custom domain, update `baseURL` in `hugo.toml` and add a `static/CNAME` file.

## Features

- Professional business theme
- Case study portfolio
- Client testimonials
- Contact form with Netlify Forms integration
- Spam protection (honeypot)
- Mobile responsive design
- SEO optimized
- Fast static site generation

## Configuration

Key configuration in `hugo.toml`:

- Site title and base URL
- Navigation menu
- Color scheme (professional navy/charcoal)
- Typography (Playfair Display headings, Lora body)
- Contact information
- Social media links

## Assets Needed

To complete the site, add the following assets to `static/images/`:

### Logo
- `logo/logo.svg` - Main logo (SVG preferred)
- `favicon.ico` - Browser favicon

### Case Studies
- Add project images to `images/case-studies/`
- Reference in case study front matter

### Optional
- `hero.jpg` - Homepage hero image
- Team photos in `images/team/`

## Contact Form

The contact form markup is currently integrated with Netlify Forms and includes:

- Name, email, organization, phone fields
- Project type dropdown
- Message textarea
- Honeypot spam protection
- Success page redirect

This form will not process submissions on GitHub Pages. If you want it to keep working after the move off Netlify, replace it with another form backend or serverless handler.

## License

This project uses the Hugo Serif Theme which is licensed under the MIT License.

## Support

For questions or issues, contact the development team.
