import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Lore } from '../../splatoon-lore.model';

@Component({
  selector: 'app-lore-items',
  templateUrl: './lore-items.component.html',
  styleUrls: ['./lore-items.component.css']
})
export class LoreItemsComponent implements OnInit {
  @Input() lore: Lore;
  @Output() loreSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
    this.loreSelected.emit();
  }

}
