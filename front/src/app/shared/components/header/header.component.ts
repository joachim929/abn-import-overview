import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links = [
    {path: '/imports/all', label: 'Show all'},
    {path: '/imports/assign', label: 'Assign Categories'},
    {path: '/categories', label: 'Categories'},
    {path: '/rules', label: 'Rules'}
  ];

  constructor() {
  }

  ngOnInit() {
  }
}
