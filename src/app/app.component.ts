import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'japan-food';
  public multiplicator: number = 1;

  public menuPosition: string = 'translateX(-92%)'

  public toggleMenu(): void {
    if (this.menuPosition === 'translateX(-92%)') {
      this.menuPosition = 'translateX(0px)';
    } else {
      this.menuPosition = 'translateX(-92%)'
    }
  }

  //Temporary variable
public price = 14.95
//___________________
  public showPrice() {
    let target = <HTMLSelectElement>event.target;
    let div = target.parentElement;
    console.log(div)
    let shownPrice = div.querySelector('.pricing')
    // When objects ready remake this.price => this.dishes.....
    shownPrice.textContent = '$' + String((this.price * parseFloat(target.options[target.selectedIndex].text)).toFixed(2));
  } 
}
