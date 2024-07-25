import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SortPipe } from './pipes/sort.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TopbarComponent } from './components/topbar/topbar.component';

@NgModule({
  declarations: [
    SortPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    //Components
    NavbarComponent,
    TopbarComponent,
  ],
  exports: [
    NavbarComponent,
    TopbarComponent,
  ],
  providers: [
    SortPipe
  ],
})
export class SharedModule { }
