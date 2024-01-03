import { NgModule } from '@angular/core';
import { BookComponent } from './book/book.component';
import { BookRoutingModule } from './book-routing.module';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    BookComponent
  ],
  imports: [
    SharedModule,
    BookRoutingModule
  ],
})
export class BookModule { }
