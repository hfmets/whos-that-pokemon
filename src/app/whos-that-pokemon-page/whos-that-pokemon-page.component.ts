import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-whos-that-pokemon-page',
  templateUrl: './whos-that-pokemon-page.component.html',
  styleUrls: ['./whos-that-pokemon-page.component.css'],
})
export class WhosThatPokemonPageComponent implements OnInit {
  currentPokemon!: Pokemon;
  pokemonImgUrl: string = '';
  pokemonCount: number = 151;
  revealed: boolean = false;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getRandomPokemon();
  }

  getRandomPokemon() {
    let id = Math.floor(Math.random() * this.pokemonCount);
    this.pokemonService.getPokemonById(id).subscribe(
      (res) => {
        this.currentPokemon = res;
        this.pokemonImgUrl =
          res.sprites.other['official-artwork'].front_default;
      },
      (err) => console.log(err),
      () => (this.revealed = false)
    );
  }

  revealPokemon() {
    this.revealed = true;
  }
}
