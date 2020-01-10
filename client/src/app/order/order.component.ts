import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
city='';
street='';
shipping_date='';
credit_card=0;

object = {
  city:'',
  street:'',
  shipping_date:'',
  credit_card:''
}


  constructor(private data: ProductService, private userdata: UsersService) { }

  ngOnInit() {
    this.userdata.user_as.subscribe((obj)=>this.object.city=(obj.city))
    this.userdata.user_as.subscribe((obj)=>this.object.street=(obj.street))
    // this.userdata.user_as.subscribe((obj)=>this.object.street=(obj.street))

    console.log(this.object.street);
  }
  
  dblclick(event){
    // this.city = this[$event.target.id];
    // alert('success!!!');
    var name = event.target.attributes.getNamedItem('ng-reflect-name').value;
    console.log(name);
    this[name]= this.object[name];
  };

}
