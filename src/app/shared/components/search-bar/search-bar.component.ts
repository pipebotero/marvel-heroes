import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() label: string;
  @Input() placeholder: string;
  @Input() name: string;
  @Output() searchChange = new EventEmitter<string>();

  search: string;
  
  constructor() { }

  ngOnInit(): void {
  }

  modelChange(value) {
    this.searchChange.emit(value);
  }

}
