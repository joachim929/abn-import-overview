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
        {path: '/invoices', label: 'Invoices'},
        {path: '/categories', label: 'Categories'},
        {path: '/rules', label: 'Rules'},
        {path: '/imports/all', label: 'Show all'},
        {path: '/imports/assign', label: 'Assign Categories'}
    ];

    constructor() {
    }

    ngOnInit() {
    }
}
