import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Custom packages
import { MapStoryComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: MapStoryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapStoryRoutingModule { }
