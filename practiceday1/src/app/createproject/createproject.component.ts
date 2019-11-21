import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { employeemodel } from './createproject.model.component';
import { MatDialog } from '@angular/material/dialog';
import { AddmemberdialogComponent } from '../addmemberdialog/addmemberdialog.component';
import { ProjectmanagementService } from '../projectmanagement.service';
import { formmodel } from '../projectform/formModel.model';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.css'],
  encapsulation: ViewEncapsulation.Emulated
  //encapsulation:ViewEncapsulation.None
  //encapsulation:ViewEncapsulation.Native
})
export class CreateprojectComponent implements OnInit {
  employees: employeemodel[];
  displayedColumns: string[] = ['id', 'projectname', 'startdate', 'efforthours','action'];
  formdata: formmodel;
  dataSource: MatTableDataSource<formmodel>;
  searchval: FormControl = new FormControl();
  searchresult;
  ngval:string="neha";
  constructor(public dialog: MatDialog, private pmservice: ProjectmanagementService,private router:Router) {
    this.employees = [new employeemodel("Neha", "E31982", "Developer", true),
    new employeemodel("Bharani", "E17582", "Manager", false)]
  }

  ngOnInit() {
    this.pmservice.getprojectdetails().then(result => {
      this.formdata = result;
      this.dataSource = new MatTableDataSource(result);
    }

    )
    const observesearch = this.searchval.valueChanges.pipe(debounceTime(1000), distinctUntilChanged()).subscribe(val => {
      this.pmservice.getprojectdetailswithIDP(val).then(res => {
      this.searchresult = res;
        console.log('Subscribe', res)
      })
    })

    setTimeout(() => {
      observesearch.unsubscribe()
      console.log('unsubscribe')
    }, 10000)
    setTimeout(() => {
      this.searchval.valueChanges.pipe(debounceTime(1000), distinctUntilChanged()).subscribe(val => {
        this.pmservice.getprojectdetailswithIDP(val).then(res => {
        this.searchresult = res;
          console.log('Subscribe', res)
        })
      })
    }, 20000);

  }
  onkey(val) {
    this.pmservice.getprojectdetailswithIDP(val.key).then(res => {
    this.searchresult = res;
      console.log(res)
    })
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
  gotonext(row){
    console.log('beforeroute')
    this.router.navigateByUrl('/projectform',{state:{id:row.id,name:row.projectname}})
    console.log(row)
  }

}
