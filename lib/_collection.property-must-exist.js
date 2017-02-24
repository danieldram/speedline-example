module.exports = (collection, prop ) => {
  var copied_array = collection.filter(obj =>!!obj[prop])
  return copied_array
}
