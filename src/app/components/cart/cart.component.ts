import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public cartitems;
  constructor(private http: HttpService) {}
  getAllCartItems(): void {
    this.http.getAllCartItems().subscribe((data: any) => {
      console.log(data);
      this.cartitems = data.data;
      console.log(this.cartitems);
    });
  }
  addQTY(id, quantity): void {
    const payload = {
      productId: id,
      quantity,
    };
    this.http.addQty(payload).subscribe(() => {
      this.getAllCartItems();
    });
  }
  ngOnInit(): void {
    this.getAllCartItems();
  }
}