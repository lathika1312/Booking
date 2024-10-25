import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  truckTypes: string[] = [
    '32FT CONTAINER (15 TON)',
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

  goodsTypes: string[] = [
    'Household Goods',
    'Industrial Machinery',
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
    'Spices / Dry Fruits',
    'Manufacturing Plant Machines',
    'One Scooter or Bike',
    'Rice/Wheat/Grains',
    'Books',
    'Paper Roll / Packing Items',
    'Others',
    'Marble / Granite',
    'Office Shifting',
    'LED Sign Boards',
    'Frozen Items',
    'Old Servers / Computers / Laptops',
    'Animal Feeds',
    'Animals / Livestock',
    'Drones / Robots',
    'Wood Chips & Waste Items'
  ];
  
  selectedGoods: string = '';

  pickupLocation: string = '';
  dropLocation: string = '';
  distance: number | null = null;

  weight: number | null = null;  // New property for weight
  weightUnit: string = 'kg';      // New property for weight unit

  onTruckSelect() {
    console.log('Selected truck type:', this.selectedTruck);
    // Additional logic for truck type selection
  }

  onGoodsSelect() {
    console.log('Selected goods type:', this.selectedGoods);
    // Additional logic for goods type selection
  }

  onNext() {
    console.log('Next button clicked!');
    console.log('Pickup Location:', this.pickupLocation);
    console.log('Drop Location:', this.dropLocation);
    console.log('Distance:', this.distance);
    console.log('Selected Truck:', this.selectedTruck);
    console.log('Selected Goods:', this.selectedGoods);
    // Add logic for moving to the next step
  }
}
