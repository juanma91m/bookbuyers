import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookPublicidadComponent } from './book-publicidad/book-publicidad.component';
import { BookButtonAddRemoveComponent } from './book-button-add-remove/book-button-add-remove.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookPublicidadComponent,
    BookButtonAddRemoveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
