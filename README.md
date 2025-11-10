# ToyTopia – A Local Kids Toy Store Platform

![React](https://img.shields.io/badge/React-19.1.1-blue?logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.16-green?logo=tailwind-css)
![Firebase](https://img.shields.io/badge/Firebase-12.5.0-yellow?logo=firebase)
![React Router](https://img.shields.io/badge/React_Router-7.9.5-red?logo=react-router)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

---

## Table of Contents
- [Project Theme](#project-theme)
- [Live URL](#live-url)
- [Purpose](#purpose)
- [Key Features](#key-features)
- [Technologies & NPM Packages](#technologies--npm-packages)
- [JSON Data Example](#json-data-example)
- [Project Setup](#project-setup)
- [GitHub Commit Requirements](#github-commit-requirements)

---

## Project Theme
A vibrant and playful online marketplace for kids' toys, encouraging families to discover and support local toy sellers. Users can log in, browse toys, view detailed info, and leave feedback or ratings for toys they want to buy for their kids.  

The platform emphasizes playful interaction, responsive design, and secure authentication.

---

## Live URL
[https://toy-topia-9c7f1.web.app/](https://toy-topia-9c7f1.web.app/)

---

## Purpose
Provide an interactive and secure platform for families to explore and purchase toys from local sellers. The application emphasizes user engagement through playful design, secure authentication, and responsive functionality across devices.

---

## Key Features

### Navigation & Layout
- **Navbar**: Displays website name, Home, and My Profile
  - Active route highlighting
  - Shows user image and name on hover when logged in
  - Login/logout button dynamically changes based on authentication
- **Footer**: Unique, eye-catching design
  - Links to **Terms & Conditions** and **Policy** pages
  - Social media links
- **Main Section**: Renders pages based on routes
- **404 Page**: Custom Not Found page

### Authentication
- Email/password login & registration
- Google login
- Password requirements: at least 6 characters, one uppercase, one lowercase
- Show/hide password toggle
- Forget password functionality

### User Profile
- Protected route “My Profile”
- Displays user info (name, email, photoURL)
- Edit name and photoURL via Firebase `updateProfile()`
- Persistent user info on page reload using `onAuthStateChanged`

### Home Page
- **Slider**: Minimum 3 slides using Swiper slider or Daisy UI
- **Popular Toys Section**: Minimum 6 items from JSON data
  - Thumbnail
  - Toy name
  - Rating
  - Available quantity
  - Price
  - “View More” button

### Toy Details Page
- Protected route
- Displays all toy information
- "Try Now" form with Name & Email fields, success message on submit

### Additional Route
- **Dashboard**: Protected route for meaningful content

### Extra Pages
- **Terms & Conditions Page** (linked in footer)
- **Policy Page** (linked in footer)

### Notifications & Animations
- Error/success messages using **React Toastify**
- Animations optionally implemented using **GSAP**
- Dynamic page titles
- Uses **React Blitz components** for advanced UI elements

### Responsiveness
- Fully responsive on mobile, tablet, and desktop

---

## Technologies & NPM Packages
- **React**: `^19.1.1`
- **React-DOM**: `^19.1.1`
- **React Router**: `^7.9.5`
- **Firebase**: `^12.5.0`
- **TailwindCSS**: `^4.1.16`
- **@tailwindcss/vite**: `^4.1.16`
- **React-Icons**: `^5.5.0`
- **Lucide-React**: `^0.552.0`
- **Swiper**: `^12.0.3`
- **GSAP**: `^3.13.0`
- **React-Toastify**: `^11.0.5`
- **React-Loader-Spinner**: `^8.0.0`
- **React Blitz**: for advanced components/UI

---

## JSON Data Example
```json
{
  "toyId": 1,
  "toyName": "Lego Classic Bricks",
  "sellerName": "Toys R Us Local",
  "sellerEmail": "contact@toysruslocal.com",
  "price": 49.99,
  "rating": 4.7,
  "availableQuantity": 75,
  "description": "A timeless set of colorful Lego bricks that encourages creativity and problem-solving. Kids can build anything they imagine, from houses to vehicles.",
  "pictureURL": "https://cdn.pixabay.com/photo/2016/03/31/20/11/lego-1297582_1280.png",
  "subCategory": "Building Blocks"
}
