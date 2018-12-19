import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public todo: Todo[] = [
    { name: 'Task 1', date: new Date().toString() },
    { name: 'Task 2', date: new Date().toString() }
  ];

  public done: Todo[] = [
    { name: 'Task 3', date: new Date().toString() },
    { name: 'Task 4', date: new Date().toString() }
  ];

  public cancelled: Todo[] = [];

  drop(event: CdkDragDrop<Todo[]>) {
    console.log(event);

    if (event.previousContainer === event.container) {

      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addItem(list: string, todo: string) {
    if (list === 'todo') {
      this.todo.push({ name: todo, date: new Date().toString() });
    } else {
      this.done.push({ name: todo, date: new Date().toString() });
    }
  }

}
