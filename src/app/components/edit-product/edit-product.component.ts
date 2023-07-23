import { Component, Input } from '@angular/core';
import { ProductListService } from '../../core/services/product-list.service';
import { ProductListComponent } from '../../product-list/product-list.component';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent{

  @Input() id:number;
  @Input() editName:string;
  @Input() editPrice:number;

  constructor(private readonly productListService: ProductListService, private productListComponent:ProductListComponent) {
  }



  setName = (event:any) =>{
    this.editName = event.target.value;
  }
  setPrice = (event:any) =>{
    this.editPrice = event.target.value;
  }

  handleEditProduct = (event:any) =>{
    document.getElementById("error-edit")!.style.display = "none";
    document.getElementById("loading-edit")!.style.display = "none";
    event.preventDefault()
    const data ={
      name: this.editName,
      price: this.editPrice
    }
    this.productListService.editProduct(this.id,data).subscribe(
      (data) => {
        
      },
      error =>{
      document.getElementById("loading-edit")!.style.display = "none";
      document.getElementById("error-edit")!.style.display = "unset";
      console.error("An error occurred: ",error)
    },
    ()=>{
    document.getElementById("loading-edit")!.style.display = "unset";
      document.getElementById("edit-product")!.style.display = "none";
      location.reload();
    }
    );

  }



  toggleEditProduct = () =>{
    if(document.getElementById("edit-product")!.style.display != "unset"){
      document.getElementById("edit-product")!.style.display = "unset";
    }else{
      document.getElementById("edit-product")!.style.display = "none";

    }
    
  }


}
