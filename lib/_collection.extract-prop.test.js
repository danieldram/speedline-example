const extractProp = require('./_collection.extract-prop')
const incompleteDataset = require('../mock.dataset.incomplete')


test.skip('extractProp extracts an array of properties from embedded objects in the collection', ()=>{
  const result = extractProp(incompleteDataset, 'toppings')
  const expected = [
    ["Mushrooms", "Pepperoni", "Peppers"],
    ["Cheddar", "Garlic", "Oregano"],
    ["Cheddar", "Garlic", "Oregano"]
  ]

  expect(result).toEqual(expected)
})
