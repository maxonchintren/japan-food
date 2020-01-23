import { Component } from '@angular/core';
import { OrderService } from './order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'japan-food';
  public multiplicator: number = 1;
  public dishes = this._orderService.orderDishes;
  public menuPosition: string = 'translateX(-92%)'
  public confirmVis = true;
  public gratitudeVis = false;

  constructor(private _orderService: OrderService) {

  }

  public toggleMenu(): void {
    if (this.menuPosition === 'translateX(-92%)') {
      this.menuPosition = 'translateX(0px)';
    } else {
      this.menuPosition = 'translateX(-92%)'
    }
  }

  showPrice() {
    this._orderService.showPrice();
  }

  addDishToOrder(name) {
    this._orderService.addDishToOrder(name);
  }

  totalCost() {
    this._orderService.totalCost()
  }
  
  changeAmount(dish) {
    this._orderService.changeAmount(dish)
  }

  formOrder() {
    let finalOrder = this._orderService.formOrder();
    let name = <HTMLInputElement>document.getElementById('full-name');
    let phone = <HTMLInputElement>document.getElementById('phone-number');

    if (name.value == '' || phone.value == '' || finalOrder.dishes.length === 0) {
      return false;
    }

    console.log(finalOrder);
    this.confirmVis = false;
    this.gratitudeVis = true;
  }
}


