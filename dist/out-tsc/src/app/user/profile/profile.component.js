"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_service_1 = require("../../services/auth.service");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, activatedRoute, authService) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.product = {};
        this.user = {};
        this.user$ = authService.getUserClaims().subscribe(function (data) {
            //this.product = data;
            _this.user = data;
        });
        console.log(this.user$.UserName + 'user$');
        //console.log(this.user.UserName + 'user$');
        //getting id of product from firedb
        //  this.productId = this.activatedRoute.snapshot.paramMap.get('id');//we use snapshot bcoz no previous or next button implemented on this component
        //  if(this.productId){
        //   this.productService.getProductById(this.productId).take(1).subscribe(p=>{
        //     this.product = p
        //   });//'take' is an operator that takes one value from the observable and then unsubscribe the observable.
        // }
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.save = function (product) {
        if (this.productId) {
            //this.productService.updateProduct(this.productId, product);
        }
        else {
            //this.productService.create(product);
        }
        //this.router.navigate(['/admin/products']);
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            auth_service_1.AuthService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map