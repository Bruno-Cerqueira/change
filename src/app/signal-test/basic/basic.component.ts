import { Component, signal, computed } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="submit()">
      <input type="text" formControlName="name">
      <button [disabled]="!form.valid">Adicionar</button>
    </form>

    @for (team of teams(); track team.id) {
      <p>
        {{ team.id + " " + team.name }}
      </p>
    } 

    <h2>Maximum participants: {{ maximum }}</h2>
    <p>Rest teams to add; {{ computedValue() }} </p>
  `,
  styles: ``
})
export class BasicComponent {
  constructor(private formBuilder: FormBuilder) {}

  maximum = 10
  form = this.formBuilder.group({
    name: ["", Validators.required]
  })

  teams = signal([{
    id: 1,
    name: "Japan"
  },{
    id: 2,
    name: "China"
  }])

  computedValue = computed(() => {
    return this.maximum - this.teams().length
  })

  submit() {
    console.log(this.form.value)
    this.teams.set([...this.teams(), {
      id: this.teams().length + 1,
      name: this.form.value.name || "default",
    }])
    this.form.reset()
  }
}
