import { Component, OnInit } from '@angular/core';
import {Product} from './product.model';
import { Store, select } from '@ngrx/store';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  isCodeDisplayed: boolean;
  products: Product[];
  constructor(private store: Store<any>) { }

  ngOnInit() {
    //this.isCodeDisplayed = true;
    this.store.select('app').subscribe( (product) => {
      if (product) {
        this.isCodeDisplayed = product.showProd;
        console.log("i am in subscribe asasdadasdad")
      }
      console.log('getting the state here as ', product)
    });
    this.products = [
      { id: 'jivhhb98',
        name: 'Pen',
        quantity: 5
      },
      {
        id: 'KJHG5678',
        name: 'paper',
        quantity: 3
      },
      { id: '7OIUH&8',
        name: 'Juice',
        quantity: 2
      },
      { id: '2XCVFG44',
        name: 'Diary',
        quantity: 78
      }
    ]; 
  }

  displayCodeChanged(checked: boolean) {
    this.store.dispatch({
      type: 'SHOW_PRODUCT_CODE',
      payload: checked
    });
  }
}
