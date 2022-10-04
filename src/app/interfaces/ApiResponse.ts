import { Movie } from "./movies";

export interface ApiResponse {
    Search: Movie[],
    totalResuls: string,
    Response: string,
}