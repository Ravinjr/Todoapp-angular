import { Component, TemplateRef } from '@angular/core';
import { Todo } from '../class/todo';
import { NgModel } from '@angular/forms'; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todoValue:string = '';

  todoList :Todo[] = [
    {
      content:"Todo 1",
      value: false
    },
    {
      content:"Todo 2",
      value: false
    },
    {
      content:"Todo 3",
      value: false
    }
  ];
  finishedList:Todo[]=[

  ]
  constructor(private modalService:NgbModal){}
  addTodo(){
    this.todoList.push({content:this.todoValue, value:false});
  }
  changeTodo(i:number){
    const item=this.todoList.splice(i,1);
    this.finishedList.push(item[0]);
  }
  changeFinished(i:number){
    const item=this.finishedList.splice(i,1);
    this.todoList.push(item[0]);
  }
  openModal(content:TemplateRef<Element>,i:number,type:String){
    this.modalService.open(content,{ariaLabelledBy:'modal-basic-title'}).result.then(
      (result)=>{
        if(type == 'todoList'){
          this.todoList.splice(i,1);
        }else{
          this.finishedList.splice(i,1);
        }
      },
      (reason)=>{

      }
    )
  }
}
