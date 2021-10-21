import { toppingService } from "../Services/ToppingService.js"



export class ToppingsController{
  constructor(){
  }


createTopping(pId){
  window.event.preventDefault()
  const form = window.event.target
  let toppingData ={
    name: form.toppingName.value,
    pizzaId: pId
  }

  console.log('creating topping', toppingData)
  toppingService.createTopping(toppingData)
}


}