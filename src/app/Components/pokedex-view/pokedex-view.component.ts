import { Component } from '@angular/core';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { GraficoComponent } from '../grafico/grafico.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokedex-view',
  standalone: true,
  imports: [PokemonComponent,GraficoComponent, FormsModule],
  templateUrl: './pokedex-view.component.html',
  styleUrl: './pokedex-view.component.css'
})
export class PokedexViewComponent {
  PokemonImagen:string='https://raw.githubusercontent.com/PokeAPI/sprites/6e5b8ac354ddc347104840cbd14ad6e0b2fdb551/sprites/pokemon/0.png'
  pokemonActual: number = 0; // Empieza con Articuno (número 144)
  currentPokemonHealth: number = 100;
  avanzarPokemon() {
    this.pokemonActual++;
    this.PokemonImagen = `https://raw.githubusercontent.com/PokeAPI/sprites/6e5b8ac354ddc347104840cbd14ad6e0b2fdb551/sprites/pokemon/${this.pokemonActual}.png`;
  }
  
  handlePokemon(event:number){
    this.pokemonActual+=event
    this.PokemonImagen= 'https://raw.githubusercontent.com/PokeAPI/sprites/6e5b8ac354ddc347104840cbd14ad6e0b2fdb551/sprites/pokemon/'
+this.pokemonActual+'.png'
  }
  /*mostrar la imagen en la ui*/
  buscarPokemon() {
    // Lógica para buscar el Pokémon usando pokemonId
    this.obtenerImagenPokemon(this.pokemonActual); 
    // Actualizar PokemonImagen con la imagen del Pokémon encontrado
  }
  obtenerImagenPokemon(id: number) {
    // URL base para las imágenes de Pokémon
    const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';
  
    // Construye la URL completa de la imagen
    this.PokemonImagen = `${baseUrl}${id}.png`;
  }

  getRandomPokemon() {
    // Generate a random Pokemon ID within the desired range
    this.pokemonActual = Math.floor(Math.random() * 809) + 1; // Adjust range as needed

    // Update the image using the obtained ID
    this.obtenerImagenPokemon(this.pokemonActual);
  }
  
  isShiny: boolean = false; // Variable para controlar si el Pokémon es shiny

  toggleShiny() {
    this.isShiny = !this.isShiny;
    this.updatePokemonImage();
  }

  updatePokemonImage() {
    const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
    const shinyUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/';  

    const extension = '.png';

    this.PokemonImagen = `${this.isShiny ? shinyUrl : baseUrl}${this.pokemonActual}${extension}`;
  }
}


