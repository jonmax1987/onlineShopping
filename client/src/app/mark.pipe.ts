import { Pipe, PipeTransform } from '@angular/core';
import { ProductService } from './services/product.service';

@Pipe({
  name: 'mark'
})
export class MarkPipe implements PipeTransform {
  constructor(private data: ProductService) { }

  transform(values: any[], term: string): any {
    console.log(values);
    
    if(this.data.orderFun() == true) {
      return values.filter(item => item.name.indexOf(term) !== -1);
    }else{
        return values;
    }
  }
  

}
