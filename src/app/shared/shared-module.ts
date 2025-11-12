import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Header,
    Sidebar
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports: [
    Header,
    Sidebar
  ]
})
export class SharedModule { }
