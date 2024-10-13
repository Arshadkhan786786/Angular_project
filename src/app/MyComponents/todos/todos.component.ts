import { Component } from '@angular/core';
import {Todo} from '../../Todo'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  localItem:string|null;
  todos:Todo[];
  constructor(){
    if (typeof window !== 'undefined') {
      this.localItem = localStorage.getItem("todos");
    }
    if (this.localItem==null){
      this.todos=[];
    }else{
      this.todos=JSON.parse(this.localItem);
    }
    
  }
  deleteTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1); 
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  toggleTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active=!this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
}
