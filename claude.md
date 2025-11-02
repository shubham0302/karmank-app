# KarmAnk - Vedic Numerology Application

## 📋 Project Overview

**KarmAnk** is a comprehensive Vedic Numerology web application built with React, Vite, Tailwind CSS, and Zustand. It provides detailed numerological analysis including Basic Numbers, Destiny Numbers, Vedic Kundli grids, Yoga detection, Dasha periods, and personalized forecasts for various life aspects.

### 🎯 Key Features

- **Core Numerology Calculations**: Basic Number (Moolank), Destiny Number (Bhagyank)
- **Vedic Kundli Grid**: Interactive 3x3 grid visualization with digit frequency
- **Yoga Detection**: 35+ special numerological combinations (Raj Yoga, Surya-Ketu, etc.)
- **Dasha System**: 4-level time period analysis (Maha, Yearly, Monthly, Daily)
- **Life Forecasts**: Career, Travel, Property, Marriage, Child Birth predictions
- **Detailed Traits**: Personality analysis, profession guidance, compatibility
- **Name Numerology**: Expression, Soul Urge, Personality number calculations
- **Asset Vibration**: Vehicle, House, Account number compatibility
- **Remedies**: Mantras, Rudraksha, Chakra activation guidance

---

## 🏗️ Project Structure

```
karmank-app/
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   │   ├── Card.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── SectionTitle.jsx
│   │   │   ├── Trait.jsx
│   │   │   └── StatusIcon.jsx
│   │   ├── kundli/          # Kundli visualization components
│   │   │   ├── StaticVedicKundli.jsx
│   │   │   └── VedicDashaKundli.jsx
│   │   ├── tabs/            # Main feature tabs
│   │   │   ├── WelcomeTab.jsx
│   │   │   ├── NumerologyTraitsTab.jsx
│   │   │   ├── ForecastTab.jsx
│   │   │   ├── FoundationalAnalysisTab.jsx
│   │   │   └── SimpleTab.jsx
│   │   ├── UserInputForm.jsx
│   │   ├── TabNavigation.jsx
│   │   └── NumberMeaningModal.jsx
│   ├── data/                # Data files (140KB+ total)
│   │   ├── letterData.js
│   │   ├── numberData.js
│   │   ├── professionData.js
│   │   ├── compatibilityData.js
│   │   ├── yogaData.js
│   │   ├── remediesData.js
│   │   ├── educationData.js
│   │   ├── assetData.js
│   │   ├── combinationInsights.js
│   │   └── forecastData.js
│   ├── utils/               # Utility functions
│   │   ├── calculations.js
│   │   ├── dashaCalculator.js
│   │   ├── nameAnalysis.js
│   │   ├── remediesChecker.js
│   │   └── compatibility.js
│   ├── store/
│   │   └── useAppStore.js   # Zustand state management
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # React entry point
│   └── index.css            # Tailwind CSS
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── claude.md                # This file
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server

The app runs at: **http://localhost:5173/** (or 5174 if 5173 is occupied)

---

## 💡 How to Use the Application

### Step 1: Enter Your Details
1. **Date of Birth**: Select your birth date
2. **Name**: Enter your full name (optional for basic report)
3. **Gender**: Select Male/Female
4. Click **"Generate Numerology Report"**

### Step 2: Explore Your Report

Navigate through 9 tabs:

#### 1. **Welcome Tab** ✅ Fully Functional
- View your Basic Number (from birth day)
- View your Destiny Number (from full DOB)
- Interactive 3x3 Vedic Kundli grid
- Active Yogas (special combinations)
- Personality insights based on Basic-Destiny combination

#### 2. **Name Analysis** 🔄 Coming Soon
- Expression Number, Soul Urge, Personality Number
- Letter-by-letter analysis
- Name compatibility with DOB

#### 3. **Asset Vibration** 🔄 Coming Soon
- Vehicle number compatibility
- House number analysis
- Bank account number vibration

#### 4. **Education** 🔄 Coming Soon
- Learning style based on Basic Number
- Career path based on Destiny Number
- Educational stream recommendations

#### 5. **Remedies & Guidance** 🔄 Coming Soon
- Mantras for each planetary influence
- Rudraksha recommendations
- Chakra activation guidance
- Shakti Beej Mantras

#### 6. **Numerology Traits** ✅ Fully Functional
- Complete personality profile
- Planetary ruler and associations
- Finance tendencies and health considerations
- Lucky days, colors, jewels
- Important years in life
- Relationship dynamics (as wife/husband)
- Professional guidance (suggested careers, corporate roles)
- Good qualities and drawbacks
- Spiritual insights

#### 7. **Forecast** ✅ Fully Functional
- **5 Sub-tabs**: Profession, Travel, Property, Marriage, Child Birth
- Year selector (view past/future years)
- Status-based predictions (Green/Yellow/Red)
- Dasha-based analysis
- Currently featuring detailed **Profession Forecast**

#### 8. **Foundational Analysis** ✅ Fully Functional
- All active Yogas with descriptions
- Recurring numbers analysis
- Special insights (Master Day energies)
- Summary statistics

#### 9. **Advanced Dasha** 🔄 Coming Soon
- Dynamic Kundli with live Dasha updates
- Maha Dasha timeline
- Yearly, Monthly, Daily Dasha analysis
- Interactive date selector

### Step 3: Interactive Features

- **Click Kundli Numbers**: Opens modal with detailed number meanings
- **Reset Button**: Clear all data and start over
- **Persistent Storage**: Your data is saved in browser localStorage

---

## 🧮 Core Calculations Explained

### Basic Number (Moolank)
- Calculated from birth day only
- Example: Born on 25th → 2 + 5 = **7**

### Destiny Number (Bhagyank)
- Calculated from complete DOB
- Example: 25/03/1990 → 2+5+0+3+1+9+9+0 = 29 → 2+9 = **11** (Master Number)

### Kundli Grid
- 3x3 grid showing digit frequencies from DOB
- Layout: [3, 1, 9, 6, 7, 5, 2, 8, 4]
- Excludes zeros
- Adds Destiny Number and Basic Number (if day > 9)

### Dasha Periods
1. **Maha Dasha**: Major life periods (each number lasts its value in years)
2. **Yearly Dasha**: Annual periods starting from birthday
3. **Monthly Dasha**: ~41-74 day cycles
4. **Daily Dasha**: Daily influences

---

## 📊 Data Architecture

### Data Files Overview

| File | Size | Description |
|------|------|-------------|
| `letterData.js` | 6.2KB | A-Z letter meanings and numerological values |
| `numberData.js` | 19KB | Number meanings (1-9, 11, 22, 33) and destiny details |
| `professionData.js` | 2.9KB | Career guidance for each destiny number |
| `compatibilityData.js` | 3.6KB | Harmony groups and compatibility matrices |
| `yogaData.js` | 19KB | 35+ yoga combinations with activation rules |
| `remediesData.js` | 17KB | Mantras, Rudraksha, Chakra, Shakti guidance |
| `educationData.js` | 7.7KB | Learning styles and educational paths |
| `assetData.js` | 2.7KB | Vehicle/House/Account number meanings |
| `combinationInsights.js` | 60KB | 81 Basic-Destiny combination descriptions |
| `forecastData.js` | 1.5KB | Color maps and dasha insights |

**Total Data**: ~140KB of numerological knowledge

---

## 🎨 Design System

### Color Palette

- **Primary**: Yellow (#FACC15) - Spiritual gold
- **Background**: Gradient (Indigo → Purple → Indigo)
- **Cards**: Dark gray with backdrop blur
- **Status Colors**:
  - 🟢 Green: Favorable
  - 🟡 Yellow: Neutral/Mixed
  - 🔴 Red: Challenging/Caution

### Typography

- **Headings**: Serif font (Georgia) for mystical feel
- **Body**: System sans-serif for readability

### Components

All components use Tailwind CSS utility classes with custom layers defined in `index.css`:
- `.card` - Standard container
- `.btn-primary` - Main action buttons
- `.btn-secondary` - Secondary actions
- `.input-field` - Form inputs

---

## 🔧 Technical Stack

### Core Technologies

- **React 18**: UI library
- **Vite 5**: Build tool and dev server
- **Tailwind CSS 4**: Utility-first CSS framework
- **Zustand 5**: State management with persistence
- **Lucide React**: Icon library

### Key Dependencies

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "zustand": "^5.0.2",
  "lucide-react": "^0.468.0"
}
```

### Development Dependencies

```json
{
  "vite": "^7.1.12",
  "tailwindcss": "^4.1.1",
  "autoprefixer": "^10.4.20",
  "postcss": "^8.5.1",
  "@vitejs/plugin-react": "^4.3.4"
}
```

---

## 📦 State Management

### Zustand Store (`useAppStore.js`)

The application uses a centralized Zustand store with localStorage persistence.

**State Structure:**

```javascript
{
  userData: {
    dob: Date | null,
    name: string,
    gender: 'Male' | 'Female'
  },
  report: {
    dob: Date,
    basicNumber: number,
    destinyNumber: number,
    baseKundliGrid: Object,
    yogas: Array,
    recurringNumbersAnalysis: Array,
    specialInsights: Array,
    specialRemedies: Array
  },
  dashaReport: {
    mahaDashaTimeline: Array,
    yearlyDashaTimeline: Array,
    monthlyDashaTimeline: Array,
    dailyDashaTimeline: Array
  },
  activeTab: string,
  modalData: Object,
  isLoading: boolean,
  error: string | null
}
```

**Key Actions:**

- `setUserData(userData)` - Update user information
- `generateReport()` - Calculate numerology report
- `generateDashaReport()` - Calculate dasha timelines
- `setActiveTab(tab)` - Switch between tabs
- `openModal(number)` - Open number meaning modal
- `closeModal()` - Close modal
- `reset()` - Clear all data

---

## 🧩 Component Architecture

### UI Components (Reusable)

**Card.jsx**
```jsx
<Card className="additional-classes">
  {children}
</Card>
```

**Button.jsx**
```jsx
<Button
  variant="primary" // or "secondary"
  onClick={handleClick}
  disabled={false}
>
  Click Me
</Button>
```

**Input.jsx**
```jsx
<Input
  type="text"
  label="Name"
  value={name}
  onChange={handleChange}
  required
/>
```

**Modal.jsx**
```jsx
<Modal isOpen={isOpen} onClose={handleClose} title="Title">
  {children}
</Modal>
```

### Feature Components

**StaticVedicKundli.jsx**
- Displays 3x3 Kundli grid
- Color-coded cells (basic, destiny, DOB)
- Click handler for number meanings

**VedicDashaKundli.jsx**
- Dynamic Kundli with active Dashas
- Multi-color gradients for overlapping influences
- Legend showing active periods

**UserInputForm.jsx**
- Form to collect user data
- Validation and error handling
- Triggers report generation

**TabNavigation.jsx**
- Horizontal scrollable tab bar
- 9 main tabs
- Active state highlighting

---

## 🧪 Testing the Application

### Manual Testing Steps

#### Test 1: Basic Report Generation
1. Enter DOB: `15/08/1990`
2. Click "Generate Numerology Report"
3. **Expected**:
   - Basic Number: 6
   - Destiny Number: 5
   - Kundli grid populated
   - Welcome tab shows data

#### Test 2: Tab Navigation
1. Generate a report
2. Click each tab
3. **Expected**: All tabs load without errors

#### Test 3: Kundli Interaction
1. In Welcome tab, click any number in Kundli
2. **Expected**: Modal opens with number meaning
3. Click X or overlay to close
4. **Expected**: Modal closes

#### Test 4: Forecast Analysis
1. Navigate to Forecast tab
2. Select different years
3. Click sub-tabs (Profession, Travel, etc.)
4. **Expected**:
   - Status indicators show (🟢/🟡/🔴)
   - Recommendations display
   - Year changes update forecast

#### Test 5: Data Persistence
1. Generate a report
2. Refresh the page
3. **Expected**: Report data persists

#### Test 6: Reset Functionality
1. Generate a report
2. Click "Reset" button in header
3. **Expected**: Returns to input form

### Feature Testing Checklist

✅ **Core Features**
- [x] Basic Number calculation
- [x] Destiny Number calculation
- [x] Kundli grid generation
- [x] Yoga detection
- [x] Recurring numbers analysis
- [x] Dasha timeline generation

✅ **UI Features**
- [x] Responsive design
- [x] Tab navigation
- [x] Modal interactions
- [x] Form validation
- [x] Loading states
- [x] Error handling

✅ **Data Features**
- [x] LocalStorage persistence
- [x] State management
- [x] Data imports from files
- [x] Combination insights lookup

🔄 **Upcoming Features**
- [ ] Name Numerology analysis
- [ ] Asset Vibration calculator
- [ ] Education guidance
- [ ] Remedies display
- [ ] Advanced Dasha dynamic Kundli
- [ ] All 5 forecast types fully functional
- [ ] Export report as PDF

---

## 🐛 Troubleshooting

### Issue: "Port 5173 is in use"
**Solution**: Vite automatically tries the next port (5174, 5175, etc.)

### Issue: "Module not found"
**Solution**:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Tailwind styles not loading
**Solution**: Check that `index.css` is imported in `main.jsx`

### Issue: State not persisting
**Solution**: Check browser console for localStorage errors. Try clearing browser data.

### Issue: Build errors
**Solution**:
```bash
npm run build
# Check console for specific errors
```

---

## 🔮 Future Enhancements

### Phase 1 (Short-term)
- [ ] Complete all 5 forecast types with full logic
- [ ] Implement Name Numerology tab
- [ ] Add Asset Vibration calculator
- [ ] Build Education guidance tab
- [ ] Create Remedies display with all 7 sub-categories

### Phase 2 (Medium-term)
- [ ] Advanced Dasha with dynamic Kundli
- [ ] PDF export functionality
- [ ] Print-friendly report layout
- [ ] Name compatibility checker
- [ ] Multiple language support

### Phase 3 (Long-term)
- [ ] User accounts and saved reports
- [ ] AI-powered insights (Gemini API integration)
- [ ] Transit analysis
- [ ] Relationship compatibility reports
- [ ] Business name suggestions
- [ ] Mobile app (React Native)

---

## 📚 Learning Resources

### Numerology Concepts
- **Basic Number (Moolank)**: Your core personality, derived from birth day
- **Destiny Number (Bhagyank)**: Your life path, derived from full DOB
- **Yogas**: Special combinations that amplify or modify influences
- **Dashas**: Time periods ruled by specific numbers
- **Harmony Groups**: [1,5,7], [2,4,8], [3,6,9]

### Technical Resources
- [React Documentation](https://react.dev/)
- [Vite Guide](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zustand](https://zustand.docs.pmnd.rs/)

---

## 👥 Contributing

### Code Style
- Use functional components with hooks
- Follow DRY principles
- Add JSDoc comments to utility functions
- Use Tailwind CSS for styling
- Keep components under 300 lines

### Adding New Features

1. **Data**: Add to appropriate file in `src/data/`
2. **Logic**: Create utility function in `src/utils/`
3. **UI**: Build component in `src/components/`
4. **Integration**: Update store if needed
5. **Testing**: Test manually with various inputs

### File Naming Conventions
- Components: PascalCase (e.g., `MyComponent.jsx`)
- Utilities: camelCase (e.g., `myUtility.js`)
- Data files: camelCase (e.g., `myData.js`)

---

## 📄 License

This project is private and proprietary.

---

## 🙏 Acknowledgments

- Built based on traditional Vedic numerology principles
- Inspired by ancient wisdom and modern technology
- Data compiled from numerological texts and expert consultations

---

## 📞 Support

For questions or issues:
1. Check this documentation
2. Review the code comments
3. Test with known values
4. Check browser console for errors

---

## 🎯 Quick Reference

### Important Numbers

| Number | Planet | Energy | Key Trait |
|--------|--------|--------|-----------|
| 1 | Sun | Leadership | Confident |
| 2 | Moon | Emotional | Sensitive |
| 3 | Jupiter | Wisdom | Knowledgeable |
| 4 | Rahu | Unconventional | Analytical |
| 5 | Mercury | Intellectual | Business-minded |
| 6 | Venus | Harmonious | Charming |
| 7 | Ketu | Spiritual | Introspective |
| 8 | Saturn | Disciplined | Hardworking |
| 9 | Mars | Energetic | Courageous |

### Master Numbers
- **11**: Intuitive, Inspirational
- **22**: Master Builder, Practical Visionary
- **33**: Master Teacher, Selfless Service

### Harmony Groups
- **Group 1**: 1, 5, 7 (Fire/Spirit)
- **Group 2**: 2, 4, 8 (Earth/Matter)
- **Group 3**: 3, 6, 9 (Air/Mind)

Numbers in the same group harmonize well together.

---

## 🔐 Privacy & Data

- All calculations happen in the browser
- No data sent to external servers
- Data stored locally in browser only
- Cleared on "Reset" or browser cache clear

---

**Version**: 1.0.0
**Last Updated**: November 2025
**Status**: ✅ Core Features Functional, 🔄 Expanding Features

---

*May your numbers guide you to wisdom and prosperity* ✨🔢🌟
