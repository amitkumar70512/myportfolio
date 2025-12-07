# Personal Portfolio Website

A modern, responsive personal portfolio website built with vanilla HTML, CSS, and JavaScript. Optimized for GitHub Pages hosting.

## Features

✨ **Complete Feature Set:**
- Hero section with animated stats
- About me with tech stack showcase
- Portfolio/Projects with filtering
- Skills matrix with progress bars
- Experience timeline
- Achievements & certifications
- Blog section with search and categories
- Testimonials slider
- Personal interests showcase
- Contact form
- Dark/Light mode toggle
- Fully responsive design
- SEO optimized
- Performance optimized

## Quick Start

### 1. Customize Your Content

Edit `js/data.js` to add your:
- Projects
- Experience
- Achievements
- Blog posts
- Testimonials

### 2. Update Personal Information

In `index.html`, replace:
- `[Your Name]` with your actual name
- Email addresses
- Social media links
- Profile image path

### 3. Add Your Images

Place your images in the `assets/images/` folder:
- `profile.jpg` - Your profile photo
- `favicon.png` - Website favicon
- `og-image.jpg` - Social media preview image
- `projects/` - Project screenshots
- `blog/` - Blog post images
- `testimonials/` - Testimonial author photos

### 4. Add Your Resume

Place your resume PDF in `assets/resume.pdf`

## Deployment to GitHub Pages

### Option 1: GitHub Pages (Recommended)

1. Create a new repository named `yourusername.github.io`
2. Push this code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```
3. Go to repository Settings → Pages
4. Select `main` branch as source
5. Your site will be live at `https://yourusername.github.io`

### Option 2: Project Repository

1. Create any repository (e.g., `portfolio`)
2. Push code to the repository
3. Go to Settings → Pages
4. Select `main` branch as source
5. Your site will be live at `https://yourusername.github.io/portfolio`

## Customization Guide

### Colors & Theme

Edit CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #7c3aed;
    --accent-color: #06b6d4;
    /* ... more variables */
}
```

### Contact Form Integration

The contact form is ready to integrate with:

**Formspree (Recommended for static sites):**
1. Sign up at [formspree.io](https://formspree.io/)
2. Create a new form
3. Update the form action in `js/main.js`:
   ```javascript
   fetch('https://formspree.io/f/YOUR_FORM_ID', {
       method: 'POST',
       body: JSON.stringify(formData),
       headers: { 'Content-Type': 'application/json' }
   })
   ```

**Other options:**
- EmailJS
- Netlify Forms
- GitHub Issues API

### Analytics

Add Google Analytics by inserting this before `</head>` in `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## File Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   ├── styles.css         # Main styles
│   └── responsive.css     # Responsive design
├── js/
│   ├── data.js           # Portfolio data
│   └── main.js           # Main JavaScript
├── assets/
│   ├── images/           # Images folder
│   │   ├── profile.jpg
│   │   ├── projects/
│   │   ├── blog/
│   │   └── testimonials/
│   ├── icons/            # Icon files
│   └── resume.pdf        # Your resume
└── README.md
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Tips

1. **Optimize Images:**
   - Use WebP format when possible
   - Compress images (use tools like TinyPNG)
   - Recommended sizes:
     - Profile: 400x400px
     - Projects: 800x600px
     - Blog: 600x400px

2. **Lazy Loading:**
   - Already implemented for images
   - Images load as user scrolls

3. **Minify for Production:**
   ```bash
   # Install minification tools
   npm install -g html-minifier clean-css-cli uglify-js
   
   # Minify files
   html-minifier --collapse-whitespace --remove-comments index.html -o index.min.html
   cleancss -o css/styles.min.css css/styles.css
   uglifyjs js/main.js -o js/main.min.js
   ```

## SEO Checklist

- [x] Meta descriptions
- [x] Open Graph tags
- [x] Semantic HTML
- [x] Alt text for images
- [x] Sitemap (add `sitemap.xml`)
- [x] Robots.txt (add `robots.txt`)

### Add sitemap.xml:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourusername.github.io/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Add robots.txt:
```
User-agent: *
Allow: /
Sitemap: https://yourusername.github.io/sitemap.xml
```

## License

MIT License - feel free to use this template for your own portfolio!

## Credits

- Icons: [Font Awesome](https://fontawesome.com/)
- Fonts: System fonts for optimal performance

## Support

If you find this useful, consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting features

---

Built with ❤️ and vanilla JavaScript
