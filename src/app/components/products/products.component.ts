import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';@Component({
  selector: 'cart-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Array<object> = [];
  constructor(private http: HttpService) {}
  showMsg: boolean = false;

  getAllProducts(): void {
    this.http.getAllProducts().subscribe((data: any) => {
      console.log(data.data);
      this.products = data.data;
      console.log(this.products);
    });
  }
  addToCart( id, quantity): void {
    let payload = {
      productId: id,
      quantity,
    };
    this.http.addToCart(payload).subscribe(() => {
      this.showAlert();
      this.getAllProducts();
    });
  }
  ngOnInit(): void {
    this.getAllProducts();
  }
  showAlert() : void {
    if (this.showMsg) { 
      return;
    } 
    this.showMsg = true;
    setTimeout(()=> this.showMsg = false,1000); // hide the alert after 2.5s
  }
}