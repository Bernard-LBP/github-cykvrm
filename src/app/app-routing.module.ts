import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocViewComponent } from './doc-view/doc-view.component';

const routes: Routes = [
  {
      path: 'docview/:id',
      component: DocViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }