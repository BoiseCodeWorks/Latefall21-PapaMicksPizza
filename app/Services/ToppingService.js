import { ProxyState } from "../AppState.js"
import { Topping } from "../Models/Topping.js"



class ToppingService{
createTopping(toppingData){
  
  console.log('topping Data in service', toppingData)
  const topping = new Topping(toppingData)
  ProxyState.toppings = [...ProxyState.toppings,topping]
}

}

export const toppingService = new ToppingService()