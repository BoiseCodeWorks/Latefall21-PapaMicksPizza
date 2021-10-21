import { ProxyState } from "../AppState.js";
import { Pizza } from "../Models/Pizza.js";

class PizzasService{
  constructor(){
    console.log('pizza service loaded');
  }
  createPizza(pizzaData) {
    const pizza = new Pizza(pizzaData)
    ProxyState.pizzas = [pizza,...ProxyState.pizzas]
  }
  removePizza(id) {
    // return all the pizzas in an array that do not have the id that was passed in the parameter
    ProxyState.pizzas = ProxyState.pizzas.filter(p => p.id != id)
    // Deletes toppings on that pizza that was removed
    ProxyState.toppings = ProxyState.toppings.filter(t => t.pizzaId != id)

  }

}

export const pizzasService = new PizzasService()