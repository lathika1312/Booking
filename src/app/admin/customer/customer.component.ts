import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  mobileForm: FormGroup;
  showMobileForm: boolean = false; // Variable to control mobile form visibility
  step: number = 1; // Variable to track the current step
  truckTypes: string[] = ['ACE / DOST / PICKUP (1.5 TON)', 'EICHER 14FT (3.5 TON)', 'Heavy Truck'];
  selectedTruck: string = '';
  goodsTypes: string[] = ['Fragile', 'Perishable', 'Heavy Machinery', 'Household Items'];
  selectedGoods: string = '';
  weight: number | null = null;

  constructor(private fb: FormBuilder) {
    this.mobileForm = this.fb.group({
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]]
    });
  }

  ngOnInit(): void {}

  get mobile() {
    return this.mobileForm.get('mobile');
  }

  onTruckSelect() {
    console.log('Selected truck type:', this.selectedTruck);
  }

  onGoodsSelect() {
    console.log('Selected goods type:', this.selectedGoods);
  }

  onNext() {
    this.step = 2; // Move to the next step (show mobile form)
  }

  onSubmit() {
    if (this.mobileForm.valid) {
      console.log('Mobile number submitted:', this.mobileForm.value.mobile);
      // Handle form submission (e.g., API call or navigation)
    }
  }
}
