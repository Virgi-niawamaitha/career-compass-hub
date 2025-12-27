# Quick Deployment Guide 🚀

## Deploy to Vercel (Recommended - FASTEST)

1. **Go to [vercel.com](https://vercel.com) and sign in with GitHub**

2. **Click "Add New" → "Project"**

3. **Import your GitHub repository: `Virgi-niawamaitha/career-compass-hub`**

4. **Configure:**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   
5. **Click "Deploy"** - Your site will be live in ~2 minutes!

Your portfolio will be at: `https://career-compass-hub.vercel.app`

---

## Deploy to Netlify (Alternative)

1. **Go to [netlify.com](https://netlify.com) and sign in with GitHub**

2. **Click "Add new site" → "Import an existing project"**

3. **Select your repo: `Virgi-niawamaitha/career-compass-hub`**

4. **Configure:**
   - Build command: `npm run build`
   - Publish directory: `dist`

5. **Click "Deploy"** - Live in ~2 minutes!

---

## Deploy to GitHub Pages

1. **Run these commands:**
```bash
npm run build
npm install -g gh-pages
gh-pages -d dist
```

2. **Enable GitHub Pages:**
   - Go to repo Settings → Pages
   - Source: Deploy from branch
   - Branch: `gh-pages` / root
   - Save

Your site: `https://virgi-niawamaitha.github.io/career-compass-hub/`

---

## Before Going Live - Checklist ✅

- [ ] Update your personal info in component files
- [ ] Add your own projects in ProjectsSection.tsx
- [ ] Add your resume/CV
- [ ] Update contact information
- [ ] Add real project images to `/public`
- [ ] Test on mobile devices
- [ ] Run `npm run build` to check for errors

---

## Need Custom Domain?

### On Vercel:
1. Go to Project Settings → Domains
2. Add your domain (e.g., `yourname.com`)
3. Follow DNS instructions from your domain provider

### On Netlify:
1. Go to Domain Settings → Add custom domain
2. Follow DNS setup instructions

---

**Fastest Path:** Vercel takes literally 2 minutes from commit to live site! Perfect for your attachment deadline.
