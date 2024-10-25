import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent {
  mobileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.mobileForm = this.fb.group({
      mobile: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]{10}$') // Validating a 10-digit mobile number
        ]
      ]
    });
  }

  get mobile() {
    return this.mobileForm.get('mobile'); // You can use `!` here if you want: return this.mobileForm.get('mobile')!;
  }

  onSubmit() {
    if (this.mobileForm.valid) {
      alert('Form Submitted!');
    }
  }
}
