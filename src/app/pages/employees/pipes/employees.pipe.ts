import { Pipe, PipeTransform } from '@angular/core';
import { Employees } from '../model/employees.model'
@Pipe({
  name: 'employees'
})
export class EmployeesPipe implements PipeTransform {

  transform(datas: Employees[], text: string): Employees[] {
    if( text.length === 0) { return datas; }

    text = text.toLocaleLowerCase();

    return datas.filter( data => {
      return data.fullname.toLocaleLowerCase().includes(text);
    });
  }

}
