# E-commerce React App

This is a simple e-commerce React app with a cart, product listing, checkout functionality, and an order confirmation page. The app utilizes React Context API for state management and Axios to fetch product data from an external API.

## Features

- Product listing with search functionality.
- Add products to cart and remove them.
- Checkout page for entering user details.
- Order confirmation page displaying shipping details.
- Responsive UI for a better user experience.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Project Structure](#project-structure)
3. [App Components](#app-components)
4. [Technologies Used](#technologies-used)
5. [Setup Instructions](#setup-instructions)
6. [Future Improvements](#future-improvements)

## Getting Started

### Prerequisites

- Node.js >= 14.x
- npm >= 6.x

### Install Dependencies

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/ecommerce-react-app.git
    ```

2. Navigate to the project folder:

    ```bash
    cd ecommerce-react-app
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```

### Run the App

After installing the dependencies, run the following command to start the development server:

```bash
npm start
```

## Project Structure
```bash
src/
├── components/
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   ├── Header.js
│   ├── MainMenu.js
│   ├── OrderConfirmationPage.js
│   ├── ProductCard.js
│   ├── Pagination.js
│   └── ...
├── context/
│   ├── CartContext.js
│   ├── ProductContext.js
│   └── ...
├── styles/
│   ├── CartPage.scss
│   ├── CheckoutPage.scss
│   ├── Header.scss
│   ├── MainMenu.scss
│   ├── OrderConfirmationPage.scss
│   └── ...
├── App.js
├── index.js
└── ...
```


## App Components
### CartPage
The CartPage component displays all the items in the shopping cart. It allows users to remove items from the cart or save them for later. The page also shows an order summary with the total price, shipping cost, and an option to proceed to checkout.

Context Used: CartContext

### Key Features:

Remove item from cart

Display product details

Display total price and checkout button

### CheckoutPage
The CheckoutPage handles user details input, including shipping and payment information. It also shows a summary of the user's cart items, such as the total price and item count.

Context Used: CartContext

Key Features:

Fetch user data (mock API request)

Display cart items and allow users to navigate back to the cart page for edits

### OrderConfirmationPage
This component displays a confirmation message once the user places an order, showing the shipping details retrieved either from the location or an API.

Key Features:

Fetch shipping details (mock API request)

Display shipping address

### Header
The Header component contains the navigation bar, including links to the home page, product listing, and cart. It also includes a search bar to filter products.

Context Used: CartContext, ProductsContext

Key Features:

Search functionality for filtering products

Cart icon displaying the number of items in the cart

### ProductCard
Each product is displayed as a ProductCard, which includes product details like title, description, price, and a star rating. Users can add products to their cart directly from here.

Context Used: CartContext

Key Features:

Show product details

Add product to cart

### MainMenu
The MainMenu displays the product list and handles pagination for navigating through the products.

Context Used: ProductsContext

Key Features:

Display products with pagination controls

Handle product filtering based on search query

## Technologies Used
React: JavaScript library for building user interfaces.

React Router: For routing between pages.

React Context API: For state management.

Axios: For fetching data from APIs.

Sass: For styling the components.

## Setup Instructions
Clone the repository as shown in the Getting Started section.

Run npm install to install the required dependencies.

Start the app using npm start.

The app should be available at http://localhost:3000.

## Future Improvements
Implement user authentication and login functionality.

Add more detailed error handling for API requests.

Enhance UI/UX design for better accessibility and responsiveness.

Integrate payment gateway for a real checkout experience.

