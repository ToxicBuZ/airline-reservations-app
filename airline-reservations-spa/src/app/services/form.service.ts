import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class FormService {
  constructor(private formBuilder: FormBuilder) {}

  buildLoginForm(): FormGroup {
    return this.formBuilder.group({
      apiKey: ['', [Validators.required]],
    });
  }
}
