import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { ArticlesComponent } from "./articles/articles.component";
import { ArticleComponent } from "./article/article.component";

@NgModule({
    declarations: [
        ArticlesComponent,
        ArticleComponent
    ],
    imports: [
        IonicModule,
        CommonModule
    ],
    exports: [
        ArticlesComponent
    ]
})
export class ComponentsModule {}