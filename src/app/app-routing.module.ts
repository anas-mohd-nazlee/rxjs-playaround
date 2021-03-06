import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'subjects',
    loadChildren: () => import('./subjects/subjects.module').then(m => m.SubjectsModule)
  },
  {
    path: 'creations',
    loadChildren: () => import('./creations/creations.module').then(m => m.CreationsModule)
  },
  {
    path: 'utilities',
    loadChildren: () => import('./utilities/utilities.module').then(m => m.UtilitiesModule)
  },
  {
    path: 'combinations',
    loadChildren: () => import('./combination/combinations.module').then(m => m.CombinationsModule)
  },
  {
    path: 'filtering',
    loadChildren: () => import('./filtering/filtering.module').then(m => m.FilteringModule)
  },
  {
    path: 'transformations',
    loadChildren: () => import('./transformations/transformations.module').then(m => m.TransformationsModule)
  },
  {
    path: 'multicasting',
    loadChildren: () => import('./multicasting/multicasting.module').then(m => m.MulticastingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
