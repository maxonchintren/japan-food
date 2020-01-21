import { Injectable } from '@angular/core';

interface dish {
  readonly name: string,
  price: number,
  amount: number,
  photo_url: string,
  description: string
}

interface order {
  name : string;
  phone: number;
  people: number;
  dishes: dish[],
  total_cost: number
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }
//////////
  public orderDishes: dish[] = [
    { name: 'california sushi',
      price: 14.95,
      amount: 0,
      photo_url: "./assets/images/dish-1.png",
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.'
    },
    { name: 'traditional wok',
      price: 17.95,
      amount: 0,
      photo_url: "./assets/images/dish-2.png",
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.' 
    },
    { name: 'poke bowl',
      price: 18.95,
      amount: 0,
      photo_url: "./assets/images/dish-3.png",
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.'
    },
    { name: 'fresh salmon',
      price: 21.20,
      amount: 0,
      photo_url: "./assets/images/dish-4.png",
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.'
    },
    { name: 'avacado sushi',
      price: 12.50,
      amount: 0,
      photo_url: "./assets/images/dish-5.png",
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.'
    },
    { name: 'king sushi',
      price: 19.75,
      amount: 0,
      photo_url: "./assets/images/dish-6.png",
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.'
    },
  ]
/////
  public showPrice() {
    let target = <HTMLSelectElement>event.target;
    let div = target.parentElement.parentElement;
    let shownPrice = div.querySelector('.pricing')
    let targetDishName = div.querySelector('.dish__name')
    for (let dish of this.orderDishes) {
      if(dish.name === targetDishName.textContent) {
        shownPrice.textContent = '$' + String((dish.price * parseFloat(target.options[target.selectedIndex].text)).toFixed(2));
      }
    }
  } 

/////
  public addDishToOrder(name) {
    let target = <HTMLButtonElement>event.target;
    let countField = target.parentElement.parentElement.querySelector('select');
    let count = parseFloat(countField.options[countField.selectedIndex].text)
    for (let dish of this.orderDishes) {
      if (dish.name === name && dish.amount + count <= 6) {
        dish.amount += count
      }
    }
  }

////
  public totalCost() {
    let field = document.querySelector('.total-cost');
    let result: number = 0;
    for (let dish of this.orderDishes) {
      result += dish.price * dish.amount;
    }
    field.textContent = 'Total: $' + String(result.toFixed(2));
  }

//// 
  public changeAmount(dish) {
    let target = <HTMLInputElement>event.target
    dish.amount = parseFloat(target.value);
  }

}
  

