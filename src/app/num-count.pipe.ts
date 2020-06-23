import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numCount'
})
export class NumCountPipe implements PipeTransform {

  transform(value: any): string {
    if (value === 0) {
      return ('NIL');
    } else {
      return value;
   }
  }

}
