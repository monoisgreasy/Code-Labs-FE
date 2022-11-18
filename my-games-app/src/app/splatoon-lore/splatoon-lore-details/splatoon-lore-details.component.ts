import { Component, OnInit, Input } from '@angular/core';
import { Lore } from '../splatoon-lore.model';

@Component({
  selector: 'app-splatoon-lore-details',
  templateUrl: './splatoon-lore-details.component.html',
  styleUrls: ['./splatoon-lore-details.component.css']
})
export class SplatoonLoreDetailsComponent implements OnInit {

  @Input() lore: Lore;

  constructor() { }

  ngOnInit(): void {
  }

}
