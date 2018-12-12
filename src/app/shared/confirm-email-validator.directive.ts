import { Validator, NG_VALIDATORS, AbstractControl } from "@angular/forms";
import { Directive, Input } from "@angular/core";


@Directive({
    selector:'[passConfirmEqualValidator]',
    providers:[{
        provide: NG_VALIDATORS,
        useExisting: ConfirmEqualValidatorDirective,
        multi: true
    }]
})
export class ConfirmEqualValidatorDirective implements Validator{
    @Input() passConfirmEqualValidator : string;
    validate(confirmControl:AbstractControl): {[Key:string]:any} | null{
        const controlToCompare = confirmControl.parent.get(this.passConfirmEqualValidator);
        if(controlToCompare && controlToCompare.value !== confirmControl.value){
            return {'notEqual': true};
        }

        return null;
    }
}