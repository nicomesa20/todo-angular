import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FilterEnum } from 'src/app/interfaces/filter.enum';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  animations: [
    trigger('fade', [

      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate(200, style({ opacity: 1, transform: 'translateY(0px)' }))
      ]),

      transition(':leave', [
        animate(200, style({ opacity: 0, transform: 'translateY(30px)' }))
      ]),

    ])
  ]
})
export class TodoListComponent implements OnInit {

  public todoControl: FormControl = new FormControl();

  public todos: Todo[];
  public beforeEditCache: string;
  public filterChoices = FilterEnum;
  public filter: FilterEnum;
  public anyRemainingModel: boolean;
  public idForTodo: number;

  constructor(
  ) { }

  ngOnInit() {
    this.anyRemainingModel = true;
    this.filter = FilterEnum.ALL;
    this.beforeEditCache = '';
    this.idForTodo = 4;
    this.todos = [
      {
        id: 1,
        title: 'Finish Angular Screencast',
        completed: false,
        editing: false,
      },
      {
        id: 2,
        title: 'Take over world',
        completed: false,
        editing: false,
      },
      {
        id: 3,
        title: 'One more thing',
        completed: false,
        editing: false,
      },
    ];
  }

  public get remaining(): number {
    return this.todos.filter(todo => !todo.completed).length;
  }
  public get atLeastOneCompleted(): boolean {
    return this.todos.filter(todo => todo.completed).length > 0;
  }

  public addTodo(): void {
    const title = this.todoControl.value as string;
    if (title.trim().length === 0) {
      return;
    }

    const newTodo: Todo = {
      id: this.idForTodo,
      title,
      completed: false,
      editing: false
    }
    this.todos.push(newTodo)
    this.todoControl.reset();

    this.idForTodo++;
  }

  public editTodo(todo: Todo): void {
    this.beforeEditCache = todo.title;
    todo.editing = true;
  }

  public doneEdit(todo: Todo): void {
    if (todo.title.trim().length === 0) {
      todo.title = this.beforeEditCache;
    }

    this.anyRemainingModel = this.anyRemaining();
    todo.editing = false;
  }

  public cancelEdit(todo: Todo): void {
    todo.title = this.beforeEditCache;
    todo.editing = false;
  }

  public deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  public clearCompleted(): void {
    this.todos = this.todos.filter(todo => !todo.completed);
  }

  public checkAllTodos(): void {
    this.todos.forEach(todo => todo.completed = (<HTMLInputElement>event.target).checked)
    this.anyRemainingModel = this.anyRemaining();
  }

  public anyRemaining(): boolean {
    return this.remaining !== 0;
  }

}

