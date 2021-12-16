import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  baseApiCall: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  getPokemonByName(pokemonName: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.baseApiCall + pokemonName);
  }

  getPokemonById(pokemonId: number): Observable<Pokemon> {
    return this.http
      .get<Pokemon>(this.baseApiCall + pokemonId)
      .pipe(map((receivedData: Pokemon) => receivedData));
  }
}
