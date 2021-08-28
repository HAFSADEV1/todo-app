import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  public myId="inputId";
  public hasError=false;
  public value="";
  public name="";
  public displayName=false;
  todos=[
    {id:1,task:"API",datte:Date.now()},{id:2,task:"C#",datte:Date.now()}
  ]
  constructor() { }

  ngOnInit(): void {
  }
   clickMe(event :Event){
    //this.value="Welcome to Foliatech!";
    console.log(event.target);
  }
 
  callPhone(value:string){
        console.log(value);
  }
}
