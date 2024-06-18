import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-button-add-remove',
	templateUrl: './button-add-remove.component.html',
	styleUrl: './button-add-remove.component.scss'
})
export class ButtonAddRemoveComponent {
	@Input() quantity: number = 0;
	@Input() max: number = 0;
	@Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();

	clickRemove(): void {
		if (this.quantity > 0) {
			this.quantity--;
			this.quantityChange.emit(-1);
		}
	}

	clickAdd(): void {
		if (this.quantity < this.max) {
			this.quantity++;
			this.quantityChange.emit(1);
		}
	}
}
