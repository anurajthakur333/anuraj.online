# 🚀 anuraj.online — Dev Portfolio

A fast, clean, and responsive portfolio built with **React**, **Bootstrap 5**, and **Vite**. No backend needed — just plug in your info and go!

🌐 [Live Site](https://anuraj.online)

## ✨ Features
- 📱 Fully responsive (mobile-friendly)
- 🌙 Dark & light themes
- 🌍 Multi-language support
- ⚡ Super fast with Vite
- 💌 Contact form with EmailJS

## 🛠 Getting Started

1. Clone the repo  
   `git clone "https://github.com/anurajthakur333/anuraj.online.git"`

2. Install dependencies  
   `npm install`

3. Run in dev mode  
   `npm run dev`

4. Build for production  
   `npm run build`

## 🧩 Customization

### 📄 Content  
Edit the JSON files in `public/data/`.

### 🎨 Colors  
Tweak SCSS variables in `src/styles/_variables.scss`.

### 🗂 Sections  
Manage via `public/data/structure.json`.

### 🌐 Languages  
Edit `supportedLanguages` in `settings.json`.

### 💌 Contact Form  
Set your EmailJS credentials in `settings.json`:

```json
"emailjs": {
  "publicKey": "YOUR_KEY",
  "serviceId": "YOUR_SERVICE_ID",
  "templateId": "YOUR_TEMPLATE_ID"
}
