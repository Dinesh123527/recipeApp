import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authenticatiion.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  ImagePath: string;
  dataAdmin:any= {};

  constructor(private userType: AuthenticationService, private router: Router) {
    this.ImagePath =  '/assets/recipe.jpg'

  }
  ngOnInit(): void {
    this.userType.getType().subscribe((val1: any) => {this.dataAdmin = val1;});
  }

  onLogout() {
   this.router.navigate([''])
  }
}
