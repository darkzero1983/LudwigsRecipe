import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'formularnumber-directive',
	template: `
	<div class="row">
		<label class="col-xs-12 col-sm-2 form-control-label" for="textinput">{{displayName}}</label>
		<div class="col-xs-12 col-sm-10">
			<input [(ngModel)]="value" (change)="changeValue.emit(this.value);" class="form-control input-md" type="number" style="width:100%;">
		</div>
	</div>
`
})

export class FormularNumberDirective {
	@Input() value: string;
	@Input() displayName: string;
	@Output() changeValue: EventEmitter<string> = new EventEmitter<string>();
}