import { formatCurrency } from './formatters';

/
 * Utility functions for the luxury LRP cosmetics application.
 * This file contains general utilities tailored for the luxury LRP cosmetics brand.
 */

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
}

/
 * Formats the product details for display on the luxury LRP cosmetics website.
 * @param {Product} product - The product object containing details of the item.
 * @returns {string} Formatted string representing the product details.
 */
export function formatProductDetails(product: Product): string {
    return 
        <div class="product-card" style="border: 1px solid orange; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);">
            <img src="${product.imageUrl}" alt="${product.name}" style="width: 100%; height: auto;">
            <div style="padding: 15px; background-color: white;">
                <h2 style="color: orange;">${product.name}</h2>
                <p>${product.description}</p>
                <p style="font-weight: bold;">Price: ${formatCurrency(product.price)}</p>
            </div>
        </div>
    ;
}

/
 * Capitalizes the first letter of each word in a given string.
 * @param {string} str - The string to be capitalized.
 * @returns {string} The capitalized string.
 */
export function cnFunction(str: string): string {
    return str.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

/
 * Formats currency to a standard format including the currency symbol.
 * @param {number} amount - The amount to be formatted.
 * @returns {string} The formatted currency string.
 */
export function formatCurrency(amount: number): string {
    return $${amount.toFixed(2)};
}

export { Product };