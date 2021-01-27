export function reqToData () {
    return fetch('/category/dataposition')
      .then((response) =>{
        return response.json()
      })
      .then((data) => data)
  }