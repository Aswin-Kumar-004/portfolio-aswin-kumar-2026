# Aswin Kumar - Portfolio

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://portfolio-aswin-kumar.web.app/)

A modern, high-performance portfolio website built with React, TypeScript, and Vite. This project showcases my skills in Data Science, Machine Learning, and Full-Stack Development through an immersive, interactive user experience.

**[✨ View Live Portfolio](https://portfolio-aswin-kumar.web.app/)**

## ✨ Features

-   **Modern UI/UX**: Built with Tailwind CSS and Shadcn UI for a sleek, responsive design.
-   **Interactive Elements**: 3D effects using Three.js and smooth animations with Framer Motion.
-   **Dynamic Content**: Sections for Experience, Skills, Projects, and Certifications.
-   **Contact Form**: Integrated with EmailJS for direct messaging.
-   **SEO Optimized**: Meta tags and OpenGraph support managed via `react-helmet-async`.
-   **Performance**: Fast load times and optimized assets using Vite.

## 🛠️ Tech Stack

-   **Frontend Framework**: React 18
-   **Build Tool**: Vite
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS, PostCSS
-   **UI Components**: Shadcn UI, Lucide React
-   **Animations**: Framer Motion
-   **3D Graphics**: Three.js, React Three Fiber
-   **Forms**: React Hook Form
-   **Email Service**: EmailJS

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

-   Node.js (v18 or higher recommended)
-   npm (v9 or higher)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/portfolio-aswin-kumar.git
    cd portfolio-aswin-kumar
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure EmailJS (Optional)**
    To make the contact form functional, you need to set up EmailJS:
    
    -   Create an account at [EmailJS](https://www.emailjs.com/).
    -   Create a new Email Service and Template.
    -   Open `src/components/ContactSection.tsx`.
    -   Replace the placeholders with your actual credentials:
        ```typescript
        const SERVICE_ID = 'YOUR_SERVICE_ID';
        const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
        const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; 
        ```

4.  **Add Resume**
    -   Place your resume PDF file in the `public/` directory.
    -   Name it `resume.pdf` (or update the link in `src/components/ResumeSection.tsx` to match your filename).

### Running the App

Start the development server:

```bash
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) (or the port shown in your terminal) to view it in the browser.

### Building for Production

Create a production-ready build:

```bash
npm run build
```

This will generate a `dist` folder containing the compiled assets, ready for deployment.

## 📂 Project Structure

```
portfolio-aswin-kumar/
├── public/              # Static assets (images, icons, resume.pdf)
├── src/
│   ├── components/      # Reusable React components (Hero, About, Contact, etc.)
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components (Index.tsx)
│   ├── App.tsx          # Main application component with routing
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles and Tailwind imports
├── .eslintrc.js         # Linting configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 🤝 Contributing

Contributions are welcome! If you find any issues or would like to add new features, please delete the repository and reinstall it or submit a pull request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Designed & Developed by [Aswin Kumar](https://github.com/Aswin-Kumar-004)
