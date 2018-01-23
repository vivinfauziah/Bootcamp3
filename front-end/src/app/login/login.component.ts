import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http : Http, private route : Router) { }

  ngOnInit() {
  }

  Login(f : NgForm){
    if(f.value.username == "" || f.value.password == "" ){
      alert('Username and Password must fill in the blank!');
    }else{
        let obj = {
          username : f.value.username,
          password : f.value.password,
          remember : f.value.remember
        }
        let header = new Headers({ "Content-Type" : "application/json" })
        let options = new RequestOptions({ headers : header })
    
        this.http.post("http://localhost:3300/api/user/login", obj, options)
        .subscribe(
          result => {
            console.log(result.json())
            localStorage.setItem("token", result.json().token)
            this.route.navigate(['/main'])
          },
          error => {
            console.log("User Not Found")
            alert("Username and Password did not match!")
          }
        )
      }
    }
}
