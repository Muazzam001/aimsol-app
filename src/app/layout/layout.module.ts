import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
  ]
})
export class LayoutModule { }
