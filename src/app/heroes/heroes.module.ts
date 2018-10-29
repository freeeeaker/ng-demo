import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'

import { InMemoryDataService } from './in-memory-data.service';
import { HeroService } from "./hero.service";
import { MessageService } from "./message.service";

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { HeroesComponent } from "./hero-list/hero-list.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    HeroesRoutingModule,
  ],
  declarations: [
    HeroDetailComponent,
    HeroesComponent
  ],
  providers: [HeroService, MessageService]
})
export class HeroesModule { }
