import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  @defer {
    <app-mini-card>
    </app-mini-card>
  } @placeholder (minimum 2s) {
    <img alt="loading..." src="assets/loading.gif" />
  }
  `,
  styles: []
})
export class AppComponent {
  title = 'ever-evolving';
}
