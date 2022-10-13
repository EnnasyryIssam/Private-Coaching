import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css'],
})
export class UserHomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $('.test').click(function () {
      alert('Handler for .click() called.');
    });
  }
}
