module.exports = (collection, string, prop) =>{
  let set = []
  let query
  query = data => data[prop].toString()===string

  for(i of collection){
    let result = collection.find(query)
    let index = collection.findIndex(query)
    let c1 = collection.slice(0, index)
    let c2 = collection.slice(index+1)
    collection = [...c1,...c2]
    result && set.push(result)
  }

  return set
}
