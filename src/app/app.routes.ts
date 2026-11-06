import { Routes } from '@angular/router';
import { Favoris } from './pages/favoris/favoris';
import { Show } from './components/show/show';
import { HomeComponent } from './pages/home/home';


// Définition de la carte des chemins du magasin virtuel
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
    { path: 'favoris', component: Favoris},
    { path: 'show/:id', component: Show
  },

  //Redirection si l'adresse n'existe pas (Erreur 404)
  { 
    path: '**', 
    redirectTo: '' 
  }
];