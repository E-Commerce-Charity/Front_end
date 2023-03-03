import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { CartService } from '../../Services/cart.service';
import { OrderService } from '../../Services/order.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  allProducts: any;
  productId: any;
  sold: any;
  cartId: any;
  constructor(
    private service: CartService,
    private productService: ProductService,
    private orderService: OrderService
  ) {}

  // cartProducts: any[] = [
  //   { title: 'product1', price: 150, quantity: 5 },
  //   { title: 'product2', price: 200, quantity: 1 },
  //   { title: 'product3', price: 100, quantity: 3 },
  //   { title: 'product4', price: 100, quantity: 3 },
  //   { title: 'product5', price: 100, quantity: 3 },
  //   { title: 'product6', price: 100, quantity: 3 },
  // ];
  cartProducts: {
    product: String;
    quantity: Number;
    price: Number;
    title: String;
  }[] = []; ////////////
  // productId: any = '63e9ef19bb8ac8b5d36bce33';
  total: any;
  totalQuantity: number = 0;
  itemsNumber: any;
  ngOnInit(): void {
    this.getAllProducts();
    this.getCartProducts(); /////////////////
    this.getCartTotal();
    this.getTotalQuantity();
  }

  getProductById(id: any) {
    return this.productService.getProductById(id).subscribe((res: any) => {
      this.sold = res.data.sold;
      console.log('to get sold', this.sold);
    });
  }
  getAllProducts() {
    return this.productService.getAllProducts(500).subscribe((res: any) => {
      this.allProducts = res.data;
      console.log(this.allProducts);
    });
  }

  updateSold(id: any, sold: any) {
    return this.productService.updateSold(id, sold).subscribe((res: any) => {
      console.log('sold', res);
    });
  }

  getCartProducts() {
    this.service.getCart().subscribe((res: any) => {
      console.log(res);
      this.cartId = res.data._id;
      console.log('cartId:   ', this.cartId);

      this.itemsNumber = res.numOfCartItems;
      console.log(this.itemsNumber);
      this.cartProducts = res.data.cartItems;
      console.log('cartProducts', this.cartProducts);
      this.getCartTotal();
      this.getTotalQuantity();
    });
  }

  getCartTotal() {
    this.total = 0;
    for (let x in this.cartProducts) {
      this.total +=
        +this.cartProducts[x].price * +this.cartProducts[x].quantity;
    }
  }
  getTotalQuantity() {
    this.totalQuantity = 0;
    for (let x in this.cartProducts) {
      this.totalQuantity += +this.cartProducts[x].quantity;
    }
  }

  addAmount(item: any) {
    return this.productService
      .getProductById(item.product)
      .subscribe((res: any) => {
        this.sold = res.data.sold;
        if (this.sold + item.quantity < res.data.quantity) {
          this.service.addToCart(item.product).subscribe((res: any) => {
            console.log(res);
            this.getCartProducts();
            this.getCartTotal();
          });
        }
      });
  }
  minusAmount(item: any) {
    if (item.quantity > 0) {
      this.service.reduceQuantity(item.product).subscribe((res: any) => {
        console.log(res);
        this.getCartProducts();
        this.getCartTotal();
      });
    } else {
      item.quantity = 0;
    }
  }
  detectChange() {
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.getCartTotal();
    this.getTotalQuantity();
    this.getCartProducts();
  }

  deleteProduct(item: any) {
    this.service.deleteProduct(item.product).subscribe((res: any) => {
      console.log(res);
      this.getCartProducts();
      this.getCartTotal();
    });
  }
  clearCart() {
    this.service.clearCart().subscribe((res: any) => {
      console.log(res);
    });
  }

  orderMeals() {
    return this.orderService.createOrder(this.cartId).subscribe((res: any) => {
      console.log(res);
    });
  }

  orderMoney() {}
}
