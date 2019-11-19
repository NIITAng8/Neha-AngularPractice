import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-projectform',
  templateUrl: './projectform.component.html',
  styleUrls: ['./projectform.component.css']
})
export class ProjectformComponent implements OnInit {
  projectForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createform()
  }
  createform() {
    this.projectForm = this.fb.group({
      projectname: new FormControl(''),
      startdate: new FormControl(new Date()),
      enddate: new FormControl(''),
      efforthours: new FormControl(''),
      effortcost: new FormControl('20000')
    })
  }
  onSubmit(){
    console.log(this.projectForm.value);
  }
  ngOnInit() {
  }

}
