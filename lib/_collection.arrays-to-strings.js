module.exports = (collection) =>{
  const flattend = collection.map(data => data.toString())
  return flattend
}
