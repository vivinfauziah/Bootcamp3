import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http : Http, private route : Router) { }

  ngOnInit() {
  }

  Signup(f : NgForm){
    
    if(f.value.terms == false){
      alert('Please indicate that you have read and agree to the Terms of Service');
    }else if(f.value.email == "" || f.value.username == "" || f.value.password == "" ){
      alert('Please fill all the blank!');
    }else{
        let obj = {
          username : f.value.username,
          email : f.value.email,
          password : f.value.password,
          terms : f.value.terms
        }

        let header = new Headers({ "Content-Type" : "application/json" });
        let options = new RequestOptions({ headers : header });
    
        this.http.post("http://localhost:3300/api/user/new", obj, options)
        .subscribe(
          result => {
            this.route.navigate(['/']);
          },
          error => {
            console.log("Error !");
          }
        );
      }
      }
}
