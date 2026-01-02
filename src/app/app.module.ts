import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ListComponent } from './list/list.component';
import { TableComponent } from './table/table.component';
import { CardComponent } from './card/card.component';
import { ProductComponent } from './product/product.component';
import { MatDividerModule } from '@angular/material/divider';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent} from './projects/projects.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TableComponent,
    CardComponent,
    ProductComponent,
   ProjectComponent,
   ProjectsComponent,
   ProductsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
