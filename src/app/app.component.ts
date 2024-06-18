import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	title = 'Bookbuyers';
	@ViewChild('menuToggle') menuToggle!: ElementRef;

	closeMenu(){
		this.menuToggle.nativeElement.checked = !(this.menuToggle && this.menuToggle.nativeElement);
	}
}
