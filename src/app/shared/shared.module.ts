import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BindQueryParamDirective } from './directives/bind-query-param.directive';

const matModules = [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule];

@NgModule({
  imports: [CommonModule, FormsModule, ...matModules],
  declarations: [SearchBarComponent, BindQueryParamDirective],
  exports: [SearchBarComponent, BindQueryParamDirective],
})
export class SharedModule {}
