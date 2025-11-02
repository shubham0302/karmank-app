# KarmAnk App - Quick Start Guide

## Getting Started in 3 Steps

### 1. Install Dependencies (if not already done)
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The app will open at: **http://localhost:5173**

### 3. Use the Application
1. Enter your Date of Birth
2. Enter your Name
3. Select your Gender
4. Click "Generate Numerology Report"
5. Explore the tabs!

---

## Available Commands

```bash
# Development
npm run dev          # Start dev server (http://localhost:5173)

# Production
npm run build        # Build for production (output: dist/)
npm run preview      # Preview production build

# Quality
npm run lint         # Lint code (if configured)
```

---

## Application Flow

```
┌─────────────────────┐
│  Landing Page       │
│  (Input Form)       │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Generate Report    │
│  (Calculations)     │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────────────────────────────┐
│              Report Tabs                     │
├─────────────────────────────────────────────┤
│  1. Welcome         │ Basic overview         │
│  2. Name Analysis   │ Coming soon            │
│  3. Asset           │ Coming soon            │
│  4. Education       │ Coming soon            │
│  5. Remedies        │ Coming soon            │
│  6. Traits          │ Full personality       │
│  7. Forecast        │ 5 sub-tabs             │
│  8. Foundational    │ Yogas & patterns       │
│  9. Advanced Dasha  │ Coming soon            │
└─────────────────────────────────────────────┘
```

---

## Key Features to Try

### 1. Interactive Kundli
- In the **Welcome** tab, click on any number in the 3x3 grid
- A modal will pop up with detailed meaning of that number
- Close by clicking X or clicking outside

### 2. Forecast System
- Go to **Forecast** tab
- Select different years from the dropdown
- Click sub-tabs: Profession, Travel, Property, Marriage, Child Birth
- See color-coded predictions (🟢 🟡 🔴)

### 3. Yogas Analysis
- Go to **Foundational Analysis** tab
- See which yogas are active in your chart
- Read about recurring numbers
- Check special insights

### 4. Comprehensive Traits
- Go to **Numerology Traits** tab
- Explore all aspects: Finance, Health, Lucky elements
- Read profession guidance
- Check relationship dynamics

---

## Sample Data for Testing

### Test Case 1: Raj Yoga
- **DOB:** Any date where day = 2 and full DOB sums to 1
- **Example:** 02/10/1990 (Day=2, Destiny=2+1+1+9+9=22→4, but try variations)

### Test Case 2: Master Number 11
- **DOB:** 11th of any month
- **Example:** 11/05/1995

### Test Case 3: Master Number 22
- **DOB:** 22nd of any month
- **Example:** 22/07/1988

### Test Case 4: Regular Case
- **DOB:** 15/08/1992
- **Basic:** 15→6
- **Destiny:** 1+5+8+1+9+9+2=35→8

---

## Troubleshooting

### Issue: Build fails with Tailwind error
**Solution:** Make sure `@tailwindcss/postcss` is installed:
```bash
npm install -D @tailwindcss/postcss
```

### Issue: Page is blank
**Solution:** Check browser console for errors. Ensure all dependencies are installed.

### Issue: Data not persisting
**Solution:** Check if localStorage is enabled in your browser.

### Issue: Modal not opening
**Solution:** Ensure you're clicking on numbered cells in the Kundli grid (not the legend).

---

## File Locations

### Main Application
- `src/App.jsx` - Main app component
- `src/main.jsx` - Entry point
- `src/index.css` - Global styles

### Components
- `src/components/tabs/` - All tab components
- `src/components/ui/` - Reusable UI components
- `src/components/kundli/` - Kundli components

### Data & Logic
- `src/data/` - All data files
- `src/store/` - Zustand state management
- `src/utils/` - Calculation utilities

---

## Understanding the Tabs

### ✅ Fully Implemented Tabs

**1. Welcome**
- Overview of your numerology
- Basic and Destiny numbers
- Interactive Kundli
- Active yogas preview
- Combination insights

**2. Numerology Traits**
- Complete personality analysis
- Career guidance
- Health considerations
- Lucky elements
- Relationship insights

**3. Forecast**
- Year-based predictions
- 5 life areas (Profession, Travel, Property, Marriage, Child Birth)
- Status indicators
- Dasha insights

**4. Foundational Analysis**
- All yogas (active and reference)
- Recurring numbers
- Special insights
- Summary statistics

### 🚧 Placeholder Tabs (Structure Ready)

**5. Name Analysis** - Coming soon
**6. Asset Vibration** - Coming soon
**7. Education** - Coming soon
**8. Remedies & Guidance** - Coming soon
**9. Advanced Dasha** - Coming soon

---

## Customization Tips

### Change Primary Color
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    DEFAULT: '#FACC15', // Change this
    // ... other shades
  }
}
```

### Add New Tab
1. Create component in `src/components/tabs/`
2. Import in `src/App.jsx`
3. Add to `renderTabContent()` switch statement
4. Update `TabNavigation.jsx` tabs array

### Modify Calculations
- Edit `src/utils/calculations.js` for core numerology
- Edit `src/utils/dashaCalculator.js` for dasha system

---

## Support & Documentation

- **Application Summary:** See `APPLICATION_SUMMARY.md`
- **Features Checklist:** See `FEATURES_CHECKLIST.md`
- **This Guide:** `QUICK_START.md`

---

## Production Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel:** Connect GitHub repo, auto-deploy
- **Netlify:** Drag & drop `dist/` folder
- **GitHub Pages:** Use `gh-pages` package
- **Any static host:** Upload `dist/` contents

### Environment Variables (if needed)
Create `.env` file:
```
VITE_APP_NAME=KarmAnk
VITE_API_URL=your_api_url
```

Access in code:
```javascript
import.meta.env.VITE_APP_NAME
```

---

## Performance Tips

- The app uses localStorage for persistence
- First load generates report (~300-900ms)
- Subsequent loads are instant (data cached)
- Clear localStorage to reset: `localStorage.clear()`

---

## Next Steps

1. ✅ Run the app: `npm run dev`
2. ✅ Test with your DOB
3. ✅ Explore all tabs
4. ✅ Click on Kundli numbers
5. ✅ Try different years in Forecast
6. 🚀 Deploy to production
7. 📊 Add analytics (optional)
8. 🎨 Customize theme (optional)

---

**Enjoy your KarmAnk Numerology journey!** 🌟
