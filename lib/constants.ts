export const BRAND_NAME = "luxury LRP cosmetics";

export const COLORS = {
    primary: "#FFA500", // Orange
    secondary: "#FFFFFF", // White
};

export const CONFIG = {
    siteTitle: "luxury LRP cosmetics - Elevate Your Beauty",
    siteDescription: "Discover the elegance of luxury LRP cosmetics, where high-end beauty meets exquisite quality.",
    contactEmail: "info@luxurylrpcosmetics.com",
    socialLinks: {
        instagram: "https://www.instagram.com/luxurylrpcosmetics",
        facebook: "https://www.facebook.com/luxurylrpcosmetics",
        twitter: "https://www.twitter.com/luxurylrpcosmetics",
    },
};

/
 * Interface representing a cosmetic product.
 */
export interface CosmeticProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string; // e.g., "lipstick", "foundation", "skincare"
}

/
 * Function to get luxury LRP cosmetics product recommendations.
 * @returns {CosmeticProduct[]} Array of recommended cosmetic products.
 */
export function getRecommendedProducts(): CosmeticProduct[] {
    return [
        {
            id: "1",
            name: "Exquisite Velvet Lipstick",
            description: "Richly pigmented, luxurious lipstick that glides on smoothly for a flawless finish.",
            price: 35.00,
            imageUrl: "/images/products/lipstick.jpg",
            category: "lipstick",
        },
        {
            id: "2",
            name: "Radiant Glow Foundation",
            description: "Lightweight foundation that provides a luminous finish while nourishing the skin.",
            price: 50.00,
            imageUrl: "/images/products/foundation.jpg",
            category: "foundation",
        },
        {
            id: "3",
            name: "Silken Touch Face Cream",
            description: "An ultra-hydrating face cream that leaves your skin feeling soft and rejuvenated.",
            price: 70.00,
            imageUrl: "/images/products/cream.jpg",
            category: "skincare",
        },
    ];
}