import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PagingModel } from 'app/models';

@Component({
	selector: 'paging-directive',
	template: `	<nav class="text-center" *ngIf="paging.showPaging">
					<ul class="pagination">
						<li class="page-item" [ngClass]="{disabled: !paging.showPreview}" (click)="changePage.emit(page - 1)">
							<span class="page-link" aria-label="Previous">
								<span aria-hidden="true">&laquo;</span>
								<span class="sr-only">Previous</span>
							</span>
						</li>
						<li *ngFor="let page of paging.pages" (click)="changePage.emit(page)" class="page-item active" [ngClass]="{active: page == paging.currentPage}"><span class="page-link">{{page}}</span></li>
						<li class="page-item" [ngClass]="{disabled: !paging.ShowNext}" (click)="changePage.emit(page + 1)">
							<span class="page-link" aria-label="Next">
								<span aria-hidden="true">&raquo;</span>
								<span class="sr-only">Next</span>
							</span>
						</li>
					</ul>
				</nav>
			`
})

export class PagingDirective {
	@Input() paging: PagingModel;
	@Output() changePage = new EventEmitter();

	constructor()
	{
		this.paging = new PagingModel();
	}
	
}