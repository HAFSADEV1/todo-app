
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/models/task';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks:Task[]=[];
  editForm=false;
  task:Task={
    title: '',
    completed :false
  }
  constructor(private taskService:TaskService) {

   }

   ngOnInit(){
      this.getTasks();
      console.log(this.tasks);
   }
   resetTask(){
    this.task={
      title: '',
      completed :false
    }
   }
   getTasks(){
      this.taskService.getAll().subscribe(tasks=>this.tasks=tasks);
   }
   deleteTask(id:any){
     this.taskService.delete(id).subscribe(()=>{this.tasks=this.tasks.filter(task=>task.id!==id)});
   }
   insertTask(){
     this.taskService.insert(this.task).subscribe(()=>{
       this.tasks=[this.task,...this.tasks];
     })
   }
   editTask(task:Task){
     this.task=task;
     this.editForm=true;
   }

   updateTask(){
      this.taskService.update(this.task).subscribe(task=>{
          this.resetTask();
          this.editForm=false;
      });
   }
}
