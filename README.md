# Professional Portfolio

A beautiful, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Vite. This project showcases your professional experience, research interests, courses, and external profiles in an elegant and user-friendly interface.

## Features

- **Responsive Design**: Looks great on all devices from mobile to desktop
- **Modern UI**: Built with Tailwind CSS for a clean, modern aesthetic
- **Smooth Animations**: Page transitions and scroll animations using Framer Motion
- **Type Safety**: Developed with TypeScript for better code quality
- **Multiple Pages**: Includes:
  - About
  - Research Interests & Specialization
  - Courses & Educational Involvement
  - External Professional Profiles
  - Experience Timeline

## Setup and Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Build for production**

```bash
npm run build
```

5. **Preview production build**

```bash
npm run preview
```

## Customization

### Content

- Edit page components in the `src/pages` directory
- Update profile information and data in each component file
- Replace images in the `src/assets` directory

### Styling

- Main styling configuration is in `tailwind.config.js`
- Global styles are in `src/styles/index.css`
- Component-specific styles are included within each component

### Colors

The default color scheme can be modified in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: "#0d253f",
      secondary: "#01b4e4", 
      accent: "#90cea1",
    }
  }
}
```

## Technology Stack

- **React**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Build tool and development server
- **Framer Motion**: Animation library
- **React Router**: Page routing

## License

This project is open source and available under the [MIT License](LICENSE). 