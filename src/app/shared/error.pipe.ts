import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({
  name: 'error'
})
export class ErrorPipe implements PipeTransform {

  transform(field: AbstractControl | null, error: string): boolean {
    if(field){
      return field.hasError(error) && field.touched
    }
    return false;
  }

}
