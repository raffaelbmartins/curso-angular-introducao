import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  
  currentPokemon = null;

  pokeList = [
    { name: 'Bulbassaur', number: 1 },
    { name: 'Charmander', number: 4 },
    { name: 'Squirtle', number: 7 },
    { name: 'Pikachu', number: 25 }
  ]

  constructor() { }

  ngOnInit() {
  }

  get pokemonSprite() {
    const number = ('000' + this.currentPokemon.number).slice(-3);
    return `//serebii.net/sunmoon/pokemon/${number}.png`;
  }

  selectedPokemon(pokemon) {
    this.currentPokemon = pokemon;
  }

}
