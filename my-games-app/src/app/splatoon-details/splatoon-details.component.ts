import { Component, OnInit } from '@angular/core';

import { Details } from '../shared/details.model';

@Component({
  selector: 'app-splatoon-details',
  templateUrl: './splatoon-details.component.html',
  styleUrls: ['./splatoon-details.component.css']
})
export class SplatoonDetailsComponent implements OnInit {
  details: Details[] = [
    new Details('Inklings have a bridge above their noses that connects their eyes!', 0),
    new Details('Octolings have no bridges above their noses!', 0),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onDetailAdded(detail: Details) {
    this.details.push(detail);
  }

}
