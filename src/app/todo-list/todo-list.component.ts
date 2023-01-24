import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  tasks = [
    { name: 'Estudar Angular', done: true }
  ];
  newTaskName = '';

  addTask(){
    this.tasks.push({name: this.newTaskName, done: false});
    this.newTaskName = '';
  }

  deleteTask(task: any){
    this.tasks = this.tasks.filter(t => t !== task);
  }
}