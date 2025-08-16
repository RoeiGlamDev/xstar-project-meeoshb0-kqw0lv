import { ProductCategory, User, Order } from './types'; // Importing necessary types for the application

/
 * Interface representing a cosmetic product in luxury LRP cosmetics.
 * @interface Product
 */
export interface Product {
  id: string; // Unique identifier for each product
  name: string; // Name of the product
  description: string; // Detailed description of the product
  price: number; // Price of the product
  category: ProductCategory; // Category the product belongs to
  inStock: boolean; // Availability of the product
  imageUrl: string; // URL of the product image
  luxuryRating: number; // Rating based on luxury standards (1 to 5)
}

/
 * Interface representing a luxury customer shopping at luxury LRP cosmetics.
 * @interface LuxuryCustomer
 * @extends User
 */
export interface LuxuryCustomer extends User {
  loyaltyPoints: number; // Points accumulated through purchases
  preferredCategories: ProductCategory[]; // Categories the customer prefers
}

/
 * Interface representing an order placed by a customer.
 * @interface LuxuryOrder
 */
export interface LuxuryOrder extends Order {
  items: Product[]; // List of products in the order
  totalAmount: number; // Total amount for the order
  orderDate: Date; // Date when the order was placed
  customer: LuxuryCustomer; // Customer who placed the order
}

/
 * Enum representing product categories in luxury LRP cosmetics.
 * @enum {string}
 */
export enum ProductCategory {
  Skincare = "Skincare",
  Makeup = "Makeup",
  Fragrance = "Fragrance",
  Haircare = "Haircare",
}

/
 * Function to calculate the total price of products in an order.
 * @param products - Array of products in the order.
 * @returns Total price as a number.
 */
export function calculateTotalPrice(products: Product[]): number {
  return products.reduce((total, product) => total + product.price, 0);
}

/
 * Function to check if a product is in stock.
 * @param product - The product to check.
 * @returns True if in stock, otherwise false.
 */
export function isProductInStock(product: Product): boolean {
  return product.inStock;
}