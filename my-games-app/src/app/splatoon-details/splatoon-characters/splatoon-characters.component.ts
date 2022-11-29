import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Details } from 'src/app/shared/details.model';

@Component({
  selector: 'app-splatoon-characters',
  templateUrl: './splatoon-characters.component.html',
  styleUrls: ['./splatoon-characters.component.css']
})
export class SplatoonCharactersComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() detailAdded = new EventEmitter<Details>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    const detailName = this.nameInputRef.nativeElement.value;
    const detailAmount = this.amountInputRef.nativeElement.value;
    const newDetail = new Details(detailName, detailAmount);
    this.detailAdded.emit(newDetail);
  }

}
