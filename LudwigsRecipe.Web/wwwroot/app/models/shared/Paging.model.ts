export class PagingModel {
	currentPage: number;
	maxPage: number;
	showPaging: boolean;
	showPreview: boolean;
	showNext: boolean;
	pages: number[];

	constructor()
	{
		this.pages = new Array<number>();
	}
}