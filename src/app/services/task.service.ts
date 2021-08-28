import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) {
        
   }
   getAll(){
     return this.http.get<Task[]>("https://localhost:44321/api/todos");
   }
   delete(id:any){
     return this.http.delete(`https://localhost:44321/api/todos/${id}`);
   }
   insert(task:Task){
     return this.http.post(`https://localhost:44321/api/todos`,task);
   }
   update(task:Task){
     return this.http.put(`https://localhost:44321/api/todos/${task.id}`,task);
   }
}
