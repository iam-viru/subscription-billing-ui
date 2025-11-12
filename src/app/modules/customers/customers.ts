import { Component,OnInit  } from '@angular/core';
import { Customer } from '../../core/models/customer.model';
import { CustomerService } from '../../core/services/customer';

@Component({
  selector: 'app-customers',
  standalone: false,
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers implements OnInit {
  ngOnInit(): void {
    this.all = this.customers.list();
    this.applyFilters();
  }
   constructor(private customers: CustomerService) {}
  all: Customer[] = [];
  view: Customer[] = [];
    // search + paging
  q = '';
  page = 1;
  pageSize = 10;
  totalPages = 1;

    onSearch(val: string) {
    this.q = val.toLowerCase().trim();
    this.page = 1;
    this.applyFilters();
  }
  
  changePage(delta: number) {
    this.page = Math.min(this.totalPages, Math.max(1, this.page + delta));
    this.slicePage();
  }

  setPageSize(size: number) {
    this.pageSize = size;
    this.page = 1;
    this.applyFilters();
  }
    private applyFilters() {
    const filtered = !this.q
      ? this.all
      : this.all.filter(c =>
          (c.name + c.email + c.plan + c.status)
            .toLowerCase()
            .includes(this.q)
        );

    this.totalPages = Math.max(1, Math.ceil(filtered.length / this.pageSize));
    const start = (this.page - 1) * this.pageSize;
    this.view = filtered.slice(start, start + this.pageSize);
  }
    private slicePage() {
    const filtered = !this.q
      ? this.all
      : this.all.filter(c =>
          (c.name + c.email + c.plan + c.status)
            .toLowerCase()
            .includes(this.q)
        );
    const start = (this.page - 1) * this.pageSize;
    this.view = filtered.slice(start, start + this.pageSize);
  }

}
