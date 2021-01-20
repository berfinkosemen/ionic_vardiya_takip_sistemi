import { Pipe, PipeTransform } from '@angular/core';
import { UserTasks } from '../model/tasks.model'
@Pipe({
  name: 'usertasks'
})
export class UserTasksPipe implements PipeTransform {

  transform(datas: UserTasks[], text: string): UserTasks[] {
    if( text.length === 0) { return datas; }

    if(text === '0'){
      text = 'false';
    } else if (text === '1'){
      text = 'true';
    }

    return datas.filter( data => {
      return data.isChecked.includes(text);
    });
  }

}
