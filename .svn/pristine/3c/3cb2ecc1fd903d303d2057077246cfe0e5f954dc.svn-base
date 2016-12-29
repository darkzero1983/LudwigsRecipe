import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'formulardatetime-directive',
	template: `
	<div class="row">
		<label class="col-xs-12 col-sm-2 form-control-label" for="textinput">ab</label>
		<div class="col-xs-12 col-sm-2">
			<input [(ngModel)]="publishDate" class="form-control date-picker" type="text" style="width:140px;" (change)="changeValues()">
		</div>
		<div class="col-xs-12 col-sm-8">
			<label class="col-xs-12 col-sm-1 form-control-label no-padding-xs">um</label>
			<div class="col-xs-12 col-sm-11 no-padding">
				<div style="display:inline-block;width:80px;">
					<select class="form-control" [(ngModel)]="publishHour" (change)="changeValues()">
						<option *ngFor="let hour of selectAbleHours" value="{{hour}}">{{hour}}</option>
					</select>
				</div>
				<label class="form-control-label no-padding-xs text-center">:</label>
				<div style="display:inline-block;width:80px;">
					<select class="form-control" [(ngModel)]="publishMinute" (change)="changeValues()">
						<option *ngFor="let minute of selectAbleMinuts" value="{{minute}}">{{minute}}</option>
					</select>
				</div>
			</div>
		</div>
	</div>
`
})

export class FormularDateTimeDirective {
	private selectAbleHours: number[];
	private selectAbleMinuts: number[];
	@Input() publishDate: string;
	@Input() publishHour: number;
	@Input() publishMinute: number;
	
	@Output() changePublishDate: EventEmitter<string> = new EventEmitter<string>();
	@Output() changePublishHour: EventEmitter<number> = new EventEmitter<number>();
	@Output() changePublishMinute: EventEmitter<number> = new EventEmitter<number>();

	constructor() {
		this.selectAbleHours = new Array<number>();
		for (var i = 0; i <= 59; i++) {
			this.selectAbleHours.push(i);
		}

		this.selectAbleMinuts = new Array<number>();
		for (var i = 0; i <= 50; i = i + 10) {
			this.selectAbleMinuts.push(i);
		}
	}

	changeValues()
	{
		this.changePublishDate.emit(this.publishDate);
		this.changePublishHour.emit(this.publishHour);
		this.changePublishMinute.emit(this.publishMinute);
	}
}