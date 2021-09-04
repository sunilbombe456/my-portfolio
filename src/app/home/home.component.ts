import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 public project = ["../../assets/project/login.png",
            "../../assets/project/courses.png",
            "../../assets/project/dash.png",
          "../../assets/project/exam.png",
        "../../assets/project/sunil.jpg"];

}
