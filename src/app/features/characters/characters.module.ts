import { NgModule } from '@angular/core';
import { CharactersListPageComponent } from './pages/characters-list-page/characters-list-page.component';
import { CharacterDetailPageComponent } from './pages/character-detail-page/character-detail-page.component';
import {
  CharactersRoutingModule,
  routedComponents,
} from './characters-routing.module';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion'; 

import { CharacterSimpleCardComponent } from './components/character-simple-card/character-simple-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharacterDetailCardComponent } from './components/character-detail-card/character-detail-card.component';

const matModules = [
  MatCardModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatExpansionModule
];

@NgModule({
  declarations: [...routedComponents, CharacterSimpleCardComponent, CharacterDetailCardComponent],
  imports: [
    CharactersRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...matModules,
    SharedModule,
  ],
})
export class CharactersModule {}
