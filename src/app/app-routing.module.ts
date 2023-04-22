import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Home/Home.component';
import { MainLayoutComponent } from './Components/MainLayout/MainLayout.component';
import { PathNotExistComponent } from './Components/PathNotExist/PathNotExist.component';

const routes: Routes = [
  {path: '', component:MainLayoutComponent, children: [
    {path:'', redirectTo:'/Home', pathMatch:'full'},
    {path:'Home', component:HomeComponent},
    {
      path: 'Product',
      loadChildren: () => import('./Components/ProductModule/product.module').then(m => m.ProductModule)
    },
  ]},

    {path:'**',component:PathNotExistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
