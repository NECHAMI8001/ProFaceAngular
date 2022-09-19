import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bool'
})
export class BoolPipe implements PipeTransform {

  transform(value: boolean) {

    if (value==true)
    return 'v';//V
    else
    return '×';//X

  }

}
