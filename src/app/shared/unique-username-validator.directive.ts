import { Directive } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { LoginService } from '../login.service'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[uniqueUsername]'
})
export class UniqueUsernameValidatorDirective implements AsyncValidator {

  constructor(private LoginService: LoginService) { }

  validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.LoginService.getUserByUsername(c.value).pipe(
      map(users => {
        return users && users.length > 0 ? { 'uniqueUsername': true } : null;
      })
    )
  }

}
