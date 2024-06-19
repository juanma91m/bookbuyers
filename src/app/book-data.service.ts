import { Injectable } from '@angular/core';
import { Book } from './interfaces/Book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

const ENDPOINT_BOOKS = 'https://66724af2e083e62ee43e9bb7.mockapi.io/api/v1/book';

@Injectable({
	providedIn: 'root'
})
export class BookDataService {
	http: HttpClient;

	constructor(http: HttpClient) {
		this.http = http;
	}

	getAll(): Observable<Book[]> {
		return this.http.get<Book[]>(ENDPOINT_BOOKS);
		/*
		* Si quiero modificar la salida del Observable antes de retornarla se puede usar la función pipe
		* return this.http.get<Book[]>(ENDPOINT_BOOKS).pipe(
		* 	tap(
		* 		beers =>
		* 		beers.forEach(beer => beer.quantity = 0) 
		* 	)
		* )
		*/
	}
}
