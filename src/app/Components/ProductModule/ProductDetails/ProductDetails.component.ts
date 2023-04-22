import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Models/IProduct';
import { ProductAPIService } from 'src/app/Services/product-api.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-ProductDetails',
  templateUrl: './ProductDetails.component.html',
  styleUrls: ['./ProductDetails.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  EnvironmentLink=environment.APIBaseURL;
  ProductID:number=0;
  CurrentProduct:IProduct |undefined=undefined;
  constructor(private ProductAPIService:ProductAPIService
            , private activatedRoute:ActivatedRoute
    ) { 
      this.ProductID=this.activatedRoute.snapshot.params['pid'];
      ;     
  }

  ngOnInit() {
   this.ProductAPIService.getProductByID(this.ProductID).subscribe(product=>{
     this.CurrentProduct=product;
   });
}
}
