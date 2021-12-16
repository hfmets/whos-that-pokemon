import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonSearchPageComponent } from './pokemon-search-page/pokemon-search-page.component';
import { WhosThatPokemonPageComponent } from './whos-that-pokemon-page/whos-that-pokemon-page.component';

const routes: Routes = [
  { path: 'pokeSearch', component: PokemonSearchPageComponent },
  { path: 'whosThatPokemon', component: WhosThatPokemonPageComponent },
  { path: '', redirectTo: '/pokeSearch', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
