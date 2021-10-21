import { ProxyState } from "../AppState.js";
import { Pizza } from "../Models/Pizza.js";
import { Topping } from "../Models/Topping.js";




export function saveState(){
  // Save the current proxy state into local storage
  // JSON.Stringiy turns the data into a special version of a string
  localStorage.setItem('PizzaApp', JSON.stringify({
    pizzas: ProxyState.pizzas,
    toppings: ProxyState.toppings
  }))
}

export function loadState(){
  // get data from local storage by same name saved
  // JSON.parse reads that special string and turns it back into real data
  let data = JSON.parse(localStorage.getItem('PizzaApp'))
  console.log('loaded data', data)
  // check for if data exists, cause we only want to try this if it does, will error otherwise
  if(data != null){
    // the data gets saved as POJOs so has to be turned back into pizza classes
    ProxyState.pizzas = data.pizzas.map(p => new Pizza(p))
    ProxyState.toppings = data.toppings.map(t => new Topping(t))
  }
}

