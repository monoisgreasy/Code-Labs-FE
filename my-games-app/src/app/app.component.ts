import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-games-app';

  loadedFeature = 'splatoon-lore'

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
