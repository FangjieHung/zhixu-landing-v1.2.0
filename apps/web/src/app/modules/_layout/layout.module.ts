import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Custom packages
import { SharedModule } from '../../shared/shared.module';
import { DefaultContainerComponent, FooterComponent } from './pages';

const CUSTOM_MODULES = [SharedModule];
const CUSTOM_COMPONENTS = [DefaultContainerComponent, FooterComponent];

@NgModule({
  declarations: [
    ...CUSTOM_COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    ...CUSTOM_MODULES
  ]
})
export class LayoutModule { }
