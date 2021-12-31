import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  IsLoggedIn: boolean = false;

  constructor(private router: Router) {
    let employeeId = localStorage.getItem('employeeId');
    if (employeeId) {
      this.IsLoggedIn = true;
      this.router.navigate(['/home']);
    }
  }

  ngOnInit(): void {
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }
}
