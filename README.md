# Amr Belal Arab - AI Engineer Portfolio

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, Framer Motion, and React Three Fiber.

## 🚀 Getting Started

### 1. Installation

Clone the repository and install dependencies:

```bash
npm install
```

### 2. Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`.

### 3. Build for Production

```bash
npm run build
```

## 📁 Project Structure

- `src/components`: Reusable UI components (Navbar, Footer, Cards, 3D Hero).
- `src/pages`: Main page views (Home, Projects, Certificates, Links).
- `src/data`: Content files. Edit these to update site content.
- `src/assets`: Static assets.

## 📝 Customization Guide

### PDF Resume
Place your resume file in the `public` folder and name it `Amr_Belal_AI_Engineer_CV.pdf`.

### Updating Content

Modify the files in `src/data/` to update your portfolio details:

1. **Personal Info & Links**: `src/data/linksData.ts`
2. **Projects**: `src/data/projectsData.ts`
3. **Certificates**: `src/data/certificatesData.ts`
4. **Trainings**: `src/data/trainingsData.ts`

### 3D Avatar
To replace the 3D avatar, update `src/components/Hero3D.tsx` with your own `.glb` model using `@react-three/drei`'s `useGLTF` hook.
