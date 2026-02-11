export interface Movie {
    id: number;
    title: string;
    year: number;
    description?: string;
    duration: number;
    genre: string; 
    director?: string;
    rating: number; 
    language: string;
    country: string;
    posterUrl: string;
}
