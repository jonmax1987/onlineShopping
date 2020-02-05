import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  token;
  constructor(private data : ProductService, private router: Router) { }

  ngOnInit() {
    this.data.token_as.subscribe((str)=>this.token=str);
    if(this.token == ''){
      this.router.navigate(['/firstpage']);
    }
   }
   
  private _opened: boolean = true;

  private _toggleSidebar() {
    this._opened = !this._opened;
  }
  title = 'sidebar';

}
