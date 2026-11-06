import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { Signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TvmazeService {
  // 1. Adresse du fournisseur principal
  private readonly baseUrl = 'https://api.tvmaze.com';

  // 2. Injection directe du coursier HTTP 
  private readonly http = inject(HttpClient);

  // 3. Recherche de séries 
  searchShowsSignal(query: string): Signal<any[]> {
    return toSignal(
      this.http.get<any[]>(`${this.baseUrl}/search/shows?q=${query}`),
      { initialValue: [] } // Valeur par défaut avant réception du colis
    );
  }

  // 4. Détails d'une série avec épisodes 
  getShowDetailsSignal(id: string): Signal<any> {
    return toSignal(
      this.http.get<any>(`${this.baseUrl}/shows/${id}?embed=episodes`),
      { initialValue: null } // Valeur initiale neutre pendant le transport
    );
  }
}
