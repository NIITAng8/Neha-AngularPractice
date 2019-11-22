import { Component, OnInit, Input } from '@angular/core';
import { ProjectmanagementService } from '../projectmanagement.service';
import { taskmodel } from '../task/task.model';

@Component({
  selector: 'app-taskdisplay',
  templateUrl: './taskdisplay.component.html',
  styleUrls: ['./taskdisplay.component.css']
})
export class TaskdisplayComponent implements OnInit {
 @Input() task:taskmodel;
  constructor(private pmservice:ProjectmanagementService) { }

  ngOnInit() {
   
  }

}
