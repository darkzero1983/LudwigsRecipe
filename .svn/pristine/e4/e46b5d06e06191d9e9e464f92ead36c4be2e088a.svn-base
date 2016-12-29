import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'formulartextarea-directive',
	template: `
	<div class="row">
		<label class="col-xs-12 col-sm-2 form-control-label" for="textinput">{{displayName}}</label>
		<div class="col-xs-12 col-sm-10">
			<textarea [(ngModel)]="value" (change)="changeValue.emit(this.value);" class="form-control" cols="20" rows="{{rows}}"></textarea>
		</div>
	</div>
`
})

export class FormularTextareaDirective {
	@Input() value: string;
	@Input() displayName: string;
	@Input() rows: number;

	@Output() changeValue: EventEmitter<string> = new EventEmitter<string>();
}