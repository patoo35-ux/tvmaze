import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TvmazeService } from '../../services/tvmaze';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Mot-clé saisi par le client (boite mémore)
  searchQuery: string = '';

  // Liste des fiches renvoyées sous forme de tableau
  shows: any[] = [];

  // Injection d'une ligne directe vers le service
  constructor(private tvmazeService: TvmazeService) {}

  // Déclenchement de la recherche avec condition
  onSearch(): void {
    // Si la recherche est vide, envoi annulé
    if (!this.searchQuery.trim()) return;

    // Commande lancée au service logistique
    this.tvmazeService.searchShows(this.searchQuery).subscribe({
      next: (data) => {
        this.shows = data;
        console.log('Produits livrés :', this.shows);
      },
      error: (err) => console.error('Erreur de livraison :', err)
    });
  }
}