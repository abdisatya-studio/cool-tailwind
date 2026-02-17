# FitPulse - Modern Admin Dashboard

A beautiful, responsive health & fitness dashboard built with Tailwind CSS and DaisyUI. Inspired by TailAdmin structure, fully refactored with modern design principles.

![FitPulse Dashboard](./docs/screenshots/dashboard.png)

---

## 📸 Screenshots

### Dashboard (Home Page)
![Dashboard](./docs/screenshots/dashboard.png)
- Modern metric cards with glassmorphism effect
- Clean sidebar navigation
- Quick stats and activity overview

### Members
![Members Page](./docs/screenshots/members.png)
- User management interface
- Member list with status indicators
- Search and filter controls

### Workouts
![Workouts Page](./docs/screenshots/workouts.png)
- Workout tracking interface
- Exercise categories
- Progress visualization

### Nutrition
![Nutrition Page](./docs/screenshots/nutrition.png)
- Meal planning tools
- Nutrition tracking
- Dietary insights

### Schedule
![Schedule Page](./docs/screenshots/schedule.png)
- Calendar view
- Event management
- Appointment scheduling

### Payments
![Payments Page](./docs/screenshots/payments.png)
- Transaction overview
- Payment methods
- Invoice management

### Analytics
![Analytics Page](./docs/screenshots/analytics.png)
- Data visualization charts
- Performance metrics
- Trend analysis

---

## 🚀 Quick Start

### Prerequisites

**Required:**
- Node.js (v18 or higher)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/abdisatya-studio/cool-tailwind.git
cd cool-tailwind

# Install dependencies
npm install

# Build the project
npm run build
```

### Development

```bash
# Start development server (watch mode)
npm run start

# Build for production
npm run build
```

### View in Browser

```bash
# Option 1: Use Python's built-in server
cd dist
python3 -m http.server 8080
# Open http://localhost:8080

# Option 2: Use Node's http-server
npx http-server dist -p 8080
# Open http://localhost:8080

# Option 3: Open directly in browser
# Just open index.html in your browser
```

---

## 📂 Project Structure

```
cool-tailwind/
├── src/                        # Source files
│   ├── css/
│   │   ├── main.css           # Main styles
│   │   └── style.css          # Tailwind + custom styles
│   └── js/
│       └── main.js            # Alpine.js + custom scripts
├── dist/                       # Build output (auto-generated)
│   ├── main.css               # Compiled CSS
│   └── index.html             # Processed HTML
├── partials/                   # Reusable components
│   ├── header.html            # Top navigation bar
│   ├── sidebar.html           # Side navigation menu
│   ├── footer.html            # Page footer
│   ├── metrics.html           # Metric card component
│   ├── chart.html             # Chart component
│   └── schedule.html          # Schedule component
├── docs/                       # Documentation
│   └── screenshots/           # Page screenshots
├── index.html                  # Dashboard page (home)
├── members.html                # Members management
├── workouts.html               # Workout tracking
├── nutrition.html              # Nutrition planning
├── schedule.html               # Calendar & scheduling
├── payments.html               # Payment management
├── analytics.html              # Data analytics
├── test.html                   # Test page
├── test-suite.html             # Component test suite
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── package.json                # Dependencies & scripts
├── start.js                    # Development server
├── build.js                    # Build script
├── .gitignore                  # Git ignore rules
└── README.md                   # This file
```

---

## 🎨 Features

### Design System

**Color Palette:**
- Primary: Teal (#14B8A6)
- Secondary: Blue (#3B82F6)
- Success: Emerald (#10B981)
- Warning: Amber (#F59E0B)
- Danger: Red (#EF4444)

**Typography:**
- Font: Plus Jakarta Sans (Google Fonts)
- Available weights: 400, 500, 600, 700, 800
- Responsive sizing

**Components:**
- Metric Cards: Glassmorphism effect with subtle gradients
- Navigation: Responsive sidebar with mobile drawer
- Charts: Custom SVG visualizations
- Tables: Clean data tables with status indicators

### Key Features

✅ **Responsive Design**
- Desktop-first approach
- Mobile-friendly sidebar drawer
- Adaptive layouts for all screen sizes

✅ **Modern UI/UX**
- Glassmorphism effects
- Smooth transitions and hover effects
- Clean, accessible interface

✅ **Dark Mode Ready**
- Tailwind dark mode support
- Consistent dark theme variables
- Easy to toggle themes

✅ **Reusable Components**
- Modular partials for consistency
- Easy to customize and extend
- Well-organized structure

✅ **Analytics Dashboard**
- Multiple chart types
- Key performance indicators
- Trend analysis tools

✅ **Admin Features**
- Member management
- Payment tracking
- Schedule management
- Workout logging

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Tailwind CSS** | v3.4.17 | Utility-first CSS framework |
| **DaisyUI** | v4.6.0 | Component library built on Tailwind |
| **Alpine.js** | v3.14.1 | Lightweight JavaScript framework |
| **PostCSS** | v8.5.1 | CSS transformation |
| **Autoprefixer** | v10.4.20 | CSS vendor prefixing |
| **Phosphor Icons** | Latest | Beautiful icon set |

---

## 📋 Pages Overview

### 1. Dashboard (index.html)
**Purpose:** Main overview page
**Features:**
- 4 key metric cards (Users, Revenue, Active Sessions, Growth)
- Recent activity section
- Quick action buttons
- Visual data summaries

### 2. Members (members.html)
**Purpose:** User/Member management
**Features:**
- Member list with search
- Status indicators (Active, Inactive, Pending)
- Avatar and profile info
- Bulk action controls

### 3. Workouts (workouts.html)
**Purpose:** Exercise and workout tracking
**Features:**
- Workout categories
- Exercise library
- Progress tracking
- Difficulty ratings

### 4. Nutrition (nutrition.html)
**Purpose:** Meal and nutrition planning
**Features:**
- Meal templates
- Nutrition calculator
- Dietary preferences
- Calorie tracking

### 5. Schedule (schedule.html)
**Purpose:** Calendar and appointment management
**Features:**
- Calendar view
- Event scheduling
- Time slot management
- Calendar sync

### 6. Payments (payments.html)
**Purpose:** Financial management
**Features:**
- Transaction history
- Payment methods
- Invoice generation
- Revenue charts

### 7. Analytics (analytics.html)
**Purpose:** Data insights and reporting
**Features:**
- Charts and graphs
- Performance metrics
- Trend analysis
- Exportable reports

---

## 🎯 Customization

### Colors

Edit `src/css/style.css`:
```css
:root {
  --primary: theme('colors.teal.600');
  --secondary: theme('colors.blue.600');
  --success: theme('colors.emerald.600');
  --warning: theme('colors.amber.600');
  --danger: theme('colors.red.600');
}
```

### Fonts

Edit `<head>` in HTML files:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Update `src/css/main.js`:
```javascript
document.documentElement.style.fontFamily = 'YourFont, sans-serif';
```

### Components

Modify partials in `partials/` directory:
- `sidebar.html` - Navigation menu
- `header.html` - Top bar
- `footer.html` - Page footer

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm install` | Install all dependencies |
| `npm start` | Start development server (watch mode) |
| `npm run build` | Build for production |
| `npm run dev` | Tailwind watch mode only |

---

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | ✅ Latest |
| Firefox | ✅ Latest |
| Safari | ✅ Latest |
| Edge | ✅ Latest |
| Opera | ✅ Latest |

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Device |
|------------|-------|--------|
| Mobile | < 768px | Phones |
| Tablet | 768px - 1024px | Tablets |
| Desktop | > 1024px | Laptops/Desktops |

---

## 🔧 Build Process

The build process:
1. Reads `src/css/style.css`
2. Compiles Tailwind CSS
3. Outputs to `dist/main.css`
4. Copies HTML files to `dist/`

Run with:
```bash
npm run build
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Abdi Satya**
- GitHub: [@abdisatya-studio](https://github.com/abdisatya-studio)
- Email: abdisatya.sj@gmail.com

---

## 🙏 Credits

- Inspired by TailAdmin dashboard structure
- Built with Tailwind CSS and DaisyUI
- Icons by Phosphor Icons
- Fonts: Plus Jakarta Sans (Google Fonts)

---

## 📞 Support

For questions or support, please:
- Open an issue on GitHub
- Email: abdisatya.sj@gmail.com
- Check the documentation above

---

## 📈 Roadmap

### Planned Features
- [ ] Dark mode toggle
- [ ] More chart types
- [ ] Advanced filtering
- [ ] Export to PDF
- [ ] Multi-language support
- [ ] Mobile app companion

### Future Enhancements
- [ ] Real-time notifications
- [ ] Integration with fitness APIs
- [ ] Advanced analytics
- [ ] Custom dashboards
- [ ] Team collaboration tools

---

**Enjoy using FitPulse!** 💪

For live demo and updates, visit: https://github.com/abdisatya-studio/cool-tailwind