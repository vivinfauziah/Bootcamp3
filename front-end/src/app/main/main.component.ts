import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http"
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private http : Http, private route : Router) { }

  ngOnInit() {
  }

}
