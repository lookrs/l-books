import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { AboutRoutingModule } from './about-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    SharedModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
