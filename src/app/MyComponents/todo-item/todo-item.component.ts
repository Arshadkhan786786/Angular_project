import { Component, Input , Output,EventEmitter} from '@angular/core';
import { Todo } from '../../Todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo:Todo;
  @Input() i:number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();
  constructor(){}
  onClick(todo:Todo){

    this.todoDelete.emit(todo);
    console.log("Clicked!");
  }
  onCheckBoxClick(todo:Todo){
    this.todoCheckBox.emit(todo);
  }

}
