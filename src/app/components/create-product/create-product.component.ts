import { Component } from '@angular/core';
import { ProductListService } from 'src/app/core/services/product-list.service';
import { ProductListComponent } from 'src/app/product-list/product-list.component';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {

  name:string = "";
  price:number = 0;
  

  constructor(private readonly productListService: ProductListService, private productListComponent:ProductListComponent) {
  }

  setName = (event:any) =>{
    this.name = event.target.value;
  }
  setPrice = (event:any) =>{
    this.price = event.target.value;
  }

  handleCreateProduct = (event:any) =>{
    document.getElementById("error-create")!.style.display = "none";
    event.preventDefault()
    const data ={
      name: this.name,
      price: this.price
    }

    this.productListService.createProduct(data).subscribe(
      (data) => {
        
      },
      error =>{ 
      document.getElementById("loading-create")!.style.display = "none";
      document.getElementById("error-create")!.style.display = "unset";
      console.error("An error occurred: ",error)
    },
    ()=>{
      document.getElementById("loading-create")!.style.display = "unset";

      location.reload();
      document.getElementById("create-product")!.style.display = "none";
    });

  }



  toggleCreateProduct = () =>{
    if(document.getElementById("create-product")!.style.display != "unset"){
      document.getElementById("create-product")!.style.display = "unset";
    }else{
      document.getElementById("create-product")!.style.display = "none";

    }
    
  }


}
