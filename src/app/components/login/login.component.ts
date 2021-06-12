import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : string = "";
  pwd : string = "";
  @Output() login = new EventEmitter<boolean>();
  error : string = '';

  constructor(private access:LoginService) { }

  ngOnInit(): void {
  }

  verify() {
    localStorage.setItem("access", "true")
    this.access.access({ user: this.user, pwd: this.pwd }).subscribe(res => {
      this.login.emit(res.acess);
      this.error = res.error;
    });
  }

}
