import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../core/services/product-list.service';
import { ProductInterface } from './productInterface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: ProductInterface[];
  filteredProducts: ProductInterface[];
  id: number;
  editName:string;
  editPrice:number;
  filter:string;
  constructor(private readonly productListService: ProductListService) {
  }
  ngOnInit() {
    this.loadProducts()

  }


  loadProducts = () => {
    this.productListService.getProducts().subscribe((data) => {
      document.getElementById("loading-products")!.style.display = "none";
      this.products = data;
      this.filteredProducts = this.products;

    }, 
      error =>{
        document.getElementById("loading-products")!.style.display = "none";
        
        document.getElementById("error-load")!.style.display = "unset";        
        console.error("An error occurred: ",error)
    })
  }

  toggleCreateProduct = () =>{
    if(document.getElementById("create-product")!.style.display != "unset"){
      document.getElementById("create-product")!.style.display = "unset";
    }else{
      document.getElementById("create-product")!.style.display = "none";
    }
    
  }

  toggleDeleteProduct = () =>{
    if(document.getElementById("delete-product")!.style.display != "unset"){
      document.getElementById("delete-product")!.style.display = "unset";
    }else{
      document.getElementById("delete-product")!.style.display = "none";
    }
  }

  toggleEditProduct = () =>{
    if(document.getElementById("edit-product")!.style.display != "unset"){
      document.getElementById("edit-product")!.style.display = "unset";
    }else{
      document.getElementById("edit-product")!.style.display = "none";

    }
    
  }
  setProduct(id:number,name:string, price:number){
    this.id = id;
    this.editName = name;
    this.editPrice = price;
  }
  setId =(id:number) =>{
    this.id = id;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredProducts = this.products;
    }
  
    this.filteredProducts = this.products.filter(
      product => product?.name.toLowerCase().includes(text.toLowerCase())
    );
  }

}
