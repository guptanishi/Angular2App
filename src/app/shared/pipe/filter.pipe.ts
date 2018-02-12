import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filterQuery: any): any[] {
    if (!filterQuery) return items;
    return items.filter(function(item){
        return item.name.toLowerCase().includes(filterQuery.toLowerCase()) || item.address.city.toLowerCase().includes(filterQuery.toLowerCase()) ;
    })
 }
}