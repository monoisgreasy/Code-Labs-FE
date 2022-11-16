import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splatoon-details',
  templateUrl: './splatoon-details.component.html',
  styleUrls: ['./splatoon-details.component.css']
})
export class SplatoonDetailsComponent implements OnInit {
  details = [];

  constructor() { }

  ngOnInit(): void {
  }

}
