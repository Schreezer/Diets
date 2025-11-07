# Diet Plan Viewer - Deployment Information

## ?? Successfully Deployed!

Your family diet plan viewer is now live on Vercel!

---

## ?? Live URLs

**Production URL**: https://diet-plan-viewer-schreezers-projects.vercel.app

**GitHub Repository**: https://github.com/Schreezer/Diets

**Vercel Dashboard**: https://vercel.com/schreezers-projects/diet-plan-viewer

---

## ?? What's Deployed

Your web app includes all 5 comprehensive diet plan documents:

1. **?? Diet Requirements** - Complete requirements for all 3 family members
2. **?? Day 1 Summary** - Overview with all stats and macros
3. **??? Day 1 Meal Plan** - Detailed meal-by-meal breakdown
4. **?? Protein Breakdown** - Complete protein analysis per person
5. **?? Whey Protocol** - Whey supplementation guide

---

## ? Features

### Beautiful Design
- ? Clean, modern interface
- ? Sticky navigation bar
- ? Professional markdown rendering
- ? Color-coded tables
- ? Emoji support throughout

### Responsive
- ? Mobile-friendly design
- ? Touch-optimized navigation
- ? Readable on all devices

### Fast & Reliable
- ? Static site generation (super fast)
- ? Hosted on Vercel's global CDN
- ? Instant page switching
- ? No loading delays

---

## ?? Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Markdown**: react-markdown with GitHub Flavored Markdown
- **Styling**: Custom CSS with responsive design
- **Hosting**: Vercel (automatic HTTPS, global CDN)
- **Deployment**: Automated from GitHub

---

## ?? Project Structure

```
diet-plan-viewer/
??? app/
?   ??? layout.tsx          # Root layout with metadata
?   ??? page.tsx            # Main page with markdown viewer
?   ??? globals.css         # Global styles & markdown styling
??? public/
?   ??? markdown/           # All markdown files
?       ??? DIET_REQUIREMENTS.md
?       ??? DAY1_MEAL_PLAN.md
?       ??? DAY1_SUMMARY.md
?       ??? PROTEIN_BREAKDOWN_DAY1.md
?       ??? WHEY_PROTOCOL.md
??? package.json
??? tsconfig.json
??? next.config.js          # Configured for static export
??? README.md
```

---

## ?? How to Update

### Option 1: Update via Git (Automatic Deployment)

```bash
# Navigate to project
cd /Users/chirag13/development/diet/diet-plan-viewer

# Make changes to markdown files in public/markdown/

# Commit and push
git add .
git commit -m "Update diet plans"
git push origin main

# Vercel automatically deploys! (takes ~30 seconds)
```

### Option 2: Update Markdown Files Only

```bash
# Copy updated markdown files
cp /path/to/new/file.md public/markdown/

# Commit and push
git add public/markdown/
git commit -m "Update meal plans"
git push origin main
```

### Option 3: Quick Vercel Deployment

```bash
cd /Users/chirag13/development/diet/diet-plan-viewer
vercel --prod --yes
```

---

## ?? Adding New Days

To add Day 2, Day 3, etc:

1. Create new markdown files:
   - `DAY2_MEAL_PLAN.md`
   - `DAY2_SUMMARY.md`
   - etc.

2. Copy to public/markdown/:
   ```bash
   cp DAY2_*.md diet-plan-viewer/public/markdown/
   ```

3. Update `app/page.tsx` - add to the `files` array:
   ```typescript
   const files = [
     { name: 'DIET_REQUIREMENTS', displayName: '?? Diet Requirements' },
     { name: 'DAY1_SUMMARY', displayName: '?? Day 1 Summary' },
     { name: 'DAY2_SUMMARY', displayName: '?? Day 2 Summary' }, // NEW
     // ... etc
   ]
   ```

4. Commit and push - auto-deploys!

---

## ?? Customization

### Change Colors

Edit `app/globals.css`:

```css
/* Navigation background */
.nav-container {
  background: #2c3e50;  /* Change this */
}

/* Active link color */
.nav-link.active {
  background: #3498db;  /* Change this */
}

/* Table header color */
.markdown-content table thead {
  background: #3498db;  /* Change this */
}
```

### Change Title

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Custom Title',
  description: 'Your custom description',
}
```

---

## ?? Local Development

Want to test changes locally before deploying?

```bash
# Navigate to project
cd /Users/chirag13/development/diet/diet-plan-viewer

# Install dependencies (first time only)
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

Make changes, see them live! When ready, push to GitHub for production deployment.

---

## ?? Performance

- **Build Time**: ~3-4 seconds
- **Deploy Time**: ~30 seconds total
- **Page Load**: < 1 second (static, cached globally)
- **Bundle Size**: 146 KB (optimized)

---

## ?? Security & Privacy

- ? HTTPS enabled by default (Vercel)
- ? No backend/database (static site)
- ? No user tracking
- ? Private GitHub repo (if needed)
- ? Can add password protection via Vercel settings

To add password protection:
1. Go to Vercel Dashboard
2. Project Settings ? Deployment Protection
3. Enable Password Protection

---

## ?? Troubleshooting

### Site Not Updating?

```bash
# Force rebuild and deploy
cd /Users/chirag13/development/diet/diet-plan-viewer
npm run build
vercel --prod --yes --force
```

### Markdown Not Rendering?

Check:
1. File exists in `public/markdown/`
2. File name matches exactly in `app/page.tsx`
3. File has `.md` extension

### Build Failing?

```bash
# Check for errors
npm run build

# If successful locally, push to GitHub
git push origin main
```

---

## ?? Pro Tips

1. **Bookmark the URL** on your phone for easy access
2. **Share the link** with family members
3. **Use mobile view** - perfect for kitchen reference while cooking
4. **Print to PDF** from browser if needed (works great!)
5. **Add to home screen** on mobile for app-like experience

---

## ?? Quick Reference

| What | Command |
|------|---------|
| **Local Dev** | `npm run dev` |
| **Build** | `npm run build` |
| **Deploy** | `git push origin main` (auto) or `vercel --prod --yes` |
| **View Logs** | Vercel Dashboard ? Deployments |
| **Roll Back** | Vercel Dashboard ? Previous Deployment ? Promote |

---

## ?? Next Steps

### Suggested Enhancements:

1. **Add Day 2-7 Plans**
   - Create markdown files for remaining days
   - Update page.tsx with new files
   - Push to deploy

2. **Add Search Feature**
   - Search across all documents
   - Filter by keywords

3. **Add Print Styles**
   - Optimize for printing
   - Create PDF versions

4. **Add Dark Mode**
   - Toggle between light/dark themes
   - Save preference

5. **Add Shopping List**
   - Interactive weekly shopping list
   - Checkbox items

---

## ?? Usage Statistics

Visit Vercel Dashboard to see:
- Page views
- Bandwidth usage
- Deploy history
- Performance metrics

---

**Congratulations! Your diet plan viewer is live and ready to use!** ??

Access it anytime at: **https://diet-plan-viewer-schreezers-projects.vercel.app**

*Last Updated: November 5, 2025*
