import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DomainInfoComponent } from './domain-info.component';

const routes: Routes = [
  {
    path: '',
    component: DomainInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomainRoutingModule { }
