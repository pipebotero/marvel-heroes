import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const matModules = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ...matModules,
    // FlexLayoutModule
  ],
  declarations: [HeaderComponent, SideBarComponent, PageNotFoundComponent],
  exports: [HeaderComponent, SideBarComponent, PageNotFoundComponent],
})
export class CoreModule {}
