import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainRoutingModule } from './domain-info-routing.module';
import { DomainInfoComponent } from './domain-info.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  imports: [
    CommonModule,
    DomainRoutingModule,
    MatGridListModule,
    ScrollingModule,
    MatPaginatorModule
  ],
  exports: [
    MatCardModule,
    MatGridListModule,
    ScrollingModule,
    MatPaginatorModule
  ],
  declarations: [DomainInfoComponent]
})
export class DomainInfoModule { }
