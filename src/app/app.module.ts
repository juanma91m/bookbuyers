import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookPublicidadComponent } from './book-publicidad/book-publicidad.component';
import { BookButtonAddRemoveComponent } from './book-button-add-remove/book-button-add-remove.component';
import { BookbuyersContactComponent } from './bookbuyers-contact/bookbuyers-contact.component';
import { BookCartComponent } from './book-cart/book-cart.component';
import { BookbuyersBooksComponent } from './bookbuyers-books/bookbuyers-books.component';
import { BookbuyersHomeComponent } from './bookbuyers-home/bookbuyers-home.component';
import { BookbuyersCartComponent } from './bookbuyers-cart/bookbuyers-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookPublicidadComponent,
    BookButtonAddRemoveComponent,
    BookbuyersContactComponent,
    BookCartComponent,
    BookbuyersBooksComponent,
    BookbuyersHomeComponent,
    BookbuyersCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
