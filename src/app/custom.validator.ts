import { AbstractControl, ValidationErrors } from '@angular/forms'
 
export function restrictSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { 'restrictSpace': true} ;
    }      
    return null ;
}