# FitPulse - Tailwind CSS Admin Dashboard (Refactored)

A modern health & fitness dashboard using Tailwind CSS (inspired by TailAdmin structure).

## 📂 Project Structure

```
fitpulse-tailwind/
├── src/
│   ├── index.html          # Main dashboard
│   ├── css/
│   │   └── style.css       # Tailwind + custom styles
│   └── js/
│       └── main.js         # Alpine.js + custom scripts
├── dist/
│   └── main.css            # Compiled CSS (auto-generated)
├── partials/               # Reusable components
│   ├── sidebar.html
│   ├── header.html
│   ├── metric-group.html
│   └── chart.html
├── tailwind.config.js      # Tailwind config
├── postcss.config.js       # PostCSS config
├── package.json            # Dependencies
└── README.md               # This file
```

## 🛠 Tech Stack

| Tool | Version |
|------|---------|
| **Tailwind CSS** | v3.4.17 |
| **Alpine.js** | v3.14.1 |
| **ApexCharts** | v3.51.0 |
| **DaisyUI** | v4.6.0 |

## 🎨 Color Palette

- **Primary**: Teal (#14B8A6)
- **Secondary**: Blue (#3B82F6)
- **Success**: Emerald (#10B981)
- **Warning**: Amber (#F59E0B)

## 📋 Features

- **Responsive Sidebar** - Drawer on mobile
- **Dark Mode** - Full theme support
- **Glassmorphism** - Frosted glass cards
- **Stats Dashboard** - 4 metric cards
- **Charts** - Custom SVG charts

## 🚀 Start

```bash
cd /root/.openclaw/workspace/projects/fitpulse-tailwind
npm install
npm start
```

## 🔧 Build

```bash
# Development (watch mode)
npm run dev

# Production
npm run build
```
