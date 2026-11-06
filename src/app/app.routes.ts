import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Favoris } from './pages/favoris/favoris';
import { Show } from './components/show/show';


// Définition de la carte des chemins du magasin virtuel
export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'favoris', component: Favoris},
  { path: 'show/:id', component: Show
  },

  //Redirection si l'adresse n'existe pas (Erreur 404)
  { 
    path: '**', 
    redirectTo: '' 
  }
];