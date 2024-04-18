import { Component } from "@angular/core";
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
    selector: "app-wrapper-form",
    styleUrl: "./wrapper-form.scss",
    templateUrl: "./wrapper-form.html"
})
export class WrapperForm {
    constructor(private fb: FormBuilder) {
        this.form.valueChanges.pipe(debounceTime(100)).subscribe(data => console.log(data))

    }

    form = this.fb.group({
        "firstName": ["", Validators.required]
    })

    submit() {
        console.log(this.form.getRawValue())
    }
    
}