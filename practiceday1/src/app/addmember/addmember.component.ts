import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { ProjectcreationComponent } from '../projectcreation/projectcreation.component';
@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.css']
})
export class AddmemberComponent implements OnInit {
 roles=["Developer","Manager"];
 selected:string;
  constructor(
    public dialogRef: MatDialogRef<ProjectcreationComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  submitdata(name,eid){
    this.dialogRef.close({name:name,eid:eid,role:this.selected})
  }

  ngOnInit() {
  }

}
