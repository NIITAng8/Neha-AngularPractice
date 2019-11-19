import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { employeemodel } from './createproject.model.component';
import { MatDialog } from '@angular/material/dialog';
import { AddmemberdialogComponent } from '../addmemberdialog/addmemberdialog.component';
@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.css'],
  encapsulation:ViewEncapsulation.Emulated
  //encapsulation:ViewEncapsulation.None
  //encapsulation:ViewEncapsulation.Native
})
export class CreateprojectComponent implements OnInit {
  employees: employeemodel[];
  constructor(public dialog: MatDialog) {
    this.employees = [new employeemodel("Neha", "E31982", "Developer", true),
    new employeemodel("Bharani", "E17582", "Manager", false)]
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddmemberdialogComponent, {
      width: '250px'
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let dialogname = new employeemodel(result.name, result.eid,
          result.role, false)
        this.employees.unshift(dialogname);
        console.log(result);
      }
    })
  }
  ngOnInit() {
  }

}
