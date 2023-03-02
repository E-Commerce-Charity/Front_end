import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { userService } from '../Services/user.service';

export function emailExistsValidator(
  userService: userService
): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const email = control.value;
    const res = userService.checkEmailExists(email);
    console.log(res);
    return userService.checkEmailExists(email)
      ? of({
          emailExists: true,
        })
      : of(null);
  };
}
