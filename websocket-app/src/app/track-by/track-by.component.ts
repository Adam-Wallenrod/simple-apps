import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-by',
  templateUrl: './track-by.component.html',
  styleUrls: ['./track-by.component.css']
})
export class TrackByComponent implements OnInit {


  collection: Array<object> = [
    {id: 1, name: 'header1'},
    {id: 2, name: 'header2'},
    {id: 3, name: 'header3'},
    {id: 4, name: 'header4'}
    ];

  constructor() { }

  ngOnInit() {
  }



  getDataFromServer() {
    return [
      {id: 1, name: 'header1'},
      {id: 2, name: 'header2'},
      {id: 3, name: 'header3'},
      {id: 4, name: 'header4'},
      {id: 5, name: 'header5'}
    ];
  }


  getItems() {
    this.collection = this.getDataFromServer();
  }

  trackByFn(index, header) {
    const uniqueId = header.name + '-' + index;
    return uniqueId;
  }

}
