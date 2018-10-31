import { Component, OnInit } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Drag & Drop';
   public verschiebbar: Item[] = [];
   public verschoben: Item[] = [];

   ngOnInit(): void {
    this.verschiebbar = [
      {text: 'Item 1', color: 'red', left: 100, top: 100},
      {text: 'Item 2', color: 'green', left: 200, top: 100},
      {text: 'Item 3', color: 'yellow', left: 300, top: 100}
    ];
   }
}
