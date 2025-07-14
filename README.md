# Dharmik Joshi - Senior Java Backend Developer Portfolio

A modern, professional portfolio website built with Next.js, TypeScript, and Tailwind CSS to showcase my skills, projects, and experience as a Senior Java Backend Developer.

## 🚀 Features

- **Modern UI Design**: Clean and professional interface optimized for recruiters and hiring managers
- **Interactive Resume**: Downloadable PDF resume with filterable skills section
- **Project Showcase**: Featured GitHub projects with descriptions and links
- **YouTube Integration**: Embedded videos from my YouTube channel
- **Testimonials Section**: Carousel of endorsements from colleagues
- **Contact Section**: Easy ways to reach out via LinkedIn, Email, or WhatsApp
- **AI Chat Assistant**: ChatGPT-like assistant trained on my resume and experience
- **Company & Technology Logos**: Visual showcase of my work history and tech stack
- **Mobile Responsive**: Optimized for all devices from mobile to desktop
- **SEO Optimized**: Enhanced for search engines with relevant keywords

## 📋 Tech Stack

- **Next.js**: React framework with server-side rendering for improved SEO
- **TypeScript**: Strongly-typed JavaScript for better code quality
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Framer Motion**: Animation library for smooth transitions and effects
- **React-PDF**: For displaying and downloading resume files
- **React Icons**: Icon library for professional UI elements

## 🛠️ Local Development

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**

```bash
git clone <repository-url>
cd dharmik-joshi-portfolio
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**

Visit [http://localhost:3000](http://localhost:3000) to see the portfolio website.

## 📄 Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── components/       # UI components
│   │   ├── chat/         # AI Assistant components
│   │   ├── contact/      # Contact form and methods
│   │   ├── home/         # Hero and home page components
│   │   ├── projects/     # Project showcase components
│   │   ├── resume/       # Resume viewer and skills
│   │   ├── shared/       # Shared components (Navbar, Footer)
│   │   ├── testimonials/ # Testimonials carousel
│   │   ├── ui/           # UI utility components
│   │   └── youtube/      # YouTube video integration
│   ├── globals.css       # Global CSS styles
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page component
└── public/               # Static assets
    ├── assets/           # Images, logos, and other assets
    │   └── logos/        # Company and tech logos
    └── ...
```

## 🌐 Deployment

This project is designed to be deployed on Vercel, but can also be hosted on other platforms like Netlify or GitHub Pages.

### Deploying to Vercel

1. Create an account at [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Click "Import"
4. Vercel will automatically detect Next.js and configure the build settings
5. Click "Deploy"

## 🔍 SEO Optimization

The portfolio includes metadata optimized for search engines with relevant keywords:
- Java Developer
- Spring Boot
- Senior Software Engineer
- Backend Developer
- Microservices
- Redis
- MongoDB
- AWS

## 📱 Contact

Feel free to reach out through any of the following channels:

- **Email**: dharmikj75@gmail.com
- **LinkedIn**: [linkedin.com/in/eng-dj/](https://www.linkedin.com/in/eng-dj/)
- **WhatsApp**: +91-9096167416
- **GitHub**: [github.com/DharmikJoshi-is-star](https://github.com/DharmikJoshi-is-star)
- **YouTube**: [youtube.com/@dharmikjoshi1055](https://www.youtube.com/@dharmikjoshi1055)

## 📜 License

This project is licensed under the MIT License.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Profile Image

To add your profile image to the portfolio:

1. Save your profile image as `dharmik-profile.jpg` in the `/public/assets/profile/` directory
2. The image has already been linked in the Hero component
3. Make sure the image is a square or near-square format for best results in the circular frame
