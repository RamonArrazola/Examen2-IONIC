import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { ArticlesComponent } from "./articles/articles.component";
import { ArticleComponent } from "./article/article.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
    declarations: [
        ArticlesComponent,
        ArticleComponent,
        HeaderComponent
    ],
    imports: [
        IonicModule,
        CommonModule
    ],
    exports: [
        ArticlesComponent,
        HeaderComponent
    ]
})
export class ComponentsModule {}