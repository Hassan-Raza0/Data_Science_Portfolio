# Hassan Raza - Portfolio Website

A modern, production-ready portfolio website showcasing AI/ML expertise, automation solutions, and data science capabilities. Built with React, TypeScript, and Supabase for a seamless, high-performance experience.

## About

Professional portfolio for Hassan Raza — Data Scientist, AI/ML Engineer, and Automation Developer. This website demonstrates expertise in building intelligent systems and transforming businesses through machine learning and data-driven solutions.

## Features

- **Modern Design**: Clean, responsive UI with smooth animations and transitions
- **Multi-Page Navigation**: Home, About, Services, Portfolio, Blog, and Contact pages
- **Contact Form**: Integrated with Supabase for reliable message storage
- **Responsive Layout**: Optimized for all devices from mobile to desktop
- **Fast Performance**: Built with Vite for lightning-fast load times
- **Type-Safe**: Full TypeScript implementation for better code quality
- **Dark Theme**: Professional dark color scheme with cyan accents

## Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Database**: Supabase
- **Deployment**: GitHub Pages (production-ready)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Hassan-Raza0/Data_Science_Portfolio.git
cd Data_Science_Portfolio
Install dependencies:

bash
Copy code
npm install
Set up environment variables:
Create a .env file in the root directory with your Supabase credentials:

env
Copy code
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
Start the development server:

bash
Copy code
npm run dev
The application will be available at http://localhost:5173

Available Scripts
npm run dev — Start development server

npm run build — Build for production

npm run preview — Preview production build

npm run lint — Run ESLint

npm run typecheck — Run TypeScript type checking

npm run deploy — Deploy to GitHub Pages

Project Structure
bash
Copy code
src/
├── components/          # Reusable UI components
│   ├── Navigation.tsx   # Main navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── Services.tsx     # Services showcase
│   ├── Projects.tsx     # Project portfolio
│   ├── Skills.tsx       # Skills display
│   ├── Certifications.tsx
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer component
├── pages/               # Page components
│   ├── Home.tsx         # Homepage
│   ├── About.tsx        # About page
│   ├── ServicesPage.tsx
│   ├── Portfolio.tsx    # Portfolio page
│   ├── Blog.tsx         # Blog page
│   └── ContactPage.tsx  # Contact page
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles
Database Schema
The application uses Supabase with the following tables:

contact_submissions: Stores contact form submissions with user details and messages

Deployment
Build for Production
bash
Copy code
npm run build
The production-ready files will be generated in the dist directory.

GitHub Pages
The portfolio is deployed using GitHub Pages.

Live site:
https://Hassan-Raza0.github.io/Data_Science_Portfolio

Deploy updates:

bash
Copy code
npm run deploy
Other Hosting Options
This project can also be deployed to:

Vercel

Netlify

AWS Amplify

Cloudflare Pages

Make sure to set up environment variables in your hosting platform’s settings.

Customization
Update Personal Information
Update name and titles in src/components/Navigation.tsx

Modify hero content in src/components/Hero.tsx

Add your projects in src/components/Projects.tsx

Update services in src/components/Services.tsx

Customize skills in src/components/Skills.tsx

Update Social Links
Update social media links in src/components/Hero.tsx and src/components/Footer.tsx

Modify Color Scheme
The color scheme is defined in src/index.css. Update gradients and color classes to match your brand.

Features Highlight
Contact Form
Form validation

Supabase integration for data persistence

Success and error notifications

Basic spam protection and rate limiting

Portfolio Section
Project showcase with descriptions

Technology tags

GitHub links

Responsive grid layout

Services Section
AI/ML consulting

Automation solutions

Data science services

Custom software development

Performance
Fast initial page load with Vite

Optimized production builds

Efficient asset bundling

Responsive and accessible UI

Browser Support
Chrome (latest)

Firefox (latest)

Safari (latest)

Edge (latest)

License
This project is provided for portfolio and demonstration purposes.
Reuse or redistribution without explicit permission is not allowed.

Contact
Hassan Raza — Data Scientist · AI/ML Engineer · Automation Developer

GitHub: https://github.com/Hassan-Raza0

LinkedIn: https://linkedin.com/in/your-profile

Email: hassansoomroraza@gmail.com
