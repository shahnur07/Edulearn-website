# EduLearn - Educational Learning Platform

![Website Status](https://img.shields.io/badge/status-active-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![HTML](https://img.shields.io/badge/HTML5-E34C26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Responsive Design](#responsive-design)
- [Features Detailed](#features-detailed)
- [Contributors](#contributors)
- [Git Workflow](#git-workflow)
- [License](#license)

## 🎯 Overview

**EduLearn** is a modern, fully responsive educational platform designed to provide high-quality online courses and learning resources. Built with vanilla HTML, CSS, and JavaScript, this project showcases professional web development practices with a focus on user experience, accessibility, and responsive design.

The platform offers a comprehensive learning experience with interactive course pages, multimedia content, and an intuitive navigation system that works seamlessly across all devices.

### Live Demo
🔗 **[Visit EduLearn](https://shahnur07.github.io/Edulearn-website/home.html)**

## ✨ Features

### Core Functionality
- **Multi-Page Platform**: Home, Courses, About, Contact, and Authentication pages
- **Course Management**: Three featured courses with detailed information and video content
- **Responsive Navigation**: Adaptive navbar with hamburger menu for mobile/tablet views
- **Interactive Course Cards**: Filterable course catalog with search functionality
- **Video Integration**: Embedded YouTube videos with dedicated "Watch on YouTube" links
- **Contact Form**: Functional contact system with form validation
- **User Authentication Pages**: Login and signup interfaces with styling

### User Experience
- **Smooth Animations**: CSS transitions and transforms for polished interactions
- **Hover Effects**: Interactive elements with visual feedback
- **Mobile-First Design**: Optimized for all screen sizes (320px to 4K)
- **Accessibility**: Semantic HTML, proper color contrast, keyboard navigation support
- **Fast Performance**: Optimized assets and minimal dependencies

### Design Highlights
- **Professional Gradient Backgrounds**: Modern color schemes for visual appeal
- **Clean Typography**: Poppins font family with proper hierarchy
- **Consistent Branding**: Unified color palette throughout the platform
- **Modern UI Components**: Buttons, cards, forms, and navigation elements

## 🛠️ Technologies Used

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Semantic markup and page structure |
| **CSS3** | Styling, layouts, animations, and responsive design |
| **JavaScript** | Interactivity, form handling, and dynamic features |
| **Font Awesome** | Icon library for UI enhancements |
| **Google Fonts** | Custom typography (Poppins, Inter) |
| **YouTube Embed API** | Video content integration |

## 📁 Project Structure

```
edulearn-website/
├── index.html (home.html)           # Landing page
├── course.html                      # Courses catalog
├── course-1.html                    # Web Development course detail
├── course-2.html                    # UI/UX Design course detail
├── course-3.html                    # Python Data Science course detail
├── about.html                       # About us page
├── contact.html                     # Contact page
├── login.html                       # Login page
├── signup.html                      # Signup page
├── style.css                        # Main stylesheet (1234 lines)
├── script.js                        # JavaScript functionality (276 lines)
├── courses.json                     # Course metadata (JSON data)
├── images/                          # Image assets
│   └── computer.png
├── LICENSE                          # MIT License
└── README.md                        # This file
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server or build tools required
- Optional: Git for version control

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/shahnur07/Edulearn-website.git
   cd Edulearn-website
   ```

2. **Navigate to the Project**
   ```bash
   cd f:\software development
   ```

3. **Open in Browser**
   - Double-click `home.html` to open locally, OR
   - Use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Python 2
     python -m SimpleHTTPServer 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```
   - Visit `http://localhost:8000` in your browser

## 💻 Usage

### Navigation
- **Logo Click**: Click the "EduLearn." logo on any page to return to home
- **Nav Links**: Navigate between Home, Courses, About, and Contact
- **Mobile Menu**: Tap the hamburger icon (☰) on mobile/tablet to open sidebar menu
- **Login Button**: Access login page from navbar (desktop and mobile)

### Course Navigation
- **View Courses**: Click "Explore Courses" button on home page or visit Courses page
- **Course Details**: Click any course card to view detailed information
- **Watch Videos**: Embedded videos with "Watch on YouTube" links for full videos
- **Enroll**: Click "Enroll Now" button on course detail pages
- **Wishlist**: Add courses to wishlist using the heart icon

### Responsive Behavior
- **Desktop (≥769px)**: Full navbar with all options visible
- **Tablet (481-768px)**: Hamburger menu with sidebar navigation
- **Mobile (≤480px)**: Touch-optimized hamburger menu with stacked layout

## 📱 Responsive Design

### Breakpoints
```css
Mobile:  320px - 480px   (Small phones)
Tablet:  481px - 768px   (iPad and tablets)
Desktop: 769px+          (Laptops and desktops)
```

### Mobile-First Features
- ✅ Hamburger menu with smooth animations
- ✅ Stacked layouts for small screens
- ✅ Touch-friendly button sizes (min 40px height)
- ✅ Optimized font sizes for readability
- ✅ Reduced padding/margins for space efficiency
- ✅ Flexible images and videos

## 🎓 Features Detailed

### Courses Offered

#### 1. Complete Web Development Bootcamp 2025
- **Duration**: 22 hours
- **Level**: Beginner to Intermediate
- **Instructor**: John Smith
- **Price**: $19.99
- **Rating**: 4.8/5 (1,250 reviews)
- **Skills**: HTML, CSS, JavaScript, React, Node.js, MongoDB, Express.js

#### 2. UI/UX Design Masterclass
- **Duration**: 18 hours
- **Level**: Beginner to Intermediate
- **Instructor**: Sarah Johnson
- **Price**: $24.99
- **Rating**: 4.9/5 (890 reviews)
- **Skills**: Figma, UI Design, UX Research, Wireframing, Prototyping

#### 3. Python for Data Science
- **Duration**: 20 hours
- **Level**: Beginner to Advanced
- **Instructor**: Mike Chen
- **Price**: $22.99
- **Rating**: 4.7/5 (756 reviews)
- **Skills**: Python, Data Analysis, Machine Learning, Pandas, NumPy, TensorFlow

### Key Components

#### Navigation Bar
- Sticky positioning for easy access
- Smooth scroll animations
- Responsive hamburger menu with animated icon (3 lines → X)
- Active state indicators
- Logo as clickable link to home page

#### Hamburger Menu
- Smooth slide-in animation from left
- Full-screen overlay on mobile/tablet
- Click outside to close
- Active state visual feedback (animated cross icon)
- Includes login link in mobile menu

#### Course Cards
- Hover animations with elevation effect
- Category badges
- Rating and review display
- Quick preview buttons
- Responsive grid layout

#### Video Integration
- Responsive iframe containers
- 16:9 aspect ratio maintenance
- YouTube embedding with proper attributes
- Direct YouTube watch links

### Interactive Features
- Course filtering by category
- Search functionality
- Form validation
- Smooth page transitions
- Scroll detection for navbar effects

## 🔧 Technical Implementation

### CSS Architecture
- **Methodical Organization**: Component-based styling
- **CSS Grid & Flexbox**: Modern layout techniques
- **Media Queries**: Mobile-first responsive design
- **CSS Variables**: Root color and font definitions
- **Animations**: Smooth transitions and keyframe animations
- **Box Shadows**: Depth and elevation effects

### JavaScript Functionality
- **DOM Manipulation**: Dynamic element interaction
- **Event Listeners**: Scroll, click, and resize handlers
- **Form Handling**: Input validation and submission
- **Navigation**: Smooth menu toggles and page transitions
- **Accessibility**: Keyboard navigation support

### Performance Optimizations
- Minimal dependencies (only Font Awesome)
- Optimized CSS (no unused rules)
- Efficient JavaScript (no blocking operations)
- Proper image optimization
- Font loading strategy

## 👥 Contributors

| Role | Name | GitHub |
|------|------|--------|
| **Lead Developer** | Shahnur Islam | [@shahnur07](https://github.com/shahnur07) |

## 🔄 Git Workflow

### Branch Structure
```
main (master)
  ↑
  ├── shahnur (development)
  │   └── feature/* (feature branches)
  │
  └── Pull Requests for code review
```

### Workflow Process
1. Create feature branches from `shahnur` (development)
2. Make changes and commit regularly
3. Push to feature branch
4. Create Pull Request to `shahnur`
5. Code review and testing
6. Merge to `shahnur`
7. Periodic merge from `shahnur` to `main` (stable)

### Current Branches
- **main** → Stable, production-ready code
- **shahnur** → Active development branch

## 📊 Project Statistics

| Metric | Value |
|--------|-------|
| **Total Pages** | 9 HTML files |
| **CSS Lines** | 1,234 lines |
| **JavaScript Lines** | 276 lines |
| **Courses Available** | 3 featured courses |
| **Responsive Breakpoints** | 3 (mobile, tablet, desktop) |
| **Browser Support** | All modern browsers |
| **Mobile Optimization** | 100% responsive |

## 🎨 Design System

### Color Palette
```
Primary Blue:      #284bff
Secondary Blue:    #193ffa
Accent Orange:     #f47560
Success Green:     #10b981
Text Dark:         #000000
Text Gray:         #64748b
Background Light:  #f8f9fa
```

### Typography
- **Heading Font**: Poppins (700 weight)
- **Body Font**: Poppins (400-600 weight)
- **Secondary Font**: Inter (400-600 weight)

## 🔐 Security & Compliance

- ✅ HTTPS ready (works on GitHub Pages)
- ✅ No sensitive data stored
- ✅ CSRF protection via form validation
- ✅ XSS prevention with semantic HTML
- ✅ Accessible to screen readers
- ✅ WCAG 2.1 compliance considerations

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Shahnur Islam

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
```

## 🐛 Bug Reporting & Feature Requests

Found a bug or have a feature suggestion? 
- Open an issue on GitHub
- Provide detailed description and reproduction steps
- Include screenshots/videos when applicable

## 🚀 Future Enhancements

Planned features for future releases:
- [ ] Backend authentication system
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Payment gateway integration (Stripe)
- [ ] User dashboard and progress tracking
- [ ] Certificate generation
- [ ] Instructor dashboard
- [ ] Live chat support
- [ ] Mobile app (React Native)
- [ ] Dark mode theme
- [ ] Multi-language support

## 📞 Support

For questions or support:
- 📧 Email: [Create an issue on GitHub](https://github.com/shahnur07/Edulearn-website/issues)
- 🐛 Bug Reports: [GitHub Issues](https://github.com/shahnur07/Edulearn-website/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/shahnur07/Edulearn-website/discussions)

## 🎓 Learning Resources

This project demonstrates:
- Professional HTML5 semantic markup
- Modern CSS3 techniques (Grid, Flexbox, Animations)
- Vanilla JavaScript best practices
- Responsive web design principles
- Web accessibility standards
- Git version control workflows
- Professional code organization

## 📄 Changelog

### Version 1.0.0 (January 2025)
- ✅ Complete website implementation
- ✅ All 9 pages fully functional
- ✅ Mobile responsive design
- ✅ Course filtering and search
- ✅ Video integration
- ✅ Contact form
- ✅ Professional styling

## 🎉 Acknowledgments

- **Font Awesome** for icons
- **Google Fonts** for typography
- **YouTube** for video hosting
- **GitHub Pages** for hosting

---

**Made with ❤️ by Shahnur Islam**

Last Updated: January 15, 2025

