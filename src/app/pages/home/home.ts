import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TvmazeService } from './services/tvmaze';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  // 1. Liaison directe au service logistique
  private readonly tvmazeService = inject(TvmazeService);

  // 2. Étiquette mémoire réactive pour la saisie du client
  searchQuery = signal<string>('');

  // 3. Rayon réactif (Signal) stockant la liste des séries
  shows = signal<any[]>([]);

  // 4. Procédure de recherche et de réapprovisionnement du rayon
  onSearch(): void {
    const query = this.searchQuery().trim();

    // Si la case est vide, on annule la recherche
    if (!query) return;

    // Commande auprès du service et mise à jour directe du Signal
    this.tvmazeService.searchShows(query).subscribe({
      next: (data: any[]) => {
        // Enregistrement des produits reçus dans le Signal
        this.shows.set(data);
        console.log('Rayon approvisionné :', this.shows());
      },
      error: (err: any) => console.error('Rupture de stock / Erreur :', err)
    });
  }
}