# Toufiq Imroze - Portfolio & Resume

A modern, professional portfolio and resume website built with Next.js, showcasing expertise in textile engineering and apparel manufacturing.

## 🌟 Features

- **Modern Portfolio Design**: Clean, professional, and responsive design
- **Interactive Resume Builder**: Edit and export resume to PDF
- **Smooth Animations**: Built with Framer Motion for engaging user experience
- **Light Theme**: Premium UI/UX with elegant color scheme
- **Responsive**: Works perfectly on all devices
- **Fast Performance**: Optimized for speed and SEO
- **Easy Deployment**: Ready for Vercel deployment

## 🚀 Technologies Used

- **Framework**: Next.js 12
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **PDF Export**: jsPDF & html2canvas
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── resume/            # Resume page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Education.tsx     # Education section
│   ├── Skills.tsx        # Skills section
│   ├── Projects.tsx      # Projects section
│   ├── Contact.tsx       # Contact section
│   ├── Navigation.tsx    # Navigation component
│   ├── Footer.tsx        # Footer component
│   └── resume/           # Resume components
│       ├── ResumeTemplate.tsx
│       └── ResumeControls.tsx
└── public/
    └── images/           # Static images
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pritul-portfolio
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

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information
Update your personal information in the following files:
- `src/app/page.tsx` - Homepage content
- `src/app/resume/page.tsx` - Resume data
- `src/components/Hero.tsx` - Hero section
- `src/components/About.tsx` - About section

### Adding Images
1. Add your profile picture as `profile-placeholder.jpg` in `public/images/`
2. Add project images in `public/images/` and update the project data

### Contact Information
Update contact details in:
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`
- `src/components/resume/ResumeTemplate.tsx`

### Projects & Experience
Edit the project and experience data in:
- `src/components/Projects.tsx`
- `src/app/resume/page.tsx`

## 🎨 Color Scheme

The project uses a professional light theme with these primary colors:
- **Primary**: Blue tones (#0ea5e9, #0284c7)
- **Secondary**: Purple tones (#a855f7, #9333ea)
- **Accent**: Green tones (#10b981, #059669)
- **Neutral**: Gray scale for text and backgrounds

## 📱 Features Overview

### Portfolio Section
- **Hero**: Eye-catching introduction with animated elements
- **About**: Professional background and values
- **Education**: Academic qualifications and coursework
- **Skills**: Technical and soft skills with progress bars
- **Projects**: Showcase of academic and professional projects
- **Contact**: Contact form and social media links

### Resume Builder
- **Live Editing**: Real-time preview of resume changes
- **PDF Export**: High-quality PDF download
- **Print Support**: Optimized for printing
- **Professional Template**: Clean, ATS-friendly design
- **Customizable Sections**: Easy to modify content

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms
The project can be deployed on any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean App Platform

## 🧑‍💼 Target Audience

This portfolio is specifically designed for:
- Textile engineering students
- Apparel manufacturing professionals
- Fresh graduates seeking internships
- Professionals in sustainable fashion
- Academic researchers in textiles

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

## 📞 Support

If you need help customizing this portfolio, feel free to reach out:
- Email: pritulalahy@example.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

---

**Made with ❤️ and Next.js**

> "The future of fashion lies in sustainable innovation and responsible manufacturing. Every thread we weave today shapes the world we leave tomorrow."
