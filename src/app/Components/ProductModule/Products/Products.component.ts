import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { IProduct } from 'src/app/Models/IProduct';
import { Store } from 'src/app/Models/Store';
import { DiscountOffers } from 'src/app/Models/DiscountOffers';
import { ProductAPIService } from 'src/app/Services/product-api.service';

@Component({
  selector: 'app-Products',
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.scss']
})
export class ProductsComponent implements OnInit, OnChanges {

  Discount:DiscountOffers;
  store:Store;
  ProductListForCategory: IProduct[]=[];

  constructor(
    private ProductAPIService: ProductAPIService
    ) { 
    this.Discount=DiscountOffers.Dicount10;
    this.store=new Store("Food Mart"
    ,"https://mpng.subpng.com/20180422/diw/kisspng-computer-icons-shopping-cart-encapsulated-postscri-5add18ef692f50.1824256415244392794309.jpg");
    this.ProductAPIService.
    GetAllProducts().subscribe(productList=>{
      this.ProductListForCategory= productList })
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.ProductAPIService.GetAllProducts().subscribe(productList=>{
      this.ProductListForCategory= productList });
  }
  ngOnInit() {
    this.ProductAPIService.
    GetAllProducts().subscribe(productList=>{
      this.ProductListForCategory= productList });
  }
  DeleteProduct(id:number)
  {
    if(confirm("Are you sure to delete This Product")) {
      this.ProductAPIService.deleteProduct(id).subscribe(product=>{
        this.ProductAPIService.GetAllProducts().subscribe(productlist=>
          {
            this.ProductListForCategory=productlist
          });
      });
    }
  }
  
}
