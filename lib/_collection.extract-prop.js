module.exports = (collection, prop)=>{
  const set = collection.map(data => data[prop])
  return set
}
