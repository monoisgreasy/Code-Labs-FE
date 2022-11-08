import { Component, OnInit } from '@angular/core';
import { Lore } from '../splatoon-lore.model';

@Component({
  selector: 'app-splatoon-lore-list',
  templateUrl: './splatoon-lore-list.component.html',
  styleUrls: ['./splatoon-lore-list.component.css']
})
export class SplatoonLoreListComponent implements OnInit {
  lores: Lore[] = [
    new Lore('Test Run', 'This is simply a test run', 'https://cdn.imgbin.com/22/16/17/imgbin-splatoon-2-squid-wii-u-video-game-others-PnC2bxk91bAMVivUyWPGygPjj.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
