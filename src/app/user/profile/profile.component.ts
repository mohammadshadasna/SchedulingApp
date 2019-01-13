import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { UserService } from "../../services/user.service";
import { NgForm } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  user$;
  product = {};
  user = {};
  productId;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    public userService: UserService,
    private toasterService : ToastrService
  ) //private productService : ProductService
  {
    this.user$ = userService.getUserClaims().subscribe(data => {
      //this.product = data;
      this.user = data;
    });
    console.log(this.user$.UserName + "user$");
    //console.log(this.user.UserName + 'user$');
    //getting id of product from firedb
    //  this.productId = this.activatedRoute.snapshot.paramMap.get('id');//we use snapshot bcoz no previous or next button implemented on this component
    //  if(this.productId){
    //   this.productService.getProductById(this.productId).take(1).subscribe(p=>{
    //     this.product = p
    //   });//'take' is an operator that takes one value from the observable and then unsubscribe the observable.
    // }
  }

  ngOnInit() {}

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
      this.userService.loggedInUser = {
        Id: null,
        FirstName : "",
        LastName : "",
        UserName : "",
        Email : ""
      };
    }
  }

  onSubmit(form:NgForm){
    if(form.value.Id == null){
    this.userService.updateUser(form.value).subscribe((data : any)=>{
      this.resetForm(form);
      this.toasterService.success('Record Updated Succesfully',"Profile Record",{
        positionClass: "toast-top-left"});
    });
  }
  else{
    
  }
  }

  save(product) {
    if (this.productId) {
      //this.productService.updateProduct(this.productId, product);
    } else {
      //this.productService.create(product);
    }
    //this.router.navigate(['/admin/products']);
  }

  // delete(){
  //   // if(confirm('Are you sure you want to delete this product?')){
  //   //   this.productService.deleteProduct(this.productId);
  //   //   this.router.navigate(['/admin/products']);
  //   // }
  //   if(!confirm('Are you sure you want to delete this product?')) return;
  //     this.productService.deleteProduct(this.productId);
  //     this.router.navigate(['/admin/products']);

  // }
}
