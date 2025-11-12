import { Injectable } from '@angular/core';
import { Customer } from '../../core/models/customer.model';
@Injectable({
  providedIn: 'root',
})
export class CustomerService  {
   // Mock dataset (replace with HTTP later)
  private data: Customer[] = Array.from({length: 57}).map((_, i) => ({
    id: i + 1,
    name: `Customer ${i + 1}`,
    email: `customer${i + 1}@example.com`,
    plan: (['Basic','Pro','Enterprise'] as const)[i % 3],
    status: (['Active','Past Due','Canceled'] as const)[i % 3],
    createdAt: new Date(2024, (i % 12), (i % 28) + 1).toISOString(),
    mrr: [19, 49, 149][i % 3]
  }));

  list(): Customer[] { return this.data; }
}
