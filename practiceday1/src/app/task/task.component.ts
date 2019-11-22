import { Component, OnInit } from '@angular/core';
import { employeemodel } from '../createproject/createproject.model.component';
import { ProjectmanagementService } from '../projectmanagement.service';
import { taskmodel } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit { 
  tasklist:taskmodel[];
  armnum:number=0;
  constructor(private pmservice:ProjectmanagementService) { }

  ngOnInit() {
    this.pmservice.getTasks().subscribe(
      res=> this.tasklist=res
    )
  }
  updatetasklist(val){
    this.tasklist.unshift(val)
  }
    

}
