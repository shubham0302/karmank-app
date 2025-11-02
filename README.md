# 🔢 KarmAnk - Vedic Numerology Application

![React](https://img.shields.io/badge/React-18.3.1-blue.svg)
![Vite](https://img.shields.io/badge/Vite-7.1.12-purple.svg)
![Tailwind](https://img.shields.io/badge/Tailwind-4.1.1-cyan.svg)
![Zustand](https://img.shields.io/badge/Zustand-5.0.2-orange.svg)

A comprehensive Vedic Numerology web application providing detailed numerological analysis, life forecasts, and personalized guidance based on ancient wisdom.

## ✨ Features

### 🎯 Core Analysis
- **Basic Number (Moolank)** - Your core personality from birth day
- **Destiny Number (Bhagyank)** - Your life path from complete DOB
- **Vedic Kundli Grid** - Interactive 3x3 visualization showing digit frequencies
- **35+ Yoga Detection** - Special numerological combinations
- **Recurring Numbers** - Impact of amplified digits

### 📊 Advanced Features
- **4-Level Dasha System** - Maha, Yearly, Monthly, Daily time periods
- **5 Life Forecasts** - Career, Travel, Property, Marriage, Child Birth
- **Detailed Personality Traits** - Complete analysis with planetary influences
- **Professional Guidance** - Career recommendations and corporate roles
- **Compatibility Analysis** - Harmony groups and relationship dynamics

### 🔮 Additional Tools
- Name Numerology (Expression, Soul Urge, Personality)
- Asset Vibration (Vehicle, House, Account numbers)
- Remedies & Guidance (Mantras, Rudraksha, Chakras)
- Educational Guidance (Learning styles, career paths)

## 🚀 Quick Start

### Installation

```bash
# Clone or navigate to the project
cd karmank-app

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser at http://localhost:5173
```

### Build for Production

```bash
npm run build
npm run preview
```

## 📖 Usage

1. **Enter Your Details**
   - Date of Birth
   - Name (optional)
   - Gender

2. **Generate Report**
   - Click "Generate Numerology Report"

3. **Explore 9 Tabs**
   - Welcome - Overview with Kundli
   - Name Analysis - Name numerology
   - Asset Vibration - Number compatibility
   - Education - Learning guidance
   - Remedies - Spiritual practices
   - Numerology Traits - Complete profile
   - Forecast - Life predictions
   - Foundational Analysis - Yogas & patterns
   - Advanced Dasha - Time periods

4. **Interactive Features**
   - Click Kundli numbers for meanings
   - Switch years in Forecast
   - View sub-tabs
   - Reset to start over

## 🏗️ Tech Stack

- **Frontend**: React 18.3.1
- **Build Tool**: Vite 7.1.12
- **Styling**: Tailwind CSS 4.1.1
- **State Management**: Zustand 5.0.2
- **Icons**: Lucide React
- **Language**: JavaScript (ES6+)

## 📂 Project Structure

```
karmank-app/
├── src/
│   ├── components/      # UI components
│   ├── data/           # 140KB+ numerology data
│   ├── utils/          # Calculation utilities
│   ├── store/          # Zustand store
│   ├── App.jsx         # Main component
│   └── main.jsx        # Entry point
├── public/
├── dist/               # Production build
├── package.json
├── vite.config.js
├── tailwind.config.js
├── claude.md           # Detailed documentation
└── README.md           # This file
```

## 🧮 How It Works

### Calculations

**Basic Number**
```
Birth Day: 25
Basic Number: 2 + 5 = 7
```

**Destiny Number**
```
DOB: 25/08/1990
Sum: 2+5+0+8+1+9+9+0 = 34
Destiny: 3 + 4 = 7
```

**Kundli Grid**
- 3x3 grid layout: [3,1,9,6,7,5,2,8,4]
- Counts digit frequencies from DOB
- Excludes zeros
- Color-coded by influence

### Dasha System

1. **Maha Dasha** - Major life periods (years)
2. **Yearly Dasha** - Annual cycles from birthday
3. **Monthly Dasha** - 41-74 day periods
4. **Daily Dasha** - Daily influences

## 🎨 Design

- **Theme**: Dark mystical with purple/indigo gradient
- **Primary Color**: Golden yellow (#FACC15)
- **Typography**: Serif headings, sans-serif body
- **Status Colors**: 🟢 Green (Favorable) | 🟡 Yellow (Neutral) | 🔴 Red (Caution)

## 📊 Data

- **10 Data Files** - 140KB+ of numerological knowledge
- **81 Combinations** - Basic-Destiny insights
- **35+ Yogas** - Special combinations
- **Comprehensive Traits** - For all numbers 1-9
- **Master Numbers** - 11, 22, 33 support

## ✅ Current Status

### Fully Functional ✅
- Welcome Tab (Overview + Kundli)
- Numerology Traits Tab (Complete profile)
- Forecast Tab (With Profession forecast)
- Foundational Analysis Tab (Yogas + patterns)
- Number Meaning Modal
- Data persistence (localStorage)

### Coming Soon 🔄
- Complete all 5 forecast types
- Name Analysis tab
- Asset Vibration tab
- Education Guidance tab
- Remedies tab with 7 sub-sections
- Advanced Dasha dynamic Kundli

## 🧪 Testing

### Manual Test Cases

**Test 1: Basic Flow**
```
1. Enter DOB: 15/08/1990
2. Click Generate Report
3. Expected: Basic=6, Destiny=5
```

**Test 2: Kundli Interaction**
```
1. Click any number in Kundli
2. Expected: Modal opens with meaning
```

**Test 3: Forecast**
```
1. Navigate to Forecast tab
2. Change years
3. Expected: Status updates
```

## 📚 Documentation

For detailed documentation, see [claude.md](./claude.md)

Includes:
- Complete architecture
- API reference
- Component documentation
- Data structure details
- Development guide
- Testing procedures

## 🎯 Key Numbers

| Number | Planet | Trait |
|--------|--------|-------|
| 1 | Sun | Leadership |
| 2 | Moon | Emotional |
| 3 | Jupiter | Wisdom |
| 4 | Rahu | Analytical |
| 5 | Mercury | Business |
| 6 | Venus | Harmony |
| 7 | Ketu | Spiritual |
| 8 | Saturn | Discipline |
| 9 | Mars | Energy |

## 🌟 Highlights

- **85+ Features** planned and structured
- **140KB+ Data** from ancient texts
- **4 Functional Tabs** with rich content
- **Interactive UI** with smooth animations
- **Production Ready** build optimized
- **Data Persistence** with localStorage
- **Responsive Design** mobile-friendly

---

**Version**: 1.0.0
**Status**: ✅ Core Features Functional
**Build**: Production Ready
**Last Updated**: November 2025

*Discover your numbers, unlock your destiny* ✨🔢🌟
# karmank-app
