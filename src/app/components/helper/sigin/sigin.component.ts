import { Component } from '@angular/core';
import { BabyApiService } from 'src/app/servicios/baby-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent {
  llaveAcceso: string = '';

  constructor(private babyService: BabyApiService,
              private router: Router) {}

  realizarLogin(): void {
    this.babyService.obtenerDatos().subscribe({
      next: (data) => {
        // Encontrar el primer objeto en el arreglo que coincida con la llaveAcceso ingresada
        const usuarioValido = data.find((usuario: any) => usuario.llaveAcceso === this.llaveAcceso);
        if(usuarioValido) {
          localStorage.setItem('llaveAcceso', this.llaveAcceso);
          this.router.navigate(['/inicio']);
        } else {
          console.log("Acceso denegado");
        }
      },
      error: (error) => {
        console.error("Error al obtener datos", error);
      }
    });
  }
}