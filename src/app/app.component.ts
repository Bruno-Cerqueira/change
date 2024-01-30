import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-card-list appUnionist></app-card-list>
    <app-card-list appCompany></app-card-list>
  `,
  styles: []
})
export class AppComponent {
  title = 'ever-evolving';
}
