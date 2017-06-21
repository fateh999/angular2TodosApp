import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos;
  textTodo;
  oldtextTodo;
  appState = 'default';

  constructor() { }

  ngOnInit() {
    this.todos = JSON.parse( localStorage.getItem('todos') );
  }

  addTodo(){
    if(this.textTodo!=null){
    this.todos.push({
      id:   Object.keys(this.todos).length == null ? 1 : Object.keys(this.todos).length + 1,
      text: this.textTodo
    });
    localStorage.setItem('todos', JSON.stringify(this.todos));
    //console.log(this.todos);
    console.log(localStorage.getItem('todos'));
  }
  }

  deleteTodo(id){
 var todoItems = JSON.parse(localStorage.getItem('todos'));
    for(var i=0;i<=todoItems.length;i++){
      if (todoItems[i].id == id) {
        todoItems.splice(i,1);
        break;
      }
    }
    localStorage.setItem('todos', JSON.stringify(todoItems));
    this.todos = JSON.parse( localStorage.getItem('todos') );
  }

  editTodo(todo){
    this.appState = 'edit';
    this.oldtextTodo = todo.text;
    this.textTodo = todo.text;
    console.log(this.appState);
  }

  updateTodo(){
    if(this.textTodo!=""){
    for(var i=0;i<=this.todos.length;i++){
      if (this.todos[i].text == this.oldtextTodo) {
        this.todos[i].text = this.textTodo;
        break;
      }
    }
    localStorage.setItem('todos', JSON.stringify(this.todos));
    console.log(this.textTodo);
  }
  }

  setState(){
    this.appState = 'default';
  }

}
