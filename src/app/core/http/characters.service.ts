import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from 'src/app/features/characters/models/character.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  path: String = 'characters';

  constructor(private http: HttpClient) {}

  charactersList(): Observable<Character[]> {
    return this.http
      .get(`${environment.marvelAPI.baseUrl}/${this.path}`, {})
      .pipe(
        map((res: any) =>
          res.data.results.map((data: Character) =>
            new Character().deserialize(data)
          )
        )
      );
  }

  charactersSearch(searchTerm: string): Observable<Character[]> {
    searchTerm = searchTerm.trim();
    const options = searchTerm ? { params: new HttpParams().set('nameStartsWith', searchTerm) } : {};
    return this.http
      .get(`${environment.marvelAPI.baseUrl}/${this.path}`, options)
      .pipe(
        map((res: any) =>
          res.data.results.map((data: Character) =>
            new Character().deserialize(data)
          )
        )
      );
  }

  getCharacterById(id: string): Observable<Character[]> {
    return this.http
      .get(`${environment.marvelAPI.baseUrl}/${this.path}/${id}`, {})
      .pipe(
        map((res: any) =>
          res.data.results.map((data: Character) =>
            new Character().deserialize(data)
          )
        )
      );
  }
}
