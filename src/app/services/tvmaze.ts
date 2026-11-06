import { Injectable, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Service({
})
export class TvmazeService {
  // Adresse centrale du fournisseur TV-Maze
  private baseUrl = 'https://api.tvmaze.com';

  // Injection du coursier HTTP
  constructor(private http: HttpClient) {}

  // 1. Demande de recherche de séries par mot-clé
  searchShows(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/search/shows?q=${query}`);
  }

  // 2. Demande du détail d'une série avec ses épisodes inclus
  getShowDetails(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/shows/${id}?embed=episodes`);
  }
}