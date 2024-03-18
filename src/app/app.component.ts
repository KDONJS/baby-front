import { Component, ViewChild, ElementRef, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  ngAfterViewInit() {
    this.playAudio();
  }

  playAudio() {
    const player = this.audioPlayer.nativeElement;
    player.volume = 0.5; // Ajusta el volumen al 50%
    player.play().catch(error => console.error('La auto reproducción falló', error));
  }
}
