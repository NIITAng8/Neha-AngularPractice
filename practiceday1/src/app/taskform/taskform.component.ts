import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { employeemodel } from '../createproject/createproject.model.component';
import { ProjectmanagementService } from '../projectmanagement.service';
import { taskmodel } from '../task/task.model';

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent implements OnInit {
  employees: employeemodel[];
  ename: string;
  task: string;
  @Output() addtask=new EventEmitter<taskmodel>();
  constructor(private pmservice: ProjectmanagementService) { }

  ngOnInit() {
    this.pmservice.getMemberList().subscribe(res =>
      this.employees = res)


  }
  savetask(taskname) {
    let task: taskmodel = new taskmodel(this.ename, taskname)
    this.pmservice.savetask(task).subscribe(res => res);
    this.addtask.emit(task);

  }

}
