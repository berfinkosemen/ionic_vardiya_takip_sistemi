import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatelistPage } from './createlist.page';

const routes: Routes = [
  {
    path: '',
    component: CreatelistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatelistPageRoutingModule {}
