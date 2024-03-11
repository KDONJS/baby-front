import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BabyApiService } from 'src/app/servicios/baby-api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
  llaveAcceso: string  = '';
  datos: any;

  constructor(private babyServicio: BabyApiService, private router: Router) {}

  ngOnInit(): void {
    const currentNavigation = this.router.getCurrentNavigation();
    if (currentNavigation?.extras.state) {
      const state = currentNavigation.extras.state as { llaveAcceso: string }; 
      if (state.llaveAcceso) { 
        this.llaveAcceso = state.llaveAcceso;
      }
    } else {
      // Intenta recuperar de localStorage si el estado no está disponible
      const storedKey = localStorage.getItem('llaveAcceso');
      if (!storedKey) {
        this.router.navigate(['/login']);
      }
      if (storedKey) {
        this.llaveAcceso = storedKey;
      }
    }
    
    this.cargarDatos();
  }

  cargarDatos(): void {
    // Asegúrate de que llaveAcceso tiene un valor antes de hacer la llamada
    if (this.llaveAcceso) {
      this.babyServicio.obtenerDatos().subscribe({
        next: (respuesta: any[]) => {
          // Filtra los datos basado en la llave de acceso
          this.datos = respuesta.filter(baby => baby.llaveAcceso === this.llaveAcceso);
        },
        error: (error: any) => {
          console.error('Hubo un error:', error);
        },
        complete: () => console.log('Carga completada')
      });
    } else {
      console.log('No se ha proporcionado llaveAcceso');
    }
  }

}
