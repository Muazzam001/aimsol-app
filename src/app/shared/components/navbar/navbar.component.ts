import { Component, OnInit } from '@angular/core';
import { itemsNavMenu } from '../../datas/nav-menu';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  navitems!: any;

  ngOnInit(): void {
    this.navitems = itemsNavMenu;
  }

}
