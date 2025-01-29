# MitraMall

MitraMall is a Laravel-based e-commerce platform designed to provide a seamless shopping experience with modern features and high performance.

## Features

- **User Authentication**: Secure login and registration system.
- **Product Management**: Add, edit, and manage product listings.
- **Shopping Cart & Checkout**: A fully functional cart with order processing.
- **Payment Integration**: Supports multiple payment gateways.
- **Responsive Design**: Optimized for all devices.

## Installation

### Requirements
Ensure your system meets the following requirements:
- PHP >= 8.0
- Composer
- MySQL or PostgreSQL
- Node.js & NPM (for frontend assets)

### Setup Guide
1. Clone the repository:
   ```sh
   git clone https://github.com/asep933/ecommerce-mitramall.git
   cd mitramall
   ```
2. Install dependencies:
   ```sh
   composer install
   npm install && npm run dev
   ```
3. Create a `.env` file:
   ```sh
   cp .env.example .env
   ```
4. Configure the database in the `.env` file.
5. Generate the application key:
   ```sh
   php artisan key:generate
   ```
6. Run migrations and seed the database:
   ```sh
   php artisan migrate --seed
   ```
7. Start the development server:
   ```sh
   php artisan serve
   ```

## Usage
After installation, access the application at `http://localhost:8000`. Register an account or log in with the seeded admin credentials.

## Deployment
For production deployment:
- Configure `.env` with production settings.
- Run `php artisan config:cache` for optimized performance.
- Set up a queue worker for background tasks if necessary.

## License
This project is licensed under the MIT License. Feel free to use and modify it as needed.
