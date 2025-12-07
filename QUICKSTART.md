# Quick Start Guide

Get your portfolio live in 10 minutes!

## 🚀 Fast Track Setup

### 1. Essential Changes (2 minutes)

Open `index.html` and replace:
```
[Your Name] → Your actual name (appears 5+ times)
your.email@example.com → Your email
yourusername → Your GitHub username
yourprofile → Your LinkedIn username
yourhandle → Your Twitter/Instagram handle
```

### 2. Add Your Content (3 minutes)

Open `js/data.js` and update:
- **Projects**: Add your top 3-4 projects
- **Experience**: Add your work history
- **Blog**: Add your articles (or remove section)

### 3. Add Images (2 minutes)

Add these essential images to `assets/images/`:
- `profile.jpg` - Your photo (400x400px)
- `favicon.png` - Site icon (32x32px)

For projects, add to `assets/images/projects/`:
- `project1.jpg`, `project2.jpg`, etc.

### 4. Deploy to GitHub Pages (3 minutes)

```bash
# Initialize git
git init
git add .
git commit -m "Initial portfolio"

# Create repository on GitHub named: yourusername.github.io

# Push to GitHub
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git branch -M main
git push -u origin main
```

Go to: Settings → Pages → Select "main" branch → Save

**Your site is live at:** `https://yourusername.github.io` 🎉

## 📝 What to Do Next

### Immediate (Do today):
- [ ] Test your live site on mobile
- [ ] Share with friends for feedback
- [ ] Update your LinkedIn with portfolio link

### Soon (This week):
- [ ] Add your resume PDF to `assets/resume.pdf`
- [ ] Setup contact form with Formspree
- [ ] Optimize and compress all images
- [ ] Add Google Analytics

### Later (When you have time):
- [ ] Write blog posts
- [ ] Add more projects
- [ ] Get testimonials
- [ ] Custom domain setup

## 🎨 Quick Customization

### Change Colors
Edit `css/styles.css` line 3-5:
```css
--primary-color: #2563eb;    /* Your main color */
--secondary-color: #7c3aed;  /* Your accent color */
```

### Remove Sections You Don't Need
In `index.html`, delete or comment out:
- Blog section (if you don't blog)
- Testimonials (if you don't have any yet)
- Achievements (if not applicable)

## 🐛 Troubleshooting

**Images not showing?**
- Check file paths match exactly
- Ensure images are in correct folders
- Use lowercase file names

**Site not updating?**
- Wait 2-3 minutes for GitHub Pages to rebuild
- Clear browser cache (Ctrl+Shift+R)
- Check GitHub Actions tab for build status

**Contact form not working?**
- It's normal! You need to setup Formspree
- See CUSTOMIZATION.md for details
- Or remove form and just show email/social links

## 📱 Test Your Site

Before sharing:
1. Open on your phone
2. Try dark/light mode toggle
3. Click all navigation links
4. Test project filters
5. Verify all social links work

## 🎯 Pro Tips

1. **Keep it simple**: Start with basics, add more later
2. **Real content**: Use actual projects, not placeholders
3. **Professional photo**: Makes huge difference
4. **Mobile first**: Most visitors use phones
5. **Update regularly**: Add new projects as you build them

## 📚 Resources

- **Images**: [Unsplash](https://unsplash.com/) for placeholders
- **Icons**: [Font Awesome](https://fontawesome.com/)
- **Colors**: [Coolors](https://coolors.co/)
- **Compress**: [TinyPNG](https://tinypng.com/)

## 💡 Common Questions

**Q: Can I use a custom domain?**
A: Yes! Buy domain, add CNAME file, configure DNS. See CUSTOMIZATION.md

**Q: How do I add more sections?**
A: Copy existing section HTML, update IDs, add to navigation

**Q: Can I add animations?**
A: Yes! CSS animations are already included. Add more in styles.css

**Q: Is this free forever?**
A: Yes! GitHub Pages is free for public repositories

## 🆘 Need Help?

1. Check CUSTOMIZATION.md for detailed guide
2. Read README.md for full documentation
3. Review code comments in files
4. Open GitHub issue if stuck

---

**You're all set!** Now go build something amazing! 🚀
