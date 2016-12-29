﻿import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'formularcheckbox-directive',
	template: `
	<div class="row">
		<label class="col-xs-12 col-sm-2 form-control-label" for="textinput">{{displayName}}</label>
		<div class="col-xs-12 col-sm-10">
			<label class="form-check-label">
				<input class="form-check-input" type="checkbox" [(ngModel)]="value" (click)="setValue(!value)">
			</label>
		</div>
	</div>
`
})

export class FormularCheckboxDirective {
	@Input() value: boolean;
	@Input() displayName: string;
	
	@Output() changeValue: EventEmitter<boolean> = new EventEmitter<boolean>();

	private setValue(val) {
		if (val == undefined)
		{
			return;
		}
		this.value = val;
		this.changeValue.emit(this.value);
	}
	
}