var status = function (response) {
  if (response.status !== 200) {
    return Promise.reject(new Error(response.statusText))
  }
  return Promise.resolve(response)
}

var json = function (response) {
  return response.json()
}

fetch('http://www.mocky.io/v2/594e5ae0110000a019d6d3c8', {
  method: 'post',
  body: 
})
  .then(status)
  .then(json)
  .then(function (data) {
    console.log('data', data)
  })
  .catch(function (error) {
    console.log('error', error)
  })
