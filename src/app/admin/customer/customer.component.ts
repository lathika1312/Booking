import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  truckTypes: string[] = ['ACE / DOST / PICKUP (1.5 TON)', 'EICHER 14FT (3.5 TON)', 'Heavy Truck'];
  selectedTruck: string = '';

  goodsTypes: string[] = ['Fragile', 'Perishable', 'Heavy Machinery', 'Household Items'];
  selectedGoods: string = '';

  pickupLocation: string = '';
  dropLocation: string = '';
  distance: number | null = null;

  onTruckSelect() {
    console.log('Selected truck type:', this.selectedTruck);
    // Additional logic for truck type selection
  }

  onGoodsSelect() {
    console.log('Selected goods type:', this.selectedGoods);
    // Additional logic for goods type selection
  }
}
