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

  loadTasks(){
    const storedTasks = localStorage.getItem("tasks");
    if(storedTasks){
      this.tasks = JSON.parse(storedTasks);
    }
  }
  saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(this.tasks))
  }
  addTask(){
    this.tasks.push({name: this.newTaskName, done: false});
    this.newTaskName = '';
    this.saveTasks();
  }
  deleteTask(task: any){
    this.tasks = this.tasks.filter(t => t !== task);
    this.saveTasks();
  }
  ngOnInit(){
    this.loadTasks();
  }
}