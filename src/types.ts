export interface Dish {
    id: number;
    name: string;
    description: string;
    detailedDescription?: string;
    price: string;
    image: string;
    category: string;
    rating: number;
    isBestseller?: boolean;
}
