const findStringInCollection = require('./_collection.find-string-in-collection')
const incompleteDataset = require('../mock.dataset.incomplete')

test.skip('findStringInCollection produces a new array of matched strings in collection', ()=>{

  const result = findStringInCollection(incompleteDataset, 'Mushrooms,Pepperoni,Peppers', 'toppings')
  const expected = [
    {
        "email": 'johncena@gmail.com',
        "toppings": ["Mushrooms", "Pepperoni", "Peppers"]
    }
  ]

  expect(result).toEqual(expected)

})
