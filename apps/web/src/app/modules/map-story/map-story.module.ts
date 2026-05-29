import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapStoryRoutingModule } from './map-story-routing.module';

// Custom packages
import { SharedModule } from '../../shared/shared.module';
import { MapStoryComponent } from './pages';

const CUSTOM_MODULES = [SharedModule];
const CUSTOM_COMPONENTS = [MapStoryComponent];

@NgModule({
  declarations: [...CUSTOM_COMPONENTS],
  imports: [
    CommonModule,
    MapStoryRoutingModule,
    ...CUSTOM_MODULES,
    
  ],
})
export class MapStoryModule {}
