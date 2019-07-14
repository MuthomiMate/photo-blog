import { Component, AfterViewInit, Input, ViewChild,  ElementRef, Renderer2 } from "@angular/core";

@Component({
  selector: 'app-blog-post-accordion',
  templateUrl: './blog-post-accordion.component.html',
  styleUrls: ['./blog-post-accordion.component.scss'],
})
export class BlogPostAccordionComponent implements AfterViewInit {
  @ViewChild("expandWrapper", { read: ElementRef }) expandWrapper: ElementRef;
  @Input("expanded") expanded: boolean = false;
  @Input("expandHeight") expandHeight: string = "auto";

  constructor(public renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.setStyle(this.expandWrapper.nativeElement, "max-height", this.expandHeight);
  }
}

