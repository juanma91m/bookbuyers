import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookPublicidadComponent } from './book-publicidad/book-publicidad.component';
import { ButtonAddRemoveComponent } from './button-add-remove/button-add-remove.component';
import { BookbuyersContactComponent } from './bookbuyers-contact/bookbuyers-contact.component';
import { BookCartComponent } from './book-cart/book-cart.component';
import { BookbuyersBooksComponent } from './bookbuyers-books/bookbuyers-books.component';
import { BookbuyersHomeComponent } from './bookbuyers-home/bookbuyers-home.component';
import { BookbuyersCartComponent } from './bookbuyers-cart/bookbuyers-cart.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
		BookListComponent,
		BookPublicidadComponent,
		ButtonAddRemoveComponent,
		BookbuyersContactComponent,
		BookCartComponent,
		BookbuyersBooksComponent,
		BookbuyersHomeComponent,
		BookbuyersCartComponent,
		CartListComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
	],
	providers: [
		provideHttpClient()
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
