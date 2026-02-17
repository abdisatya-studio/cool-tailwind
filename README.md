# FitPulse - Health & Fitness Admin Dashboard

A modern, responsive health & fitness dashboard built with Tailwind CSS and DaisyUI. Inspired by [TailAdmin](https://github.com/TailAdmin/tailadmin-free-tailwind-dashboard-template) structure, designed for fitness & health management.

![FitPulse](./docs/screenshots/dashboard.png)

---

## Quick Links

- 🌐 [Live Demo](http://localhost:8080)
- 📚 [Documentation](./docs/SCREENSHOTS.md)
- 🖌️ [Inspired by TailAdmin](https://github.com/TailAdmin/tailadmin-free-tailwind-dashboard-template)

---

## Overview

FitPulse provides a complete admin dashboard for health & fitness management. Built with:

- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library
- **Alpine.js** - Lightweight JavaScript framework

---

## Pages Included

| Page | Description |
|------|-------------|
| Dashboard | Overview with metrics & activity |
| Members | User/member management |
| Workouts | Exercise tracking & logging |
| Nutrition | Meal planning & nutrition |
| Schedule | Calendar & appointments |
| Payments | Transaction management |
| Analytics | Data insights & reports |

---

## Installation

### Prerequisites
- Node.js 18+ (with npm)

### Quick Start

```bash
# Clone the repository
git clone https://github.com/abdisatya-studio/cool-tailwind.git
cd cool-tailwind

# Install dependencies
npm install

# Build the project
npm run build

# Start development server
cd dist
python3 -m http.server 8080

# Open http://localhost:8080
```

---

## Tech Stack

| Technology | Version |
|------------|---------|
| Tailwind CSS | v3.4.17 |
| DaisyUI | v4.6.0 |
| Alpine.js | v3.14.1 |
| PostCSS | v8.5.1 |

---

## Features

✅ **Responsive Design** - Desktop-first, mobile-friendly
✅ **Modern UI** - Glassmorphism effects & smooth transitions
✅ **Reusable Components** - Modular partials (sidebar, header, footer)
✅ **Data Visualization** - Charts & metrics
✅ **Admin Features** - Member management, payments, scheduling
✅ **Clean Code** - Well-organized structure

---

## Components

- Sidebar navigation with mobile drawer
- Metric cards with glassmorphism effect
- Data tables with status indicators
- Chart components (custom SVG)
- Calendar & schedule views
- Forms & input elements
- Alerts & notifications

---

## Project Structure

```
cool-tailwind/
├── src/              # Source files
│   ├── css/         # Styles
│   └── js/          # Scripts
├── partials/        # Reusable components
│   ├── header.html
│   ├── sidebar.html
│   └── footer.html
├── dist/            # Build output
├── docs/            # Documentation
└── *.html           # Page files (7 pages)
```

---

## Customization

### Colors
Edit `src/css/style.css`:
```css
:root {
  --primary: theme('colors.teal.600');
  --secondary: theme('colors.blue.600');
}
```

### Fonts
Change Google Fonts in HTML `<head>`.

### Components
Modify partials in `partials/` directory.

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm start` | Start dev server (watch mode) |
| `npm run build` | Build for production |
| `npm run dev` | Tailwind watch only |

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Credits

- Inspired by [TailAdmin](https://github.com/TailAdmin/tailadmin-free-tailwind-dashboard-template)
- Built with Tailwind CSS and DaisyUI
- Icons by [Phosphor Icons](https://phosphoricons.com/)
- Fonts: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)

---

**Enjoy using FitPulse!** 💪

For more details, visit: https://github.com/abdisatya-studio/cool-tailwind