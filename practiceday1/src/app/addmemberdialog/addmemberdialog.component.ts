import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CreateprojectComponent } from '../createproject/createproject.component';

@Component({
  selector: 'app-addmemberdialog',
  templateUrl: './addmemberdialog.component.html',
  styleUrls: ['./addmemberdialog.component.css']
})
export class AddmemberdialogComponent implements OnInit {
  roles=["Developer","Manager" ];
  selectedoption:string="Developer"
  eid:string="E123";
  constructor(public dialogRef: MatDialogRef<CreateprojectComponent>) { }
  CloseDialog() {
    this.dialogRef.close();
  }
  addmember(name,eid){
    this.dialogRef.close({neha:name,eid:eid,role:this.selectedoption});
  }
  ngOnInit() {
  }

}
