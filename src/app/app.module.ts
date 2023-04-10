import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MarvelApiInterceptor } from './core/interceptors/marvel-api-interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CoreModule } from './core/core.module';

const matModules = [MatSidenavModule, MatButtonModule, MatIconModule];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    ...matModules,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MarvelApiInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
