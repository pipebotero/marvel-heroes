import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CharactersService } from 'src/app/core/http/characters.service';
import { Character } from '../../models/character.model';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-characters-list-page',
  templateUrl: './characters-list-page.component.html',
  styleUrls: ['./characters-list-page.component.scss'],
})
export class CharactersListPageComponent implements OnInit {

  characters: Character[];
  searchForm = new FormGroup({
    searchTerm: new FormControl(''),
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private charactersService: CharactersService) { }

  ngOnInit(): void {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.has('query')) {
      this.search(queryParams.get('query'));
      return;
    }
    this.getAllCharacters();
  }

  getAllCharacters() {
    this.charactersService.charactersList().subscribe(chars => {
      this.characters = chars;
    });
  }

  onSubmitSearch(e) {
    const queryParams: Params = { query: this.searchForm.controls.searchTerm.value };
    this.router.navigate(
    [], 
    {
      relativeTo: this.route,
      queryParams: queryParams, 
      queryParamsHandling: 'merge',
    });
    this.search(this.searchForm.controls.searchTerm.value);
  }

  search(term: string) {
    this.charactersService.charactersSearch(term).subscribe(chars => {
      this.characters = chars;
    });
  }

}
