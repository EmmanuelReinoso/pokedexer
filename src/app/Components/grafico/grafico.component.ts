import { CommonModule } from '@angular/common';
import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grafico.component.html',
  styleUrl: './grafico.component.css'
})
export class GraficoComponent {
  @Input() vida: number = 5;
  @Input() resistencia: number = 5;
  @Input() ataque: number = 5;
  @Input() defensa: number = 5;

  corazones: string[] = [];
  rayos: string[] = [];
  punos: string[] = [];
  escudos: string[] = [];

  ngOnInit() {
    this.crearArraysDeIconos();
  }

  crearArraysDeIconos() {
    this.corazones = Array(this.vida).fill('❤️'); // ❤️
    this.rayos = Array(this.resistencia).fill('⚡'); // ⚡
    this.punos = Array(this.ataque).fill('✊'); // ✊
    this.escudos = Array(this.defensa).fill('🛡️'); // 🛡️
  }
}
//@Input({required:true}) solicitarImagen: string = '';//
