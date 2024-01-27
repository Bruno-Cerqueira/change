import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  template: `
  <button (click)="openDialog($event)">Abrir</button>
    <dialog id="dialog">
      <ng-content></ng-content>
    </dialog>
  `,
  styles: ``
})
export class ModalComponent {
  openDialog(event: any): void {
    (document.getElementById("dialog") as HTMLDialogElement).showModal()
  }
}
