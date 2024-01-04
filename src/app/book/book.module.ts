import { NgModule } from '@angular/core';
import { BookComponent } from './book/book.component';
import { BookRoutingModule } from './book-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BookIntroductionCardComponent } from './book-introduction-card/book-introduction-card.component';

@NgModule({
  declarations: [BookComponent, BookIntroductionCardComponent],
  imports: [SharedModule, BookRoutingModule],
  exports: [BookComponent, BookIntroductionCardComponent],
})
export class BookModule {}
