import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjectmanagementService } from '../projectmanagement.service';
import { formmodel } from './formModel.model';
import { Router } from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-projectform',
  templateUrl: './projectform.component.html',
  styleUrls: ['./projectform.component.css']
})
export class ProjectformComponent implements OnInit {
  projectForm: FormGroup;
  constructor(private fb: FormBuilder
    , private pmservice: ProjectmanagementService,private route:Router) {
    this.createform()
  }
  createform() {
    this.projectForm = this.fb.group({
      projectname: ['', [Validators.required, Validators.minLength(5)]],
      startdate: ['', Validators.required],
      enddate: [''],
      efforthours: '',
      effortcost: ['', Validators.pattern('[0-9]*')]
    })
  }

  onSubmit() {
    console.log(this.projectForm.value);
    let formdata: formmodel = this.projectForm.value;
    this.pmservice.saveProjectinfo(formdata).then(result =>
      {
        console.log(result)
        this.route.navigate(['']);
      }
      ,
      res => console.log(res))
      .catch(err => console.log(err));
  }
  ngOnInit() {
  }

}
