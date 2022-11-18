import { Component, OnInit } from '@angular/core';
import { Lore } from './splatoon-lore.model';

@Component({
  selector: 'app-splatoon-lore',
  templateUrl: './splatoon-lore.component.html',
  styleUrls: ['./splatoon-lore.component.css']
})
export class SplatoonLoreComponent implements OnInit {

  selectedLore: Lore

  constructor() { }

  ngOnInit(): void {
  }

}
