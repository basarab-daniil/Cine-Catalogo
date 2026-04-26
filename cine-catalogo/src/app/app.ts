import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MediaListComponent } from './components/media-list/media-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MediaListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('cine-catalogo');
}
