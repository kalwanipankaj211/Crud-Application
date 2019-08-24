import { Component, OnInit } from '@angular/core';
import {Product} from './product';
import {ProductService} from './product.service';
import { clone } from 'lodash';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:Product[];
  productForm:boolean;
  editProductForm:boolean =false;
  newProduct:any={};
  isNewForm:boolean;
  editedProduct:any={};
  constructor(private _productService:ProductService) {

   }

  ngOnInit() {
    this.getProducts();
    this.productForm = false;
  }

  // getProducts()
  // {
  //   this.products=this._productService.getProducts();
  // }
  getProducts()
  {
    this.products=this._productService.getProductsFromData();
  }
  saveProduct(product:Product)
  {
    if(this.isNewForm)
    {
      this._productService.addProduct(product);
    }
    else
    {
      //update the existing Product
    }
    this.productForm=false;
  }
  showEditProductForm(product:Product)
  {
    if(!product)
    {
      this.productForm=false;
      return;
    }
    // this.productForm=true;
    // this.isNewForm=false;
    // this.newProduct=product;
    //uncomment this lines and coment below lines before update product
    this.editProductForm = true;
    this.editedProduct = clone(product);
    console.log("edited Product",this.editedProduct);
  }
  showAddProductForm()
  {
    //resets form if edited product
    if(this.products.length)
    {
      this.newProduct={};
    }
    this.productForm=true;
    this.isNewForm=true;
  }

  updateProduct()
  {
    this._productService.updateProduct(this.editedProduct);
    this.editProductForm =false;
    this.editedProduct={};
  }

  removeProduct(product:Product)
  {
    this._productService.deleteProduct(product);
  }

  cancelEdits()
  {
    this.editedProduct={};
    this.editProductForm=false;
  }
  cancelNewProduct()
  {
    this.newProduct={};
    this.productForm=false;
  }
}
