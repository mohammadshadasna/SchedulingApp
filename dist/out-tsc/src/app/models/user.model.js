"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(UserName, Password, ConfirmPassword, Email, FirstName, LastName, 
    //public Roles : string[]
    Roles) {
        this.UserName = UserName;
        this.Password = Password;
        this.ConfirmPassword = ConfirmPassword;
        this.Email = Email;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Roles = Roles;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.model.js.map