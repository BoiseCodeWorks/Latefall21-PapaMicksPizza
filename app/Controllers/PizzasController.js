import { ProxyState } from "../AppState.js";
import { pizzasService } from "../Services/PizzasService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";


function _draw(){
  // get all the pizzas in ProxyState/AppState
  const pizzas = ProxyState.pizzas
  let template =''
  // Adds the GET template from the pizza model to the "template" for each pizza in the pizzas array/collection
  pizzas.forEach(p => template += p.Template)
  // console.log('drawing pizzas ',template)
  document.getElementById('pizzas').innerHTML = template

  // FIXME dont do this, harder to debug, more lines = easier to debug
  // document.getElementById('pizzas').innerHTML = ProxyState.pizzas.map(p => p.Template).join('\n')
}

export class PizzasController{
  constructor(){
    
    ProxyState.on('pizzas', _draw)
    // Saves the pizza once added to ProxyState.pizzas
    ProxyState.on('pizzas', saveState)
    // When I add a topping re-draw the pizza
    ProxyState.on('toppings', _draw)
    ProxyState.on('toppings', saveState)
    
    console.log('pizza controller loaded');
    // loads pizzas from local when page is loaded
    loadState()
    _draw()
  }

  createPizza(){
    window.event.preventDefault()
    const form = window.event.target
    const rawPizza ={
      name: form.name.value,
      crust: form.crust.value,
      sauce: form.sauce.value
    }
    console.log(rawPizza)

    pizzasService.createPizza(rawPizza)

    form.reset()
  }

  removePizza(id){
    pizzasService.removePizza(id)
  }
}