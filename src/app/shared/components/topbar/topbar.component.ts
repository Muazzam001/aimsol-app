import { Component, OnInit } from '@angular/core';
import { itemsContactDetails } from '../../datas/contact-details';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent implements OnInit {
  topbarItems!: any;

  ngOnInit(): void {
    this.topbarItems = itemsContactDetails;
  }
}
