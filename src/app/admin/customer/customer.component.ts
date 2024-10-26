import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  step: number = 1; // Initialize step to 1
  selectedTruck: string = '';
  selectedGoods: string = '';
  weight: number = 0;
  truckTypes: string[] = ['Truck A', 'Truck B', 'Truck C']; // Example truck types
  goodsTypes: string[] = ['Goods A', 'Goods B', 'Goods C']; // Example goods types
  mobileForm: FormGroup;
  customerForm: FormGroup;
  
  // Add the truckCapacity property
  truckCapacity: number = 0; // Initialize to default value
  estimatedFareMin: number = 0; // Initialize estimated fare
  estimatedFareMax: number = 0; // Initialize estimated fare

  constructor(private fb: FormBuilder) {
    // Initialize the forms
    this.mobileForm = this.fb.group({
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });

    this.customerForm = this.fb.group({
      customerType: ['', Validators.required],
      name: ['', Validators.required],
      email: ['']
    });
  }

  ngOnInit(): void {}

  onTruckSelect() {
    // Logic to set truck capacity based on selected truck
    switch (this.selectedTruck) {
      case 'Truck A':
        this.truckCapacity = 10; // Example capacity in tons
        break;
      case 'Truck B':
        this.truckCapacity = 15; // Example capacity in tons
        break;
      case 'Truck C':
        this.truckCapacity = 20; // Example capacity in tons
        break;
      default:
        this.truckCapacity = 0; // Reset if no valid truck selected
    }
  }

  onGoodsSelect() {
    // Logic for goods selection
  }

  onNext() {
    if (this.step === 1) {
      this.step++; // Move to step 2
    } else if (this.step === 2) {
      if (this.mobileForm.valid) {
        this.step++; // Move to step 3 if mobile form is valid
      }
    }
  }

  goBack() {
    if (this.step > 1) {
      this.step--; // Move back one step
    }
  }

  onSubmit() {
    console.log('Submitting Form, Current Step:', this.step);
    
    // Step 2: Mobile Form Submission
    if (this.step === 2 && this.mobileForm.valid) {
      console.log('Mobile Form Submitted:', this.mobileForm.value);
      this.step++; // Move to the next step after submitting mobile form
  
    // Step 3: Customer Form Submission
    } else if (this.step === 3 && this.customerForm.valid) {
      console.log('Customer Form Submitted:', this.customerForm.value);
      
      // Handle your booking confirmation logic here
      this.confirmBooking(); // Finalize the booking or proceed as necessary
      
      // Optionally, you could navigate to the summary step if needed
      this.step++;
    } else {
      console.log('Form is invalid:', this.step === 2 ? this.mobileForm.errors : this.customerForm.errors);
    }
  }
  
  confirmBooking() {
    // Your logic to confirm booking, e.g., API call to save booking information
    console.log('Booking confirmed with details:', {
      truck: this.selectedTruck,
      weight: this.weight,
      goodsType: this.selectedGoods,
      customerDetails: this.customerForm.value,
    });
  
    // Optionally navigate to a confirmation page or display a success message
  }
  

  requestCallback() {
    // Logic for requesting a callback
  }
}
