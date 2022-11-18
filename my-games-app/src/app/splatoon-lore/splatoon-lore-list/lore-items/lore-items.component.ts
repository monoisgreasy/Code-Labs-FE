import { Component, OnInit, Input } from '@angular/core';

import { Lore } from '../../splatoon-lore.model';

@Component({
  selector: 'app-lore-items',
  templateUrl: './lore-items.component.html',
  styleUrls: ['./lore-items.component.css']
})
export class LoreItemsComponent implements OnInit {
  @Input() lore: Lore;

  constructor() { }

  ngOnInit(): void {
  }

}
