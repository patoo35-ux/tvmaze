import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './',
  styleUrls: ['']
})
export class HeaderComponent {
  // Filtre d'accès : fermé par défaut (false)
  isAdultMode: boolean = false;

  // Procédure de bascule déclenchée par le bouton
  toggleAdultMode(): void {
    // Inversement de l'état actuel (true devient false, false devient true)
    this.isAdultMode = !this.isAdultMode;
    console.log('Mode Adulte changé :', this.isAdultMode);
  }
}