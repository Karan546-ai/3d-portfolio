# 🌌 3D Developer Portfolio

A modern, highly interactive, and fully responsive 3D developer portfolio built with React, Vite, and Vanilla CSS. Designed with a dark futuristic "glassmorphism" aesthetic, featuring subtle animations and robust performance. 

![Portfolio Preview](./portfolio-preview.png)

## 🚀 Features

- **Futuristic 3D Aesthetic**: Neon accents, dark themes, and glowing glassmorphism cards.
- **Fully Responsive**: Carefully crafted `@media` queries ensure a pixel-perfect experience across all devices (mobile, tablet, and desktop).
- **Animated Hero Section**: Includes a dynamic background, floating profile image, and entrance animations.
- **Projects Showcase**: Interactive grid displaying detailed project cards like "Python X-ray Vision" and "IoT Smart Monitoring".
- **Working Contact Form**: Integrated with Web3Forms to send messages directly to your email without any backend code.
- **Interactive Timeline**: A clean, vertical timeline for Education & Experience.

## 🛠️ Tech Stack

- **Frontend Framework:** React.js (v19)
- **Build Tool:** Vite
- **Styling:** Vanilla CSS (Zero external CSS libraries for maximum control and performance)
- **Email Service:** Web3Forms API
- **Icons:** React Icons & native emojis

## 💻 Running Locally

To run this project on your local machine:

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd PORTFOLIO
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`.

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

This will generate a `dist/` folder containing your minified static assets, which can be uploaded directly to Hostinger, Vercel, Netlify, or any other web host.

## 📧 Configuring the Contact Form

This portfolio uses **Web3Forms** to send emails. 

1. Go to [Web3Forms](https://web3forms.com/).
2. Enter your email and click "Create Access Key".
3. Check your inbox for the key.
4. Open `src/components/Contact.jsx`.
5. Replace the existing access key in the `handleSubmit` function with your new key:
   ```javascript
   formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); 
   ```

---
*Designed & coded with ❤️ by Karan Tiwari.*
