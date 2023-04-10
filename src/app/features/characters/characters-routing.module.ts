import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersListPageComponent } from './pages/characters-list-page/characters-list-page.component';
import { CharacterDetailPageComponent } from './pages/character-detail-page/character-detail-page.component';
import { CharactersComponent } from './characters.component';

const routes: Routes = [

  { path: '', component: CharactersListPageComponent },
  { path: ':id', component: CharacterDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}

export const routedComponents = [
  CharactersComponent,
  CharactersListPageComponent,
  CharacterDetailPageComponent,
];
