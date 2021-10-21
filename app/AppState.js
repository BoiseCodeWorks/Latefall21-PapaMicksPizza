import { Pizza } from "./Models/Pizza.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

const testPizza = new Pizza(
  {
    name: "Hawaiian",
    crust: "Original Gluten+",
    sauce: "Marinara"
  }
)

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  /** @type {import('./Models/Pizza').Pizza[]} */
  pizzas = []
  /** @type {import('./Models/Topping').Topping[]} */
  toppings = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
