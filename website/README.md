# Dara Rahmat Samii - Personal Website

A modern, responsive personal website for GitHub Pages with rotating profile photos.

## 🚀 Quick Start

1. **Rename this folder** to `DaraSamii.github.io`
2. **Add your images** (see folder structure below)
3. **Push to GitHub** as a repository named `DaraSamii.github.io`
4. Your site will be live at `https://DaraSamii.github.io`

## 📁 Folder Structure - FILL IN YOUR IMAGES

```
DaraSamii.github.io/
│
├── index.html
├── README.md
│
├── css/
│   └── style.css
│
├── js/
│   └── main.js
│
├── pages/
│   ├── blog.html          ← Your Virgool posts are already linked!
│   ├── piano.html         ← Add your YouTube video IDs
│   └── friends.html       ← Add your friends
│
└── assets/
    └── images/
        │
        ├── logos/                  ← YOU ALREADY HAVE THESE ✓
        │   ├── concordia-logo.png
        │   ├── ut-logo.png
        │   └── iust-logo.png
        │
        ├── profile/                ← 🔄 ROTATING PROFILE PHOTOS
        │   ├── 1.jpg               ← Add your photos here!
        │   ├── 2.jpg               ← Name them 1.jpg, 2.jpg, 3.jpg...
        │   ├── 3.jpg
        │   ├── 4.jpg
        │   └── 5.jpg               ← Default: 5 photos, rotates every 4 seconds
        │
        ├── projects/               ← 🔬 PROJECT SCREENSHOTS
        │   ├── meshgnn.png
        │   ├── cr25.png
        │   ├── rotameter.png
        │   ├── pid-ball.png
        │   ├── distillation.png
        │   └── fer.png
        │
        ├── friends/                ← 👥 FRIEND PHOTOS
        │   ├── friend1.jpg
        │   ├── friend2.jpg
        │   ├── friend3.jpg
        │   └── friend4.jpg
        │
        ├── piano/                  ← 🎹 PIANO PHOTOS
        │   ├── piano1.jpg
        │   ├── piano2.jpg
        │   └── piano3.jpg
        │
        └── blog/                   ← 📝 BLOG POST IMAGES
            ├── canada.jpg          ← For "شروعی نو در کانادا"
            ├── visa.jpg            ← For "معافیت تحصیلی"
            ├── game-theory.jpg     ← For "نظریه بازی‌ها"
            ├── ielts.jpg           ← For "آیلتس"
            ├── olympiad.jpg        ← For "المپیاد"
            └── boogie-woogie.jpg   ← For "Boogie Woogie"
```

## 🔄 Rotating Profile Photo Configuration

Edit `js/main.js` to customize:

```javascript
const CONFIG = {
    profilePhotoCount: 5,        // Number of photos (1.jpg to 5.jpg)
    photoChangeInterval: 4000,   // 4 seconds between changes
    photoExtension: 'jpg'        // File extension
};
```

## 🎬 Adding YouTube Videos

In `pages/piano.html`, replace `VIDEO_ID_X` with your actual YouTube video IDs:

```html
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" ...>
```

To get a video ID: `https://www.youtube.com/watch?v=ABC123` → ID is `ABC123`

## 📝 Your Blog Posts (Already Linked!)

Your Virgool posts are already integrated:
- شروعی نو - این بار در کانادا
- مراحل دریافت معافیت تحصیلی 1402
- مسیر راه یادگیری نظریه بازی‌ها
- Self-Study آزمون آیلتس
- راهنمای المپاد دانشجویی مهندسی شیمی
- شروع موسیقی Boogie Woogie

## 👥 Adding Friends

Edit `pages/friends.html` and duplicate the friend-card:

```html
<div class="friend-card">
    <div class="friend-photo">
        <img src="../assets/images/friends/friend1.jpg" alt="Name">
    </div>
    <h3>Friend's Name</h3>
    <p>Their Role / University</p>
    <p class="exp-date">How you met</p>
</div>
```

## 🌐 Deploying to GitHub Pages

1. Create a new repository named exactly: `DaraSamii.github.io`
2. Push all files to the `main` branch
3. Go to Settings → Pages → Source: Deploy from branch (`main`)
4. Wait a few minutes
5. Visit `https://DaraSamii.github.io`

## ✨ Features

- ✅ **Rotating profile photos** - Randomly swaps every 4 seconds
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll navigation
- ✅ Animated elements on scroll
- ✅ Dark theme with gradient accents
- ✅ RTL support for Persian blog posts
- ✅ YouTube video embeds
- ✅ Mobile hamburger menu

## 🛠️ Customization

### Change Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --color-primary: #6366f1;
    --color-accent: #f59e0b;
    --color-accent-pink: #ec4899;
}
```

### Update Google Scholar
Replace `YOUR_ID` in `index.html`:
```html
<a href="https://scholar.google.com/citations?user=YOUR_ACTUAL_ID" ...>
```

---

Built with ☕ and curiosity by Dara Rahmat Samii
