import { generateId } from "../Utils/generateId.js"



export class Topping{
  constructor(data){
    this.id = data.id || generateId()
    this.name = data.name
    this.price = 1
    this.pizzaId = data.pizzaId
  }

  get Template() {
    return `
    <div>${this.name}</div>
    `
  }
}