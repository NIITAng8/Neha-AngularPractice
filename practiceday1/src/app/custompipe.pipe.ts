import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: number,param:number): number {
    console.log(value)
    if (value) {
      let convertednum: number=0;
      let numarr = value.toString().split("");
      if(numarr.length==param){
        numarr.forEach(e =>
          convertednum += Math.pow(parseInt(e), numarr.length))
      }
      return convertednum;
    }
  }

}
