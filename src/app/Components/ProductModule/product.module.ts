import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddNewProductComponent } from './AddNewProduct/AddNewProduct.component';
import { ProductDetailsComponent } from './ProductDetails/ProductDetails.component';
import { ProductsComponent } from './Products/Products.component';
import { MatDialogModule } from '@angular/material/dialog';
const routes:Routes=[
  {path:'', redirectTo:'/Product/Order', pathMatch:'full'},
  {path: 'AddProduct', component:AddNewProductComponent},
  {path:'Details/:pid', component:ProductDetailsComponent},
  {path:'AddProduct',component:AddNewProductComponent},
  {path:'EditProduct/:pid',component:AddNewProductComponent},
  {path:'Products',component:ProductsComponent}
]

@NgModule({
  declarations: [
    ProductsComponent,
    AddNewProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
