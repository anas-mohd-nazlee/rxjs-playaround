import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'subjects',
    loadChildren: () => import('./subjects/subjects.module').then(m => m.SubjectsModule)
  },
  {
    path: 'creations',
    loadChildren: () => import('./creations/creations.module').then(m => m.CreationsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
