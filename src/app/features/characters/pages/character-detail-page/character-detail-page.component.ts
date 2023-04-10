import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Character } from '../../models/character.model';
import { CharactersService } from 'src/app/core/http/characters.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-character-detail-page',
  templateUrl: './character-detail-page.component.html',
  styleUrls: ['./character-detail-page.component.scss'],
})
export class CharacterDetailPageComponent implements OnInit {
  character: Character;
  characters$: Observable<Character[]>;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private charactersService: CharactersService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.characters$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.charactersService.getCharacterById(params.get('id')!)
      )
    );
    this.getCharacterById(id);
  }

  getCharacterById(id) {
    this.charactersService.getCharacterById(id).subscribe(char => {
    });
  }

  back(): void {
    this.location.back()
  }
}
