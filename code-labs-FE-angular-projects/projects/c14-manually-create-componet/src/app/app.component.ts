import { Component, ɵisListLikeIterable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'C14-manually-create-componet';
}

class ParagraphComponent ({
  selector: 'paragraph-list',
  templateUrl: './app.component.html',
  styleUrls: ['./paragraph.component.css']
})
