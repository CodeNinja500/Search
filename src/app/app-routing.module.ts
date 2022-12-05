import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { UniversitiesComponent } from './components/universities/universities.component';
import { ProductsComponentModule } from './components/products/products.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { UniversitiesComponentModule } from './components/universities/universities.component-module';
import { UniversitiesServiceModule } from './services/universities.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'product-search', component: ProductsComponent }, { path: 'search-universities', component: UniversitiesComponent }]), ProductsComponentModule, ProductsServiceModule, UniversitiesComponentModule, UniversitiesServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
