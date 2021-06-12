import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [
  `
  li {cursor: pointer;}
  `
  ]
})
export class AppComponent implements OnInit {

  login: boolean;
  constructor(private router : Router) {}

  ngOnInit() {
    localStorage.setItem("access", "true");
  }

  validate(value: boolean) {
    this.login = value;
    if (this.login) {
      this.router.navigate(['/inicio']);
    }
  }

  logOut() {
    this.login = false;
  }


}
