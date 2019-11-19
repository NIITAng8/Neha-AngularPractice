import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nameofproject = 'Project Task Management Application';
  constructor(
    private route:Router
  ){}
  gotoform(){
    this.route.navigate(['/projectform'])
  }
}
