import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  message: any;

  constructor(private http: HttpClient) { }

    getRandomPokemon(): Observable<Pokemon>{return this.http.get<Pokemon>("https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png")
  }

}
