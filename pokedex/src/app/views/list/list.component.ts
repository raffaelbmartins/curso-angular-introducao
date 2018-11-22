import { PokeapiService } from './../../services/pokeapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent {
  
  nameFilter = '';
  currentPokemon = null;

  constructor(private pokeapiService: PokeapiService) {
    
  }

  get pokemonSprite() {
    const number = ('000' + this.currentPokemon.number).slice(-3);
    return `//serebii.net/sunmoon/pokemon/${number}.png`;
  }

  get pokemonList() {
    return this.pokeapiService.pokeList.filter(pokemon => {
      return pokemon.name.toLowerCase().indexOf(this.nameFilter.toLowerCase()) !== -1;
    });
  }

  selectedPokemon(pokemon) {
    this.currentPokemon = pokemon;
  }

  

}
