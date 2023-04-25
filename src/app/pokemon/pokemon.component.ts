import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  constructor(private pokemonService: PokemonService) { }
  ngOnInit(): void {
    this.loadPokemon();
  }
  loadPokemon() {
    this.pokemonService.getRandomPokemon().subscribe({next : pokemon => this.pokemon = pokemon});
  }

  pokemon : Pokemon = {} as Pokemon;

  getName(): string [] {
    return this.pokemon.message.split("/")[4].split("-");
  }

}
