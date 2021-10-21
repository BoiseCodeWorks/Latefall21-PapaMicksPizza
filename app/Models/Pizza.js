import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"


export class Pizza {
constructor(data){
  this.id = data.id || generateId()
  this.name = data.name
  this.crust = data.crust
  this.sauce = data.sauce
  this.price = 10
}

get Template(){
  return`
  <div class="col-3 bg-light shadow rounded">
  <div class="row">
    <div class="col-12 bg-primary p-5">${this.name} </div>
    <button class="btn btn-success" onclick="app.pizzasController.removePizza('${this.id}')" > fulfill order </button>
    <div class="col-12 p-4">
      <b>Pie Fixings</b>
      <div class="row  bg-light darken-20  shadow-inset">
        <div class="col-12">${this.crust}</div>
        <div class="col-12">${this.sauce}</div>
      </div>
    </div>
    <div class="col-12 p-4 ">
      <b>Toppings</b>
      <div class="row  bg-light darken-20  shadow-inset">
       ${this.getToppings()}
      </div>
    </div>
    <div class="col-12 text-end">Total: $${this.price}</div>
  </div>
  <form class="row align-items-end" onsubmit="app.toppingsController.createTopping('${this.id}')">
        <div class="col-10">
          <input type="text" class="form-control" name="toppingName" id="" aria-describedby="helpId" placeholder="add topping">
        </div>
        <button class="btn btn-dark col-2"> add topping</button>
        </form>
</div>
  `
}


getToppings(){
  // get toppings from ProxyState that have this pizza's id as their pizzaId
  const toppings = ProxyState.toppings.filter(t => this.id == t.pizzaId)
  let template = ''
  // reset price before calculation
  this.price = 10
  toppings.forEach(t => {
    // adding template to little template
    template += t.Template
    // adding price of toppings to this.price
    this.price += t.price
  })
  return template
}

}