# Anton Bugaev Portfolio 🚀

A modern, interactive portfolio website for a Frontend React Developer with 2+ years of commercial experience. Built with Next.js, featuring 3D elements, smooth animations, and responsive design.

## 🌟 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **3D Elements**: Interactive 3D models using Three.js
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Theme**: Toggle between dark and light modes
- **Interactive Components**: Hover effects, animations, and smooth transitions
- **Contact Form**: Functional contact form with email integration
- **Project Showcase**: Dynamic project filtering and categorization
- **Skills Visualization**: Interactive skill bars and technology stack display
- **Performance Optimized**: Fast loading with optimized images and code splitting

## 🛠️ Tech Stack

### Frontend & Libraries
- **Next.js 14** - React framework for production
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Redux** - State management
- **Framer Motion** - Animation library
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js

### APIs & Integration
- **REST API** - API integration
- **Prisma ORM** - Database toolkit
- **PostgreSQL** - Database (for data integration)

### Tools & Deployment
- **EmailJS** - Email service for contact form
- **Vercel** - Deployment platform
- **Git** - Version control
- **Figma** - Design tools

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS post-processor
- **Sharp** - Image optimization

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/An11y/An1zo-portfolio.git
   cd An1zo-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SERVICE_ID=your_emailjs_service_id
   NEXT_PUBLIC_TEMPLATE_ID=your_emailjs_template_id
   NEXT_PUBLIC_PUBLIC_KEY=your_emailjs_public_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages

- **Home** (`/`) - Landing page with hero section and navigation
- **About** (`/about`) - Personal information, skills, and experience
- **Projects** (`/projects`) - Portfolio of work and projects
- **Contact** (`/contact`) - Contact form and social links

## 🎨 Customization

### Colors
The color scheme can be customized in `src/app/globals.css`:
```css
:root {
  --background: 27 27 27;
  --foreground: 220 220 220;
  --muted: 140 140 140;
  --accent: 254 254 91;
}
```

### Content
Update your personal information in `src/app/data.js`:
- Projects data
- Skills and technologies
- Experience and education
- Social links

### 3D Models
Replace 3D models in `public/models/` and update references in components.

## 📊 Project Structure

```
src/
├── app/
│   ├── (sub pages)/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── projects/
│   │   └── layout.jsx
│   ├── data.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── about/
│   ├── contact/
│   ├── models/
│   ├── navigation/
│   ├── projects/
│   └── [other components]
└── public/
    ├── audio/
    ├── background/
    ├── models/
    └── [other assets]
```

## 🔧 Key Components

- **Navigation**: Circular navigation with smooth animations
- **RenderModel**: 3D model renderer with Three.js
- **Contact Form**: Functional form with validation
- **Project Cards**: Interactive project showcase
- **Skill Bars**: Animated skill visualization
- **Theme Toggle**: Dark/light mode switcher

## 🎯 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Dynamic imports for better performance
- **Lazy Loading**: Components loaded on demand
- **Responsive Images**: Optimized for different screen sizes
- **Caching**: Static generation and caching strategies

## 📧 Contact Form Setup

1. Create an EmailJS account at [emailjs.com](https://www.emailjs.com/)
2. Create a new service and template
3. Add your credentials to `.env.local`
4. Customize the email template as needed

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- Heroku
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Three.js** community for 3D graphics resources
- **Framer Motion** for smooth animations
- **Tailwind CSS** for utility-first styling
- **Next.js** team for the amazing framework

## 📞 Contact

**An1zo** - [@An1zo](https://t.me/An1zo) - [GitHub](https://github.com/An11y)

Project Link: [https://github.com/An11y/An1zo-portfolio](https://github.com/An11y/An1zo-portfolio)

---

⭐ Star this repository if you found it helpful!
