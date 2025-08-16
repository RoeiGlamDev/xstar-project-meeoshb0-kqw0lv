import { defineConfig } from 'tailwindcss';

/
 * Custom Tailwind configuration for luxury LRP cosmetics
 * This configuration sets up a color palette and animations 
 * tailored for a high-end luxury cosmetics brand.
 */
export default defineConfig({
  theme: {
    extend: {
      colors: {
        // Custom color palette for luxury LRP cosmetics
        orange: '#FFA500', // Primary brand color
        white: '#FFFFFF',  // Secondary brand color
      },
      animation: {
        // Custom animations for luxury LRP cosmetics
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-out': 'fadeOut 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
});

/
 * Interfaces and types specific to luxury LRP cosmetics
 */
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
}

export interface Customer {
  id: number;
  name: string;
  email: string;
  address: string;
  wishlist: Product[];
}

/
 * Business logic for luxury LRP cosmetics
 */
export const getProducts = (): Product[] => {
  return [
    {
      id: 1,
      name: 'Luxury Lipstick',
      description: 'A luxurious, hydrating lipstick that glides on smoothly.',
      price: 35,
      category: 'Lip Care',
      imageUrl: '/images/luxury-lipstick.jpg',
    },
    {
      id: 2,
      name: 'Premium Face Cream',
      description: 'An ultra-hydrating face cream for a radiant glow.',
      price: 75,
      category: 'Skincare',
      imageUrl: '/images/premium-face-cream.jpg',
    },
    // Add more products as needed
  ];
};

/
 * Fetches customer data
 * @param customerId - ID of the customer to fetch
 * @returns Customer - The customer data
 */
export const getCustomerById = (customerId: number): Customer | undefined => {
  const customers: Customer[] = [
    {
      id: 1,
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      address: '123 Luxury St, Elegance City, CA',
      wishlist: [],
    },
    // Add more customers as needed
  ];
  return customers.find(customer => customer.id === customerId);
};