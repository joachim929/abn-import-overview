import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links = [
    // {path: '/dashboard', label: 'Dashboard'},
    // {path: '/reports', label: 'Reports'},
    {path: '/categories', label: 'Categories'},
    {path: '/transfers', label: 'Transfers'},
    // {path: '/rules', label: 'Rules'}
  ];

  constructor() {
  }

  ngOnInit() {
  }
}
