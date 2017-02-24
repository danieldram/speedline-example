const Util = require('./lib')

module.exports = (dataset) => {

  let unique = null

  dataset = Util.PropMustExist(dataset, 'email')
  dataset = Util.RequiredArrayPropLength(dataset, 'toppings', 3)

  let toppings = Util.ExtractProp(dataset, 'toppings')
  toppings = Util.ArraysToStrings(toppings)


  for(topping of toppings){
    let set = Util.FindStringInCollection(dataset, topping, 'toppings')
    if(set.length ==1){
      unique=set
    }
  }

return unique
}
