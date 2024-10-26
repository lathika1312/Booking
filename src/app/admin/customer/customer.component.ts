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
  weightUnit: 'kg' | 'ton' = 'kg'; // Default weight unit
  truckTypes: string[] = [
    'ACE / DOST / PICKUP (1.5 TON)',
    'EICHER 14FT (3.5 TON)',
    'EICHER 17FT (5 TON)',
    'EICHER 19FT (7 TON)',
    '20FT CONTAINER (6.5 TON)',
    'EICHER PRO 22FT (10 TON)',
    '32FT CONTAINER (7/8 TON)',
    '32FT CONTAINER (15 TON)',
    '20 / 32 / 40 FT All Side Open TRAILER',
    'SELECT TRUCK LATER',
    'LORRY/TAURUS (18/21/25 TON)',
    '32FT CONTAINER (18 TON)'
  ]; // Updated truck types

  goodsTypes: string[] = [
    'Industrial Machinery',
    'Household Goods',
    'Parcel Service / luggage transport (Not Available)',
    'Fresh Fruits / Vegetables / Coconut',
    'FMCG / Packed Food Products',
    'Healthcare / Pharmacy Products / Medicines',
    'Cement / Bricks / Sand',
    'Chemicals Powder / Liquid Barrels',
    'Agriculture Fertilizer (Not available)',
    'Electronic Goods / Home Appliances',
    'Paper / Packaging / Printed Material',
    'Electrical Transformer / Panels / Equipments',
    'Solar / Battery / Inverter Products',
    'Ceramic / Hardware Supplies',
    'Electrical Wires / Cables',
    'Books / Stationery / Toys / Gifts',
    'Aluminium / Steel / Metal Products',
    'Building scaffolding / Construction Material',
    'Paint / Houseware Supplies',
    'Textile / Garments',
    'Plastic / PVC / Rubber Pipes',
    'Machine / Auto Parts',
    'Exhibitions / Event Supplies',
    'Furniture / Plywood / Laminates',
    'Go Karts / Dirt Bikes / Bulk E.V',
    'Pet Transport',
    'ODC Consignment',
    'Metal / Plastic Scrap',
    'Plants / Pots',
    'Spices / Dry fruits',
    'Manufacturing Plant Machines',
    'One Scooter or Bike',
    'Rice/Wheat/Grains',
    'Books',
    'Paper Roll / Packing items',
    'Others',
    'Marble / Granite',
    'Office shifting',
    'LED Sign Boards',
    'Frozen Items',
    'Old Servers / Computers / Laptops',
    'Animal Feeds',
    'Animals / livestock',
    'Drones / Robots',
    'Wood Chips & Waste items'
  ]; // Updated goods types

  mobileForm: FormGroup;
  customerForm: FormGroup;

  truckCapacity: number = 0; // Initialize truck capacity
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

  // Handle truck type selection
  onTruckSelect() {
    // Logic to set truck capacity based on selected truck
    switch (this.selectedTruck) {
      case 'ACE / DOST / PICKUP (1.5 TON)':
        this.truckCapacity = 1.5;
        break;
      case 'EICHER 14FT (3.5 TON)':
        this.truckCapacity = 3.5;
        break;
      case 'EICHER 17FT (5 TON)':
        this.truckCapacity = 5;
        break;
      case 'EICHER 19FT (7 TON)':
        this.truckCapacity = 7;
        break;
      case '20FT CONTAINER (6.5 TON)':
        this.truckCapacity = 6.5;
        break;
      case 'EICHER PRO 22FT (10 TON)':
        this.truckCapacity = 10;
        break;
      case '32FT CONTAINER (7/8 TON)':
        this.truckCapacity = 7.5; // Average for 7/8 ton
        break;
      case '32FT CONTAINER (15 TON)':
        this.truckCapacity = 15;
        break;
      case '20 / 32 / 40 FT All Side Open TRAILER':
        this.truckCapacity = 20; // Example capacity
        break;
      case 'SELECT TRUCK LATER':
        this.truckCapacity = 0; // No specific capacity
        break;
      case 'LORRY/TAURUS (18/21/25 TON)':
        this.truckCapacity = 25; // Highest capacity in this range
        break;
      case '32FT CONTAINER (18 TON)':
        this.truckCapacity = 18;
        break;
      default:
        this.truckCapacity = 0; // Reset if no valid truck selected
    }
  }

  // Handle goods type selection
  onGoodsSelect() {
    // Logic for goods selection
  }

  // Move to the next step
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

  // Handle mobile form submission
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
      weightUnit: this.weightUnit,
      goodsType: this.selectedGoods,
      customerDetails: this.customerForm.value,
    });
  
    // Optionally navigate to a confirmation page or display a success message
  }
  
  requestCallback() {
    // Logic for requesting a callback
    console.log('Callback requested for mobile:', this.mobileForm.value.mobile);
  }
}
