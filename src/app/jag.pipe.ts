import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jag'
})
export class JagPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.length;
  }

}
