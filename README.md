# Personal Portfolio Website

A modern, responsive personal portfolio website built with vanilla HTML, CSS, and JavaScript. Optimized for GitHub Pages hosting.


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

---

Built with ❤️ and vanilla JavaScript
