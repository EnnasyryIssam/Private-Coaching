import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-user-show-coachs',
  templateUrl: './user-show-coachs.component.html',
  styleUrls: ['./user-show-coachs.component.css'],
})
export class UserShowCoachsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $('#sport').change(function () {
      if ($(this).val() == 'football') {
        $('.foot').show();
        $('.foot').addClass('isselected');
        $('.yoga').removeClass('isselected');
        $('.box').removeClass('isselected');
        $('.fitness').removeClass('isselected');
        $('.box').hide();
        $('.yoga').hide();
        $('.fitness').hide();
      }
      if ($(this).val() == 'box') {
        $('.foot').hide();
        $('.box').show();
        $('.box').addClass('isselected');
        $('.foot').removeClass('isselected');
        $('.yoga').removeClass('isselected');
        $('.fitness').removeClass('isselected');
        $('.yoga').hide();
        $('.fitness').hide();
      }
      if ($(this).val() == 'fitness') {
        $('.foot').hide();
        $('.box').hide();
        $('.yoga').hide();
        $('.fitness').show();
        $('.fitness').addClass('isselected');
        $('.yoga').removeClass('isselected');
        $('.box').removeClass('isselected');
        $('.foot').removeClass('isselected');
      }
      if ($(this).val() == 'yoga') {
        $('.foot').hide();
        $('.box').hide();
        $('.yoga').show();
        $('.yoga').addClass('isselected');
        $('.foot').removeClass('isselected');
        $('.box').removeClass('isselected');
        $('.fitness').removeClass('isselected');
        $('.fitness').hide();
      }
      if ($(this).val() == 'all') {
        $('.foot').show();
        $('.box').show();
        $('.yoga').show();
        $('.fitness').show();
      }
    });

    $('#avis').change(function () {
      // if ($(this).val() == 'five') {
      //   $('.4-s').hide();
      //   $('.5-s').show();
      // }
      // if ($(this).val() == 'foor') {
      //   $('.5-s').hide();
      //   $('.4-s').show();
      // }
      if ($(this).val() == 'foor' && $('.coach-card').hasClass('f-4')) {
        $('.foot').hide();
        $('.box').hide();
        $('.yoga').hide();

        $('.f-5').hide();
        $('.f-4').show();
      }
      if ($(this).val() == 'five' && $('.coach-card').hasClass('f-5')) {
        $('.foot').hide();
        $('.box').hide();
        $('.yoga').hide();

        $('.f-4').hide();
        $('.f-5').show();
      }
    });
  }
}
