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
    images?: {
        cover: string;
        ingredients: string;
        preparation: string;
        gallery?: string[];
    };
    infographic?: string;
    videos?: {
        promotional: string;
        restaurant: string;
    };
    commitments?: string[];
    commitmentImage?: string;
}
