import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BookModule } from '../book/book.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, SharedModule, BookModule],
})
export class HomeModule {}
