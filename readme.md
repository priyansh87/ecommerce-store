
# 🛍️ eCommerce Website

An eCommerce platform built with the MERN stack (MongoDB, Express, React, Node.js), featuring Redis caching, analytics, and a fully responsive design. Sellers can track sales with an analytics dashboard showing detailed graphs of revenue and product performance.

## 📋 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup & Installation](#setup--installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [License](#license)

## ✨ Features
- **Product Management:** Add, update, and delete products.
- **User Authentication:** Secure login and registration with JWT-based authentication.
- **Shopping Cart:** Users can add products to their cart and place orders.
- **Order Management:** View, manage, and track orders.
- **Responsive Design:** Mobile and desktop compatible.
- **Analytics Dashboard:** Graphs to monitor sales, revenue, and product performance.
- **Redis Caching:** Fast product data retrieval with Redis caching.
- **Media Uploads:** Image and video uploads using Cloudinary and Multer.

## 🛠️ Tech Stack
- **Frontend:** React, Zustand, Tailwind CSS (for responsive design)
- **Backend:** Node.js, Express, MongoDB, Redis (for caching)
- **Data Visualization:** Recharts for graphs on the analytics page
- **Media Storage:** Cloudinary with Multer for handling media uploads

## 🚀 Setup & Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/priyansh87/ecommerce-store.git
   cd ecommerce-website
   ```

2. **Install dependencies in both the root and frontend directories:**
   ```bash
   # Install backend dependencies
   npm install

   # Navigate to frontend and install dependencies
   cd client
   npm install
   ```

3. **Start MongoDB and Redis:**  
   Make sure MongoDB and Redis are running on your local machine or configured to connect to a cloud-hosted database.

4. **Set up Environment Variables:**  
   Create a `.env` file in the root directory and add the following variables:

   ```env
   # Server Configuration
   PORT=5000

   # MongoDB Connection
   MONGO_DB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/ecommerce_db?retryWrites=true&w=majority

   # Redis URL
   UPSTASH_REDIS_URL=rediss://<redis-url>

   # JWT Secrets
   ACCESS_TOKEN_SECRET=<your-access-token-secret>
   REFRESH_TOKEN_SECRET=<your-refresh-token-secret>

   # Cloudinary Configuration
   CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
   CLOUDINARY_API_KEY=<your-cloudinary-api-key>
   CLOUDINARY_API_KEY_SECRET=<your-cloudinary-api-key-secret>

   # Stripe Payment Keys
   STRIPE_SECRET_KEY=<your-stripe-secret-key>
   STRIPE_PUBLISHABLE_KEY=<your-stripe-publishable-key>

   # Client URL
   CLIENT_URL=http://localhost:5173
   ```

   Replace placeholder values with your actual credentials.

5. **Run the application:**
   - **Backend:** In the root directory, run:
     ```bash
     npm run dev
     ```
   - **Frontend:** In the `client` directory, run:
     ```bash
     npm run dev
     ```

## 🔐 Environment Variables

| Variable Name             | Description                                       |
|---------------------------|---------------------------------------------------|
| `PORT`                    | Port number for server to run                     |
| `MONGO_DB_URI`            | MongoDB connection string                         |
| `UPSTASH_REDIS_URL`       | Redis database URL                                |
| `ACCESS_TOKEN_SECRET`     | Secret key for access tokens                      |
| `REFRESH_TOKEN_SECRET`    | Secret key for refresh tokens                     |
| `CLOUDINARY_CLOUD_NAME`   | Cloudinary cloud name for media storage           |
| `CLOUDINARY_API_KEY`      | Cloudinary API key                                |
| `CLOUDINARY_API_KEY_SECRET` | Cloudinary API secret                           |
| `STRIPE_SECRET_KEY`       | Stripe secret key for payments                    |
| `STRIPE_PUBLISHABLE_KEY`  | Stripe publishable key for frontend transactions  |
| `CLIENT_URL`              | Frontend client URL                               |

## 📊 Usage
- **User Registration & Authentication:** Users can sign up and log in securely.
- **Product Management:** Sellers can add, edit, and delete their products.
- **Order Placement:** Users can add items to the cart, proceed to checkout, and place orders.
- **Analytics Dashboard:** Sellers can view sales data and analytics through interactive graphs.
- **Media Uploads:** Product images are managed using Cloudinary with Multer for easy uploads.


