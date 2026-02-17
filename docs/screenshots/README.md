# Placeholder Screenshots

These are temporary SVG placeholders until actual screenshots are captured.

## Files

- **dashboard.svg** - Dashboard page placeholder
- **members.svg** - Members page placeholder
- **workouts.svg** - Workouts page placeholder
- **nutrition.svg** - Nutrition page placeholder
- **schedule.svg** - Schedule page placeholder
- **payments.svg** - Payments page placeholder
- **analytics.svg** - Analytics page placeholder

## Usage

These SVGs are referenced in the README.md as screenshot placeholders. They provide a visual preview of what each page represents.

**To add actual screenshots:**

1. Replace these SVG files with PNG screenshots
2. Update references in README.md from `.svg` to `.png`
3. Maintain same filename (e.g., `dashboard.png`)

## Quick replacement command

```bash
cd docs/screenshots

# You can use ImageMagick if installed:
convert your-screenshot.png -quality 100 -resize 1920x1080 dashboard.png

# Or just copy:
cp /path/to/actual-screenshot.png dashboard.png
```

## Viewing SVGs

Open any SVG in a browser to view:
```bash
open screenshots/dashboard.svg
# or
xdg-open screenshots/dashboard.svg
```

These were created as temporary placeholders since automated screenshot capture is not available in this environment.