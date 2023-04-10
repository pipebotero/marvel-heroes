import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'character-simple-card',
  templateUrl: './character-simple-card.component.html',
  styleUrls: ['./character-simple-card.component.scss']
})
export class CharacterSimpleCardComponent implements OnInit {

  @Input() name: string;
  @Input() thumbnail: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
