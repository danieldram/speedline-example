const RequiredArrayPropLength = require('./_collection.prop-array-length-must-equal')

test.skip('RequiredArrayPropLength will provide a filtered collection where provided props have matched length', ()=>{
  let dataset = [
    {
        "email": "email3@example.com",
        "toppings": ["Bacon", "Ham", "Pineapple"]
    },

    {
        "email": "",
        "toppings": ["Parmesan", "Tomatoes"]
    },

    {
        "email": "email4@example.com",
        "toppings": ["Mushrooms", "Pepperoni", "Peppers"]
    },
  ]

  let result = RequiredArrayPropLength(dataset, 'toppings', 3)
  let expected = [
    {
        "email": "email3@example.com",
        "toppings": ["Bacon", "Ham", "Pineapple"]
    },
    {
        "email": "email4@example.com",
        "toppings": ["Mushrooms", "Pepperoni", "Peppers"]
    },

  ]

  expect(result).toEqual(expected)

})
