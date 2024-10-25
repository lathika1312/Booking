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
  
  // Updated Truck types
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
  ];
  selectedTruck: string = '';
  
  // Updated Goods types
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
  ];
  selectedGoods: string = '';
  weight: number | null = null;

  constructor(private fb: FormBuilder) {
    // Initialize mobile form with validation
    this.mobileForm = this.fb.group({
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]]
    });
  }

  ngOnInit(): void {}

  // Getter for mobile form control
  get mobile() {
    return this.mobileForm.get('mobile');
  }

  // Handle truck type selection
  onTruckSelect() {
    console.log('Selected truck type:', this.selectedTruck);
  }

  // Handle goods type selection
  onGoodsSelect() {
    console.log('Selected goods type:', this.selectedGoods);
  }

  // Move to the next step
  onNext() {
    this.step = 2; // Move to the next step (show mobile form)
  }

  // Handle mobile form submission
  onSubmit() {
    if (this.mobileForm.valid) {
      console.log('Mobile number submitted:', this.mobileForm.value.mobile);
      // Handle form submission (e.g., API call or navigation)
    }
  }
}
