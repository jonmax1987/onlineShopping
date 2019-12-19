import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  product = [];

  constructor(private data : ProductService, private router:Router) { }

  ngOnInit() {
    this.data.product_as.subscribe((obj)=>this.product=obj)
  }

}
