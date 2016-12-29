import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'formularimageupload-directive',
	template: `
	<div class="row">
		<label class="col-xs-12 col-sm-2 form-control-label" for="textinput">TeaserImage</label>
		<div class="col-xs-12 col-sm-10">
			<div class="teaser-image"><img src="{{teaserImageUrl}}?w=640&h=480&mode=crop"></div>
			<input class="form-control input-md" type="file" style="width:100%;" (change)="fileChangeEvent($event)">
		</div>
	</div>
`
})

export class FormularImageUploadDirective {
	@Input() teaserImageUrl: string | null;
	@Output() changeTeaserImageUrl: EventEmitter<string> = new EventEmitter<string>();

	private filesToUpload: Array<File>;

	fileChangeEvent(fileInput: any) {
		this.filesToUpload = <Array<File>>fileInput.target.files;
		this.makeFileRequest("/api/CMS/Recipe/Upload", [], this.filesToUpload).then((result) => {
			this.teaserImageUrl = "/upload/" + this.filesToUpload[0].name;
			this.changeTeaserImageUrl.emit(this.teaserImageUrl);
		});
	}

	makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
		return new Promise((resolve, reject) => {
			var formData: any = new FormData();
			var xhr = new XMLHttpRequest();
			formData.append("file", files[0], files[0].name);


			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4) {
					if (xhr.status == 200) {
						resolve(true);
					} else {
						reject(false);
					}
				}
			}

			xhr.open("POST", url, true);
			xhr.send(formData);
		});
	}

}