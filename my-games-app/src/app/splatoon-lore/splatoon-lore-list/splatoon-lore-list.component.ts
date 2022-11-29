import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Lore } from '../splatoon-lore.model';

@Component({
  selector: 'app-splatoon-lore-list',
  templateUrl: './splatoon-lore-list.component.html',
  styleUrls: ['./splatoon-lore-list.component.css']
})
export class SplatoonLoreListComponent implements OnInit {

  @Output() loreWasSelected = new EventEmitter<Lore>();
  lores: Lore[] = [
    new Lore('Test Run', 'This is simply a test run', 'data:image/jpeg;base64,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'),
    new Lore('Test Run', 'This is simply a test run', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYYyf2a5ly42ZcunPka9CC_gva3pjNC_dPig&usqp=CAU')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onLoreSelected(lore: Lore) {
    this.loreWasSelected.emit(lore);
  }

}
