# rn-assignment7-11293905
# Product Purchasing App

## Overview

This project is a mobile application designed to provide a seamless shopping experience for users. It allows users to view a list of available products, see detailed information about each product, add products to a cart, and view the items in their cart along with the total price. The app features a drawer navigation for easy access to different sections.

## Features

- **HomeScreen**: Displays a list of all available products.
- **ProductDetailScreen**: Shows detailed information about a selected product.
- **CartScreen**: Displays the items added to the cart along with their total price.
- **Drawer Navigation**: Accessible through a swipe gesture or button, providing easy navigation between screens.
- **Add to Cart Button**: Available on the product detail screen to add items to the cart.
- **Remove from Cart Button**: Available on the cart screen to remove items from the cart.
- **Data Fetching**: Fetches product data from an external API using `fetch` .
- **Asynchronous Operations**: Managed with `async/await` or promises.
- **Local Storage**: Uses AsyncStorage, SecureStore, or FileSystem to store selected items locally on the device.

## Functionality

- **View Products**: Users can view a list of available products fetched from an external API.
- **Product Details**: Users can preview detailed information about a product by clicking on it.
- **Add to Cart**: Users can add products to their cart from the product detail screen.
- **Remove from Cart**: Users can remove products from their cart on the cart screen.
- **View Cart**: Users can view the items in their cart along with the total price.

## Screenshots

### HomeScreen
![HomePage](assets/Screenshots/homePag.png)*Displays a list of available products.*

### ProductDetailScreen
![ProductDetail](assets/Screenshots/productDetail.png)
![Product2](assets/Screenshots/productDetail2.png)
![Product3](assets/Screenshots/productDetail3.png)
*Displays detailed information about a product.*

### CartScreen
![Cart](assets/Screenshots/cart.png)
*Displays the items added to the cart along with their total price.*

### Drawer Navigation
![homeDrawer](assets/Screenshots/homeDrawer.png)
![cartDrawer](assets/Screenshots/drawer1.png)
*Shows the navigation menu accessible through a swipe gesture or button.*

## Setup and Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/qpheal/rn-assignment7-11293905.git
   ```
2. Install dependencies:
   ```sh
   cd rn-assignment7-11293905
   npm install
   ```
3. Start the application:
   ```sh
   npm run start
   ```

## Dependencies

- React Native
- AsyncStorage or SecureStore
- Axios or Fetch API
- React Navigation (Drawer and Stack)

## Usage

1. **Run the Application**: Follow the setup instructions to start the application.
2. **Navigate**: Use the drawer navigation to switch between the HomeScreen, ProductDetailScreen, and CartScreen.
3. **Add to Cart**: On the ProductDetailScreen, click the "Add to Cart" button to add items to your cart.
4. **View Cart**: Navigate to the CartScreen to view the items in your cart and the total price.
5. **Remove from Cart**: On the CartScreen, click the "Remove" button to remove items from your cart.

## Contributing

1. Fork the repository.
2. Create your feature branch:
   ```sh
   git checkout -b branchName
   ```
3. Commit your changes:
   ```sh
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the branch:
   ```sh
   git push origin feature/AmazingFeature
   ```
5. Open a pull request.

