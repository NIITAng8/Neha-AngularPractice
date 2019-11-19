import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddmemberComponent } from '../addmember/addmember.component';
import { addmembermodel } from '../addmember/addmember.model';

@Component({
  selector: 'app-projectcreation',
  templateUrl: './projectcreation.component.html',
  styleUrls: ['./projectcreation.component.css']
})
export class ProjectcreationComponent implements OnInit {
  employees: addmembermodel[];
  constructor(private matdialog: MatDialog) {
    this.employees = [new addmembermodel("Neha", "E31982", "Developer"),
    new addmembermodel("Bharani", "E17582", "Manager")]
  }

  ngOnInit() {
  }
  openmemberdialog() {
    const dialogRef = this.matdialog.open(AddmemberComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let namelist = new addmembermodel(result.name, result.eid, result.role)
        this.employees.unshift(namelist);
      }
    });
  }

}
