import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatCardModule } from '@angular/material/card';
import { AppCarouselComponent } from './app-carousel/app-carousel.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HomeComponent, AppCarouselComponent],
  imports: [CommonModule, HomeRoutingModule, MatCardModule, MatIconModule,MatButtonModule],
})
export class HomeModule {}
