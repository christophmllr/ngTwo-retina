import { Directive, ElementRef, Renderer, Input, OnInit} from '@angular/core';
import { Http } from '@angular/http';

@Directive({
  selector: '[retina-image]'
})

export class NgTwoRetina implements OnInit {

  @Input() src: string;
  @Input() suffix: string = '@2x';

  constructor(private el: ElementRef, private renderer: Renderer, private http: Http) { }

  ngOnInit() {
    if (this.isRetinaDevice()) {
      this.setImage(this.buildRetinaFileUrl(this.src, this.suffix));
    } else {
      this.setImage(this.src);
    }
  }

  private setImage(fileUrl: string) {
    this.http.get(fileUrl)
      .subscribe(
        data => { this.updateSrcAttributeOnElement(fileUrl) },
        error => { this.updateSrcAttributeOnElement(this.src) }
      );
  }

  // Render operations

  private updateSrcAttributeOnElement(src : string) {
    this.renderer.setElementAttribute(this.el.nativeElement, 'src', src);
  }

  // Helper

  private buildRetinaFileUrl(fileUrl: string, suffix: string): string {

    var pathComponents = fileUrl.split("/");
    let completeFileName = pathComponents[pathComponents.length-1];
    let fileNameCompoents =  completeFileName.split(".");

    var fileName = fileNameCompoents[0];
    let fileFormat = fileNameCompoents[1];

    var retinaCompleteFileName = fileName + suffix + "." + fileFormat;
    pathComponents[pathComponents.length-1] = retinaCompleteFileName;

    return pathComponents.map(path => path).join('/');
  }

  // Inspectors

  private isRetinaDevice(): boolean {

    var query = "(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)";

    if (matchMedia(query).matches) {
      return true;
    } else {
      return false;
    }
  }
}
