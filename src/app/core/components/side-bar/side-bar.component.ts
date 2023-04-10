import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mh-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @Input() menuItems: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
