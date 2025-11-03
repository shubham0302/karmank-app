# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```bash
npm run dev       # Start dev server at http://localhost:5173
npm run build     # Production build to dist/
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

### Common Issues
- If port 5173 is in use, Vite automatically tries 5174, 5175, etc.
- After updating dependencies: `rm -rf node_modules package-lock.json && npm install`

## Architecture Overview

### Application Flow
This is a single-page Vedic numerology application with a two-stage user experience:

1. **Input Stage**: User enters DOB, name (optional), and gender via `UserInputForm`
2. **Report Stage**: After generating report, user navigates through 9 tabs showing different analyses

The entire flow is controlled by checking if `report` exists in the Zustand store. If no report exists, show input form. If report exists, show tab navigation and content.

### State Management Architecture
**Critical**: The app uses Zustand with localStorage persistence (`useAppStore.js`). The store has special handling for Date objects during rehydration (see `onRehydrateStorage` callback) because JSON serialization converts Dates to strings.

Main state structure:
- `userData`: {dob, name, gender} - user inputs
- `report`: Core numerology calculations (basicNumber, destinyNumber, baseKundliGrid, yogas, etc.)
- `dashaReport`: Time period analysis (mahaDasha, yearlyDasha, monthlyDasha, dailyDasha)
- `activeTab`: Current tab ID
- `modalData`: Number meaning modal state

**Important**: Report generation happens in two phases:
1. `generateReport()` - calculates core numerology
2. `generateDashaReport()` - calculates time periods (called automatically after report)

### Core Calculation System
All numerology calculations are in `src/utils/`:

- `calculations.js`: Core functions (calculateBasicNumber, calculateDestinyNumber, buildBaseKundliGrid, detectYogas, analyzeRecurringNumbers)
- `dashaCalculator.js`: Time period calculations for 4 dasha levels
- `nameAnalysis.js`: Name numerology (not yet integrated into UI)
- `compatibility.js`: Relationship compatibility logic
- `remediesChecker.js`: Remedies recommendations

**Key concepts**:
- **Basic Number (Moolank)**: Derived from birth day only (e.g., 25th → 2+5 = 7)
- **Destiny Number (Bhagyank)**: Derived from full DOB, supports master numbers 11, 22, 33
- **Kundli Grid**: 3x3 grid with layout [3,1,9,6,7,5,2,8,4] showing digit frequencies from DOB
- **Yogas**: Special number combinations (35+ types) detected by checking grid, basic, and destiny numbers
- **Dasha**: Time periods where each number rules for its own value in years (1 rules 1 year, 9 rules 9 years, etc.)

### Data Architecture
`src/data/` contains ~140KB of static numerological data across 10 files:

- `numberData.js`: Meanings for 1-9, 11, 22, 33 (including planetary rulers, traits, lucky elements)
- `combinationInsights.js`: 81 personality descriptions for each Basic-Destiny combination (1-1 through 9-9)
- `yogaData.js`: 35+ yoga definitions with activation conditions and interpretations
- `professionData.js`: Career guidance per destiny number
- `forecastData.js`: Dasha favorability mappings and status colors
- Other files: letterData, compatibilityData, remediesData, educationData, assetData

**Critical**: `combinationInsights.js` is accessed using `combination_${basicNumber}_${destinyNumber}` keys.

### Component Architecture

**Tab System**: 9 tabs defined in `App.jsx`:
- welcome, name, asset, education, remedies, traits, forecast, foundational, advanced
- Tab IDs are hardcoded in `TabNavigation.jsx` and `App.jsx`'s switch statement
- Tabs "name", "asset", "education", "remedies" use `SimpleTab` component (placeholders for future features)

**Kundli Components** (`src/components/kundli/`):
- `StaticVedicKundli.jsx`: Shows base grid with color-coded cells, clickable to open number meaning modal
- `VedicDashaKundli.jsx`: Dynamic grid showing active dashas with gradient overlays (used in AdvancedDashaTab)

**Forecast System**: `ForecastTab.jsx` contains year selector and 5 sub-tabs (Profession, Travel, Property, Marriage, Child Birth). Each forecast type has its own component in `src/components/forecast/`. Forecasts use yearly and maha dasha data to determine favorability (green/yellow/red status).

### Styling System
Uses Tailwind CSS v4 with `@tailwindcss/postcss` plugin (not the legacy @tailwind directives).

**Important**: `index.css` uses:
```css
@import "tailwindcss";
```
Not the old `@tailwind base/components/utilities` syntax.

Custom utilities defined in index.css:
- `.card` - standard container with blur and border
- `.btn-primary`, `.btn-secondary` - button styles
- `.input-field` - form input styles
- Background uses CSS linear-gradient (not Tailwind's from-/via-/to- utilities which aren't available in v4)

### Testing Notes
Manual testing examples in existing docs (see lines 409-448 of old CLAUDE.md).

**Common test scenario**: Use DOB 15/08/1990 → Basic=6, Destiny=5

**Edge cases to consider**:
- Master numbers (11, 22, 33) should NOT be reduced
- Days 11, 22 trigger special insights
- Zeros are excluded from kundli grid
- Date persistence requires Date object conversion after rehydration

## Domain-Specific Context

### Harmony Groups
Numbers are grouped by compatibility:
- Group 1: [1,5,7] - Fire/Spirit
- Group 2: [2,4,8] - Earth/Matter
- Group 3: [3,6,9] - Air/Mind

Numbers within the same harmony group work well together.

### Planetary Associations
1→Sun, 2→Moon, 3→Jupiter, 4→Rahu, 5→Mercury, 6→Venus, 7→Ketu, 8→Saturn, 9→Mars

These associations drive the traits, remedies, and compatibility logic throughout the app.

## Algorithm Verification

**Status**: ✅ All formulas verified against `context.txt` and `context_2.txt` reference files

### Critical Formulas (Verified & Fixed)

**Destiny Number Calculation**:
- Formula: Sum all individual digits of DD+MM+YYYY (not the whole numbers)
- Example: 15/08/1990 → 1+5+0+8+1+9+9+0 = 33 (master number, preserved)
- Implementation: [calculations.js:41-51](src/utils/calculations.js#L41-L51)

**Kundli Grid Construction**:
- Formula: Use DD+MM+YY format (2-digit year only), pad with zeros, then remove zeros
- Example: 15/08/1990 → "150890" → remove zeros → "1589"
- Implementation: [calculations.js:62-91](src/utils/calculations.js#L62-L91)

**Master Numbers**: 11, 22, 33 are NEVER reduced throughout all calculations

### All Verified Calculations

- ✅ Basic Number: `reduceToSingleDigit(birthDay)`
- ✅ Destiny Number: Sum all individual digits from DD+MM+YYYY
- ✅ Kundli Grid: DD+MM+YY format (2-digit year)
- ✅ Maha Dasha: Each number rules for its value in years, starting with basic number
- ✅ Yearly Dasha: `basicNum + birthMonth + (year%100) + weekdayNumber`
- ✅ Monthly Dasha: 9 periods with durations [8,16,24,32,41,49,57,64,74] days
- ✅ Daily Dasha: `monthlyDasha + weekdayNumber`
- ✅ Yoga Detection: All required numbers present AND all forbidden numbers absent
- ✅ Recurring Numbers: Count ≥2 triggers double influence, ≥3 triggers triple influence

### Test Example (DOB: 15/08/1990)

Expected Results:
- Basic Number: 6 (1+5)
- Destiny Number: 33 (1+5+0+8+1+9+9+0 = 33, master number preserved)
- Kundli Grid Input: "150890" (DD=15, MM=08, YY=90)
- Grid After Removing Zeros: {1:1, 5:1, 8:1, 9:1} + destiny(33→3+3=6) + basic(6)
- Final Grid: {1:1, 5:1, 6:2, 8:1, 9:1}
