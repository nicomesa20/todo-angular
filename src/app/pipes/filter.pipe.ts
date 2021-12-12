import { Pipe, PipeTransform } from '@angular/core';
import { FilterEnum } from '../interfaces/filter.enum';
import { Todo } from '../interfaces/todo';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Todo[], filter: number): any {
    if (!value || !filter) return value;

    if (filter === FilterEnum.ALL) {
      return value;
    } else if (filter === FilterEnum.ACTIVE) {
      return value.filter(todo => !todo.completed);
    } else if (filter === FilterEnum.COMPLETED) {
      return value.filter(todo => todo.completed);
    }
    return value;
  }

}
