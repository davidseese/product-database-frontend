import { Component, Input } from '@angular/core';
import { ProductListService } from 'src/app/core/services/product-list.service';
import { ProductListComponent } from 'src/app/product-list/product-list.component';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent{

  @Input() id:number;

  constructor(private readonly productListService: ProductListService, private productListComponent: ProductListComponent) {

  }


  handleDelete = () =>{
    document.getElementById("loading-delete")!.style.display = "none";
    document.getElementById("error-delete")!.style.display = "none";
    this.productListService.deleteProduct(this.id).subscribe(
      
      (data) => {
        
      },
      error =>{
      document.getElementById("loading-delete")!.style.display = "none";
      document.getElementById("error-delete")!.style.display = "unset";
      console.error("An error occurred: ",error)
    },
    ()=>{
      document.getElementById("loading-delete")!.style.display = "unset";
      document.getElementById("delete-product")!.style.display = "none";
      
    location.reload();
    }
    )

  }

  handleNoDelete= () =>{
    document.getElementById("delete-product")!.style.display = "none";
  }
 

  toggleDeleteProduct = () =>{
    if(document.getElementById("delete-product")!.style.display != "unset"){
      document.getElementById("delete-product")!.style.display = "unset";
    }else{
      document.getElementById("delete-product")!.style.display = "none";
    }
    
  }

}
