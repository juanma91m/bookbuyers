import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookbuyersBooksComponent } from './bookbuyers-books/bookbuyers-books.component';
import { BookbuyersContactComponent } from './bookbuyers-contact/bookbuyers-contact.component';
import { BookbuyersHomeComponent } from './bookbuyers-home/bookbuyers-home.component';
import { BookbuyersCartComponent } from './bookbuyers-cart/bookbuyers-cart.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full',
	},
	{
		path: 'books',
		component: BookbuyersBooksComponent,
	},
	{
		path: 'cart',
		component: BookbuyersCartComponent,
	},
	{
		path: 'contact',
		component: BookbuyersContactComponent,
	},
	{
		path: 'home',
		component: BookbuyersHomeComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
