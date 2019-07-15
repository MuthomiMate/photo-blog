import { NgModule } from "@angular/core";
import { BlogPostAccordionComponent } from "./blog-post-accordion/blog-post-accordion.component";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [ BlogPostAccordionComponent ],
    exports: [ BlogPostAccordionComponent ],
    imports: [ IonicModule, CommonModule ]
})

export class ComponentsModule {}