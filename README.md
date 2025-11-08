# Family Diet Plan Viewer

A beautiful web app to view comprehensive diet plans for a family of 3, with detailed nutritional breakdowns, meal plans, and protocols.

## Features

- ?? Complete diet requirements for 3 people
- ??? Detailed Day 1 meal plan with macros
- ?? Protein breakdown analysis
- ?? Whey protein protocol
- ?? Daily summary with all stats
- ?? Mobile responsive design
- ?? Beautiful markdown rendering

## Diet Plans Included

### Person 1: 22yo Male (Hypertrophy/Cut)
- **Goal**: Build muscle while cutting fat
- **Calories**: 1890 kcal
- **Protein**: 173g (with 2 scoops whey)
- **Target**: 0.5kg/week weight loss

### Person 2: 46yo Female (Health/Longevity)
- **Goal**: Health optimization and longevity
- **Calories**: 1805 kcal
- **Protein**: 90g (with 0.5 scoop whey)
- **Special**: Goiter-friendly, high activity support

### Person 3: 50yo Male (Heart Health/Fat Loss)
- **Goal**: Reduce cholesterol, BP, visceral fat
- **Calories**: 1740 kcal
- **Protein**: 95g (with 0.5 scoop whey)
- **Special**: Low sodium, heart-healthy, therapeutic omega-3

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Custom CSS
- **Markdown**: react-markdown with remark-gfm
- **Deployment**: Vercel

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Build

```bash
npm run build
npm start
```

### Deploy to Vercel

```bash
vercel
```

## Project Structure

```
diet-plan-viewer/
??? app/
?   ??? layout.tsx
?   ??? page.tsx
?   ??? globals.css
??? public/
?   ??? markdown/
?       ??? DIET_REQUIREMENTS.md
?       ??? DAY1_MEAL_PLAN.md
?       ??? DAY1_SUMMARY.md
?       ??? PROTEIN_BREAKDOWN_DAY1.md
?       ??? WHEY_PROTOCOL.md
??? package.json
??? tsconfig.json
??? next.config.js
```

## Features

### Beautiful Markdown Rendering
- Tables with alternating row colors
- Syntax highlighted code blocks
- Emoji support
- Responsive design

### Navigation
- Easy switching between different diet documents
- Sticky navigation bar
- Active document highlighting

### Mobile Responsive
- Optimized for all screen sizes
- Touch-friendly navigation
- Readable tables on mobile

## License

Private - Family Use Only
