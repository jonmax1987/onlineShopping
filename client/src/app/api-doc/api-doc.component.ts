import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-doc',
  templateUrl: './api-doc.component.html',
  styleUrls: ['./api-doc.component.css']
})
export class APIDocComponent implements OnInit {
  object;
  description;
  Method_path;
  Request_Response;

  constructor() { }

  ngOnInit() {
    this.getApi();
  }

  getApi() {
    fetch(`http://localhost:3000/api`)
      .then((res) => res.json())
      .then((res) => {
        this.object = res.data;
        console.log(res.data);
      }), (error) => {
        console.log("error:", error);
      }
  };
}
