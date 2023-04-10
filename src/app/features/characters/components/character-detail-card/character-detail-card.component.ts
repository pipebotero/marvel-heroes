import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'character-detail-card',
  templateUrl: './character-detail-card.component.html',
  styleUrls: ['./character-detail-card.component.scss']
})
export class CharacterDetailCardComponent implements OnInit {

  @Input() name: string;
  @Input() image: string;
  @Input() description: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
