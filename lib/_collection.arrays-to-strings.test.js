const ArraysToStrings = require('./_collection.arrays-to-strings')

test.skip('ArraysToStrings will produce a new array of strings from embedded arrays', ()=>{
  const dataset = [
    ["Mushrooms", "Pepperoni", "Peppers"],
    ["Cheddar", "Garlic", "Oregano"],
    ["Cheddar", "Garlic", "Oregano"]
  ]

  const result = ArraysToStrings(dataset)
  const expected = [
    'Mushrooms,Pepperoni,Peppers',
    'Cheddar,Garlic,Oregano',
    'Cheddar,Garlic,Oregano',
  ]

  expect(result).toEqual(expected)
})
