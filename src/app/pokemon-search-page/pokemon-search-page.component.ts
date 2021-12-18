import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-search-page',
  templateUrl: './pokemon-search-page.component.html',
  styleUrls: ['./pokemon-search-page.component.css'],
})
export class PokemonSearchPageComponent implements OnInit {
  pokemonSearchInput: string = '';
  pokemonImgUrl: string = '';
  currentPokemon!: Pokemon;
  modalActive: boolean = false;
  error: boolean = false;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {}

  getPokemon() {
    this.pokemonService
      .getPokemonByName(this.pokemonSearchInput.toLowerCase().replace(' ', '-'))
      .subscribe(
        (res) => {
          this.error = false;
          this.currentPokemon = res;
          this.pokemonImgUrl =
            res.sprites.other['official-artwork'].front_default;
        },
        (err) => (this.error = true),
        () => (this.modalActive = true)
      );
  }
}
