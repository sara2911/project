import { Component } from '@angular/core';
import { ProductListService } from '../product-list.service';
import { Product } from '../Dtos/ProductVM';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productList:Product[]=[];
  AllProduct:Product[]=[];
FilterValue:string=' ';
  category:string[]=["men's clothing","women's clothing","jewelery","electronics"];
constructor( private productListService:ProductListService){
  this.getProductList()
}
getProductList(){
  this.productListService.getProductList().subscribe((data:any)=>{
this.productList=data;
    this.AllProduct=data;
console.log('productList',this.productList)

  })
}
FilterProduct(){
  if(this.FilterValue!=' ')
  this.productList=this.AllProduct.filter((x)=>x.category==this.FilterValue);
  else this.productList=this.AllProduct;
}
}
