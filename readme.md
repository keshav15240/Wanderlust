# 🏡 Wanderlust

A full-stack Airbnb-inspired web application where users can discover, create, edit, and review travel listings. Built using the MERN ecosystem with authentication, image uploads, cloud storage, and automated end-to-end testing using Playwright.

---

## 🚀 Live Demo

🔗 https://wanderlust-lc72.onrender.com

---

## 📸 Screenshots

> Add screenshots of:
- Home Page
- Listing Details
- Create Listing
- Login Page
- Review Section

Example:

```
assets/
├── home.png
├── listing.png
├── login.png
└── create-listing.png
```

---

# ✨ Features

- User Authentication (Signup/Login/Logout)
- Create, Edit and Delete Listings
- Upload Images using Cloudinary
- Interactive Listing Details
- Review & Rating System
- Flash Messages
- Responsive UI
- Server-side Validation
- Session Management
- MongoDB Database
- Automated End-to-End Testing using Playwright

---

# 🛠 Tech Stack

### Frontend

- HTML
- CSS
- Bootstrap
- EJS
- JavaScript

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Authentication

- Passport.js
- Express Session

### Image Storage

- Cloudinary
- Multer

### Testing

- Playwright
- TypeScript

---

# 📂 Project Structure

```
wanderlust/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── views/
├── public/
├── pages/
├── fixtures/
├── tests/
├── utils/
├── app.js
├── playwright.config.ts
└── package.json
```

---

# ⚙ Installation

Clone the repository

```bash
git clone https://github.com/keshav15240/Wanderlust.git
```

Go into the project

```bash
cd Wanderlust
```

Install dependencies

```bash
npm install
```

Create a `.env` file and add:

```env
ATLASDB_URL=
SECRET=
CLOUD_NAME=
CLOUD_API_KEY=
CLOUD_API_SECRET=
```

Run the application

```bash
npm start
```

or

```bash
npm run dev
```

Open

```
http://localhost:8080
```

---

# 🧪 End-to-End Testing (Playwright)

This project includes automated UI testing using **Playwright**.

## Implemented Tests

- ✅ User Login
- ✅ Create Listing

### Framework Features

- Page Object Model (POM)
- Fixtures
- Cross-Browser Testing
- Chromium
- Firefox
- WebKit
- HTML Reports
- Trace Viewer
- Screenshot Capture
- Video Recording (configurable)

Run all tests

```bash
npx playwright test
```

Run with browser visible

```bash
npx playwright test --headed
```

View HTML Report

```bash
npx playwright show-report
```

---

# 📊 Test Results

```
Running 6 tests using 1 worker

✓ Chromium Login
✓ Chromium Create Listing
✓ Firefox Login
✓ Firefox Create Listing
✓ WebKit Login
✓ WebKit Create Listing

6 passed
```

---

# 🔒 Security

Sensitive information is stored securely using environment variables.

The following files are ignored:

```
.env
node_modules/
playwright-report/
test-results/
```

---

# 📈 Future Improvements

- Booking System
- Payment Integration
- Wishlist
- Advanced Search
- Maps Integration
- User Profiles
- Admin Dashboard
- CI/CD using GitHub Actions
- Docker Deployment

---

# 👨‍💻 Author

**Keshav Gupta**

- GitHub: https://github.com/keshav15240
- LinkedIn: https://www.linkedin.com/in/keshav15240/

---

# ⭐ If you found this project useful, consider giving it a star!
