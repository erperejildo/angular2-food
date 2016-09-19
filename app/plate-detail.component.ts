import { Component, Input } from '@angular/core';
import { Plate } from './plate';

@Component({
	selector: 'my-plate-detail',
	template: `
	  <div *ngIf="plate">
	    <h2>{{plate.name}} details!</h2>
	    <div><label>id: </label>{{plate.id}}</div>
	    <div>
	      <label>name: </label>
	      <input [(ngModel)]="plate.name" placeholder="name"/>
	    </div>
	  </div>
	`
})
export class PlateDetailComponent {
	// declare that plate is an input
	@Input()
	plate: Plate;
}