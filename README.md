# Sana Khalid - Portfolio

[![React](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-yellow.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.19-38B2AC.svg)](https://tailwindcss.com/)
[![Express](https://img.shields.io/badge/Express-4.x-lightgrey.svg)](https://expressjs.com/)

A modern, responsive personal portfolio website showcasing my work as a Machine Learning Engineer & Full-Stack Developer. Built with React, TypeScript, and Vite for the frontend, and Express.js for the backend contact form handling.

## 🚀 Features

- **Hero Section**: Animated introduction with social links and key statistics
- **Skills Section**: Interactive skill categories with proficiency bars
- **Projects Section**: Showcase of completed projects with descriptions and links
- **Experience Section**: Professional background and achievements
- **Blog Section**: Articles on ML, development, and technology
- **Certificates Section**: Display of professional certifications
- **Contact Section**: Functional contact form with email integration
- **Responsive Design**: Optimized for all device sizes
- **Dark/Light Mode**: Theme switching capability
- **Smooth Animations**: Engaging user interactions and transitions

## 🛠️ Tech Stack

### Frontend

- **React 19.2.0** - UI library
- **TypeScript 5.9.3** - Type safety
- **Vite 7.2.4** - Build tool and dev server
- **Tailwind CSS 3.4.19** - Utility-first CSS framework
- **Radix UI** - Accessible UI components
- **Lucide React** - Icon library
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Recharts** - Data visualization
- **Next Themes** - Theme management

### Backend

- **Express.js** - Web framework
- **Nodemailer** - Email sending
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variables

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

## 🚀 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install root dependencies**

   ```bash
   npm install
   ```

3. **Setup Frontend (app/)**

   ```bash
   cd app
   npm install
   cd ..
   ```

4. **Setup Backend (backend/)**

   ```bash
   cd backend
   npm install
   cd ..
   ```

5. **Environment Variables**

   Create a `.env` file in the `backend/` directory:

   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   RECIPIENT_EMAIL=your-recipient-email@gmail.com
   PORT=5000
   ```

   > **Note**: For Gmail, use an App Password instead of your regular password.

## 🏃‍♂️ Usage

1. **Start the development servers**

   ```bash
   npm run dev
   ```

   This will start both the frontend (port 5173) and backend (port 5000) servers concurrently.

2. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

3. **Build for production**
   ```bash
   cd app
   npm run build
   ```

## 📁 Project Structure

```
portfolio/
├── app/                    # Frontend React application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── sections/      # Main page sections
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utilities and configurations
│   │   └── ...
│   ├── package.json
│   └── vite.config.ts
├── backend/               # Express.js API server
│   ├── server.js
│   └── package.json
├── package.json           # Root package.json for concurrent scripts
└── README.md
```

## 🎨 Customization

- **Personal Information**: Update details in `app/src/sections/Hero.tsx`
- **Skills**: Modify skills data in `app/src/sections/Skills.tsx`
- **Projects**: Add/edit projects in `app/src/sections/Projects.tsx`
- **Styling**: Customize Tailwind classes and CSS variables in `app/src/index.css`
- **Images**: Replace images in `app/public/images/`

## 📧 Contact

Sana Khalid - Machine Learning Engineer & Full-Stack Developer

- **Email**: khalidsana666@gmail.com
- **LinkedIn**: [linkedin.com/in/sana-khalid](https://linkedin.com)
- **GitHub**: [github.com/sana-khalid](https://github.com)
- **Twitter**: [twitter.com/sana-khalid](https://twitter.com)

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Icons by [Lucide React](https://lucide.dev/)
- UI Components by [Radix UI](https://www.radix-ui.com/)
- Font by [Google Fonts](https://fonts.google.com/)
