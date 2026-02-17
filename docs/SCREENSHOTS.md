# Screenshots Guide

This guide explains how to capture screenshots of FitPulse pages for the documentation.

## Method 1: Using Browser DevTools (Recommended)

### Chrome/Edge:
1. Open the page in browser
2. Open DevTools (F12 or Cmd/Ctrl + Shift + I)
3. Press Cmd/Ctrl + Shift + P (Command Palette)
4. Type "screenshot" and select:
   - "Capture full size screenshot" OR
   - "Capture screenshot"
5. Save to `docs/screenshots/` folder

### Firefox:
1. Open the page
2. Open DevTools (F12)
3. Click "..." menu → "Take Screenshot"
4. Save to `docs/screenshots/` folder

## Method 2: Using Command Line Tools

### Install screenshot tools:

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install chromium-browser

# macOS
brew install chromium
```

### Taking screenshots:

```bash
# Start the server
cd /root/.openclaw/workspace/cool-tailwind/dist
python3 -m http.server 8080

# Take screenshots (in another terminal)
chromium-browser --headless --screenshot=/root/.openclaw/workspace/cool-tailwind/docs/screenshots/dashboard.png http://localhost:8080/index.html
```

## Method 3: Using Online Tools

1. Deploy to GitHub Pages/Vercel/Netlify
2. Use screenshot services:
   - https://screenshot.guru
   - https://screenshotapi.net
   - https://www.screely.com

## Required Screenshots

| Filename | Page | Size |
|----------|------|------|
| dashboard.png | index.html | 1920x1080 |
| members.png | members.html | 1920x1080 |
| workouts.png | workouts.html | 1920x1080 |
| nutrition.png | nutrition.html | 1920x1080 |
| schedule.png | schedule.html | 1920x1080 |
| payments.png | payments.html | 1920x1080 |
| analytics.png | analytics.html | 1920x1080 |

## Screenshot Tips

✅ **Do:**
- Use full browser window (1920x1080 minimum)
- Capture complete page (scroll to capture everything)
- Ensure all content is visible and properly loaded
- Use consistent size (all same dimensions)
- Save as PNG (better quality than JPG)
- Name files exactly as above

❌ **Don't:**
- Crop out important content
- Use small thumbnails
- Include browser chrome/URL bar
- Save as low-quality JPEG
- Deviate from naming convention

## Quick Script to Take All Screenshots

If you have Chromium installed, save this as `take-screenshots.sh`:

```bash
#!/bin/bash

BASE_URL="http://localhost:8080"
OUTPUT_DIR="docs/screenshots"

mkdir -p "$OUTPUT_DIR"

pages=(
  "index.html:dashboard.png"
  "members.html:members.png"
  "workouts.html:workouts.png"
  "nutrition.html:nutrition.png"
  "schedule.html:schedule.png"
  "payments.html:payments.png"
  "analytics.html:analytics.png"
)

for page in "${pages[@]}"; do
  IFS=':' read -r html_file output_file <<< "$page"
  echo "Capturing: $html_file -> $OUTPUT_DIR/$output_file"

  chromium-browser \
    --headless \
    --disable-gpu \
    --window-size=1920,1080 \
    --screenshot="$OUTPUT_DIR/$output_file" \
    "$BASE_URL/$html_file"

  # Wait between screenshots
  sleep 2
done

echo "All screenshots captured!"
```

Make executable:
```bash
chmod +x take-screenshots.sh
./take-screenshots.sh
```

## Alternative: Automated Screen Capture Services

You can use APIs to automatically capture screenshots:

### ScreenshotAPI.net
```bash
curl -X GET "https://api.screenshotapi.net/v1/screenshot" \
  -H "Content-Type: application/json" \
  -d '{ "url": "http://localhost:8080/index.html", "width": 1920, "height": 1080 }' \
  --output screenshot.png
```

### Cloudinary
```bash
# Requires Cloudinary account
cloudinary_url=$(curl -X POST "https://api.cloudinary.com/v1_1/{cloud_name}/image/upload" \
  -F "file=http://localhost:8080/index.html" \
  -F "upload_preset={preset}" | jq -r '.secure_url')

curl "$cloudinary_url" --output screenshot.png
```

## Verification Checklist

After capturing screenshots, verify:

- [ ] All 7 screenshots present
- [ ] Correct filenames using naming convention
- [ ] All content visible and readable
- [ ] Consistent size across all screenshots
- [ ] No browser chrome/address bar
- [ ] High quality (PNG format)
- [ ] Pages fully loaded before capturing
- [ ] Responsive layout visible (1920px minimum width)

## Troubleshooting

### Server not accessible:
```bash
# Start the development server
cd /root/.openclaw/workspace/cool-tailwind/dist
python3 -m http.server 8080

# Test with curl
curl http://localhost:8080
```

### Chromium not installed:
```bash
# Ubuntu/Debian
sudo apt install chromium-browser

# macOS
brew install chromium

# Verify
chromium-browser --version
```

### Screenshots too small:
- Use `--window-size=1920,1080` flag
- Or take full-page screenshots in DevTools

### Screenshots blurry:
- Ensure page is fully loaded
- Wait for animations to complete
- Use PNG instead of JPEG
- Check browser zoom is at 100%

---

**Need help?** Refer to the main README or open an issue on GitHub.