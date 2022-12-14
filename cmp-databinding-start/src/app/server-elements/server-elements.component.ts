import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-elements',
  templateUrl: './server-elements.component.html',
  styleUrls: ['./server-elements.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementsComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;


  constructor() {
    console.log('constuctor called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Text Content of Paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!')
  }

  ngAfterContentInit(): void {
      console.log('ngAfterContentInit called!')
      console.log('Text Content of Paragraph: ' + this.paragraph.nativeElement.textContent);

  }

  ngAfterContentChecked(): void {
      console.log('ngAfterContentChecked called!')
  }

  ngAfterViewInit(): void {
      console.log('ngAfterVeiwInit checked!')
      console.log('Text Content: ' + this.header.nativeElement.textContent);

  }

  ngAfterViewChecked(): void {
      console.log('ngAfterViewChecked called!')
  }

  ngOnDestroy(): void {
      console.log('ngOnDestroy called!')
  }

}
