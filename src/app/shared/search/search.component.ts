import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchQuery: string = '';
  @Output() searchTextChanges = new EventEmitter();

  searchHotels() {
    this.searchTextChanges.emit(this.searchQuery);
    // this.searchQuery = '';
  }
}
