import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dndProj';
  orderableLists = [['Item 1a', 'Item 2a', 'Item 3a'], ['Item 1b', 'Item 2b', 'Item 3b']];
  orderableLists1 = ['Item 1c', 'Item 2c', 'Item 3c'];
  sourceItems=['one', 'two', 'three','four'];
  targetItems=[];
  nestedLists = [
    {
      "label": "Item 1",
      "children": []
    },
    {
      "label": "Item 2",
      "children": [
        {
          "label": "Item 2a",
          "children": []
        },
        {
          "label": "Item 2b",
          "children": []
        },
        {
          "label": "Item 2c",
          "children": []
        }
      ]
    },
    {
      "label": "Item 3",
      "children": [
        {
          "label": "Item 3a",
          "children": []
        },
        {
          "label": "Item 3b",
          "children": []
        },
        {
          "label": "Item 3c",
          "children": ["hello"]
        }
      ]
    }
  ]
}
