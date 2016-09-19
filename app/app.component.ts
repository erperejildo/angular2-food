import { Component } from '@angular/core';
import { Plate } from './plate';

const FOOD: Plate[] = [
	{ id: 11, name: 'Hamburguer' },
	{ id: 12, name: 'Baked lamb' },
	{ id: 13, name: 'Ice cream' },
	{ id: 14, name: 'Sushi' },
	{ id: 15, name: 'Iberic ham' },
	{ id: 16, name: 'Salmorejo' }
];

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
			<h2>Plates</h2>
			<ul class="food">
			<li *ngFor="let plate of food"
			[class.selected]="plate === selectedPlate"
			(click)="onSelect(plate)">
			<span class="badge">{{plate.id}}</span> {{plate.name}}
			</li>
			</ul>
			<my-plate-detail [plate]="selectedPlate"></my-plate-detail>
			`,
	styles: [`
		  .selected {
		    background-color: #CFD8DC !important;
		    color: white;
		  }
		  .food {
		    margin: 0 0 2em 0;
		    list-style-type: none;
		    padding: 0;
		    width: 15em;
		  }
		  .food li {
		    cursor: pointer;
		    position: relative;
		    left: 0;
		    background-color: #EEE;
		    margin: .5em;
		    padding: .3em 0;
		    height: 1.6em;
		    border-radius: 4px;
		  }
		  .food li.selected:hover {
		    background-color: #BBD8DC !important;
		    color: white;
		  }
		  .food li:hover {
		    color: #607D8B;
		    background-color: #DDD;
		    left: .1em;
		  }
		  .food .text {
		    position: relative;
		    top: -3px;
		  }
		  .food .badge {
		    display: inline-block;
		    font-size: small;
		    color: white;
		    padding: 0.8em 0.7em 0 0.7em;
		    background-color: #607D8B;
		    line-height: 1em;
		    position: relative;
		    left: -1px;
		    top: -4px;
		    height: 1.8em;
		    margin-right: .8em;
		    border-radius: 4px 0 0 4px;
		  }
		`]
})
export class AppComponent {
	title = 'Best food EVER';
	food = FOOD;
	selectedPlate: Plate;

	onSelect(plate: Plate): void {
		this.selectedPlate = plate;
	}
}