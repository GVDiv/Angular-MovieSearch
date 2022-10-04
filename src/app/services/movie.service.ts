import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/ApiResponse';
import { Movie } from '../interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // key: 5a1858fc
  private API_URL: string = 'https://www.omdbapi.com/?apikey=5a1858fc';

  constructor(private http: HttpClient) { }

  getMovies(searchTerm: string): Observable<Movie[]>{
    return this.http.get<ApiResponse>(`${this.API_URL}&s=${searchTerm}`).pipe(
      map(response => {
        return response.Search;
      })
    );
  }
}
