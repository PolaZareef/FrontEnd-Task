import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username:string='';
  email:string='';
  password:string='';
  ComfirmPassword:string='';

  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }
  SaveData(){
    let user={
      username:this.username,
      email:this.email,
      password:this.password,
      password_confirmation:this.ComfirmPassword
    }
    this.http.post('https://goldblv.com/api/hiring/tasks/register/json',user)
      .subscribe(Response=>{
        console.log(Response);
      });
      this.router.navigate(["/success"]);
  }
}
