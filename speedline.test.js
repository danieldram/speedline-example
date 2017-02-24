const providedDataset = require('./mock.dataset.provided')
const simpleDataset = require('./mock.dataset.simple')
const incompleteDataset = require('./mock.dataset.incomplete')

const Util = require('./lib')

var printWinners1 = require('./print-winners-1')
var printWinners2 = require('./print-winners-2')

test.skip('Print winners 1 with provided dataset', ()=>{

  const expected = "email2@example.com"
  const result = printWinners1(customers)

  expect(result).toEqual(expected)

})

test.skip('Print winners 2 with provided dataset', ()=>{

  const expected = "email2@example.com"
  const result = printWinners2(customers)

  expect(result).toEqual(expected)

})

test.skip('Print Winners 1 shows John Cena as the winner', ()=>{
  const results = printWinners1(simpleCustomers)
  const expected = "johncena@gmail.com"

  expect(results).toEqual(expected)

})

test.skip('Print Winners 2 shows John Cena as the winner', ()=>{
  const results = printWinners2(simpleCustomers)
  const expected = "johncena@gmail.com"

  expect(results).toEqual(expected)

})

test.skip('Print Winners 2 can handle incomplete datasets and still output John Cena', ()=>{
  const results = printWinners2(incompleteDataset)
  const expected = "johncena@gmail.com"

  expect(results).toEqual(expected)

})

test('Utils can be used to find a unique pizza topppings user', ()=>{

  const expected = [
      {
          "email": 'johncena@gmail.com',
          "toppings": ["Mushrooms", "Pepperoni", "Peppers"]
      }
    ]

  let unique = null
  let dataset = Util.PropMustExist(simpleDataset, 'email')
  let toppings = Util.ExtractProp(dataset, 'toppings')
  toppings = Util.ArraysToStrings(toppings)


  for(topping of toppings){
    let set = Util.FindStringInCollection(dataset, topping, 'toppings')
    if(set.length ==1){
      unique=set
    }
  }

  expect(unique).toEqual(expected)


})


test('Utils can be used to find a unique pizza topppings user', ()=>{

  const expected = [
    {"email": "email2@example.com", "toppings": ["Cheddar", "Garlic", "Oregano"]}
    ]

  let unique = null

  let dataset = Util.PropMustExist(providedDataset, 'email')
  dataset = Util.RequiredArrayPropLength(dataset, 'toppings', 3)

  let toppings = Util.ExtractProp(dataset, 'toppings')
  toppings = Util.ArraysToStrings(toppings)


  for(topping of toppings){
    let set = Util.FindStringInCollection(dataset, topping, 'toppings')
    if(set.length ==1){
      unique=set
    }
  }

  expect(unique).toEqual(expected)


})
