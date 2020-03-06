import { AbstractControl } from "@angular/forms";

export function PasswordValidator(control: AbstractControl): { [key: string]: boolean } | null
{
    const password1 =control.get('password1');
    const password2 = control.get('password2');

    if (password1.pristine || password2.pristine){
        return null;
    }

    return password1 && password2 && password1.value != password2.value ? { 'misMatch': true}:
    null;
}