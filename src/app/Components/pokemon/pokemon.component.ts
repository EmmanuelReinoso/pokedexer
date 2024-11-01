import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
@Input({required:true}) solicitarImagen: string = '';
@Input() vida: number = 5; // Vida inicial de 5 unidades
@Input() resistencia: number = 5; // Resistencia inicial de 5 unidades
@Input() ataque: number = 5; // Ataque inicial de 5 unidades
@Input() defensa: number = 5; // Defensa inicial de 5 unidades
@Output() clickPokemon=new EventEmitter<number>(); 

anteriorPokemon(){
  this.clickPokemon.emit(-1);
}
siguientePokemon(){
  this.clickPokemon.emit(1);
}
}
