# codeIT-Final-Project-Demo

A modern shopping cart web application built with [Next.js](https://nextjs.org/), React, and CSS Modules. Users can browse products, view details, add items to their cart, and manage their cart with persistent storage.

---

## Features

- **User Authentication:** Sign up and sign in with form validation.
- **Product Listing:** Browse products fetched from an external API.
- **Product Details:** View detailed information for each product.
- **Shopping Cart:** Add and remove products, with cart state saved in local storage.
- **Profile Page:** View user profile information.
- **Responsive Design:** Optimized for desktop and mobile devices.

---

## Project Structure

```
codeIT-Final-Project-Demo/
├── public/                # Static assets (SVGs, images)
├── src/
│   ├── app/
│   │   ├── (main)/
│   │   │   ├── cart/      # Cart page and styles
│   │   │   ├── products/  # Product listing and details
│   │   │   ├── profile/   # User profile page
│   │   │   └── ...        # Other main pages
│   │   ├── components/    # Reusable UI components
│   │   ├── layout.js      # Root layout
│   │   └── page.js        # Entry point (login/signup)
│   └── ...                # Other source folders
├── package.json
├── next.config.js
├── jsconfig.json
├── .gitignore
└── README.md
```

---

## Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/yourusername/codeIT-Final-Project-Demo.git
cd codeIT-Final-Project-Demo
```

### 2. Install dependencies

```sh
npm install
```

### 3. Run the development server

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## Usage

- **Sign In / Sign Up:** Start at the home page to authenticate.
- **Browse Products:** Navigate to the Products page to view all items.
- **View Details:** Click on a product to see more information and add it to your cart.
- **Manage Cart:** Go to the Cart page to review or remove items.
- **Profile:** Access your profile information from the Profile page.

---

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [CSS Modules](https://nextjs.org/docs/pages/building-your-application/styling/css-modules)
- [Fake Store API](https://fakestoreapi.com/) (for product data)
- [DummyJSON](https://dummyjson.com/) (for user profile data)

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for improvements or bug fixes.

---

## Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [Fake Store API](https://fakestoreapi.com/)
- [DummyJSON](https://dummyjson.com/)