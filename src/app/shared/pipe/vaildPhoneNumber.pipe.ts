import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterPhone'
})
export class FilterPhonenumberPipe implements PipeTransform {
    transform(value){
        let isnum = /^\d+$/.test(value);
        if(isnum){
            return value;
        }else{
            return "NA";
        }
    }
}   