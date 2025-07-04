🌐 Trelis Innovation

This is a *responsive React + Tailwind CSS* landing page for *Trelis Sync*, a real-time documentation collaboration feature built into DynamicDocs. The landing page is clean, modern, and focused on clarity and functionality—built for mid-sized dev teams and PMs.


 📸 Preview

![Landing Page Preview](./public/preview.png)

---

## 🚀 Features

- ✅ Hero section with bold product message and CTA
- ✅ Icon-based visual workflow summary (Connect → Collaborate → Control)
- ✅ Explanation of 3 key features
- ✅ Fully responsive layout (mobile-first)
- ✅ Footer with standard links: Docs, Support, Careers, GitHub
- ✅ Vercel deployment with semantic, commented code

---

## ⚙ Tech Stack

| Tool         | Description                        |
|--------------|------------------------------------|
| React        | Frontend library                   |
| Tailwind CSS | Utility-first CSS framework        |
| Vite         | Lightning-fast build tool          |
| GitHub       | Code collaboration and versioning  |
| Vercel       | Deployment platform                |

---

## 🧑‍💻 Folder Structure

trelis-sync-landing_page/
├── public/
│ └── preview.png
├── src/
│ ├── components/
│ │ ├── HeroCTA.jsx
│ │ ├── HeroSection.jsx
│ │ ├── HeroStyling.jsx
│ │ ├── HeroText.jsx
│ │ ├── HeroWrapper.jsx
│ │ └── Footer.jsx
│ ├── LandingPage.jsx
│ └── main.jsx
├── .gitignore
├── index.html
├── tailwind.config.cjs
├── postcss.config.cjs
├── package.json
├── vite.config.js
└── README.md

yaml
Copy
Edit

---

## 🛠 Local Development

To run the project locally:

1. *Clone the repo*

   ```bash
   git clone https://github.com/Syed-azharuddin17/the-bloom-studio-trellis-innovation
   cd the-bloom-studio-trellis/trelis-sync-landing_page
Install dependencies

bash
Copy
Edit
npm install
Run development server

bash
Copy
Edit
npm run dev
Open http://localhost:5173 in your browser.

📦 Deployment Instructions (Vercel)
Already deployed to https://trelis-sync.vercel.app

If deploying yourself:

1.Push your code to GitHub

2.Go to vercel.com → Import Project → Select repo

3.In Settings:

Set Root Directory to trelis-sync-landing_page

Build Command: npm run build

Output Directory: dist
4.Click Deploy
