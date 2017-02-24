
const propExists = require('./_collection.property-must-exist')
const incompleteDataset = require('../mock.dataset.incomplete')

test.skip('PropExists produces a new array without the empty prop objects', ()=>{
  const result = propExists(incompleteDataset, 'email')
  const expected = [
    {
        "email": 'johncena@gmail.com',
        "toppings": ["Mushrooms", "Pepperoni", "Peppers"]
    },
    {
        "email": "ultimatewarrior@example.com",
        "toppings": ["Cheddar", "Garlic", "Oregano"]
    }
  ]

  expect(result).toEqual(expected)

})
