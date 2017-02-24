module.exports = (collection, prop, length)=>{
  let filtered_collection = collection.filter(data => data[prop].length==length)
  return filtered_collection
}
