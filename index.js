function submitData(name, email) {
  const userInfo = {
    name: name,
    email: email
  }

  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(userInfo)
  })
    .then(res => res.json())
    .then(data => {
      console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$', data)
      const p = document.createElement('p')
      p.textContent = data.id
      document.body.append(p)
    })
    .catch(err => document.querySelector('body').append('Unauthorized Access'))
}