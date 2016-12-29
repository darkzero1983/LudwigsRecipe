import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'formularrecipetextarea-directive',
	template: `
	<div class="row">
		<label class="col-xs-12 col-sm-2 form-control-label" for="textinput">{{displayName}}</label>
		<div class="col-xs-12 col-sm-10">
			<span class="btn btn-secondary" (click)="changeContent('dn')">DN</span>
			<span class="btn btn-secondary" (click)="changeContent('li')">li</span>
			<textarea id="recipeContentTextarea" [(ngModel)]="value" (change)="changeValue.emit(this.value);" class="form-control" cols="20" rows="{{rows}}"></textarea>
		</div>
	</div>
`
})

export class FormularRecipeTextareaDirective {
	@Input() value: string;
	@Input() displayName: string;
	@Input() rows: number;

	@Output() changeValue: EventEmitter<string> = new EventEmitter<string>();

	changeContent(type: string) {
		switch (type) {
			case "dn":
				this.wrapText('recipeContentTextarea', '<d n="', '"></d>');
				break;
			case "li":
				this.wrapText('recipeContentTextarea', '<li>', '</li>');
				break;
		}
		this.value = $('#recipeContentTextarea').val();
	}

	wrapText(elementID: string, openTag: string, closeTag: string) {
		var textArea = $('#' + elementID);
		var len = textArea.val().length;
		var start = textArea[0].selectionStart;
		var end = textArea[0].selectionEnd;
		var selectedText = textArea.val().substring(start, end);
		var replacement = openTag + selectedText + closeTag;
		textArea.val(textArea.val().substring(0, start) + replacement + textArea.val().substring(end, len));
	}
}