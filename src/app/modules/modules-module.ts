import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dashboard } from './dashboard/dashboard';
import { Customers } from './customers/customers';
import { Invoices } from './invoices/invoices';
import { Settings } from './settings/settings';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Dashboard,
    Customers,
    Invoices,
    Settings
  ],
  imports: [
    CommonModule,
    FormsModule       
  ],
  exports: [
    Dashboard,
    Customers,
    Invoices,
    Settings
  ]
})
export class ModulesModule { }
