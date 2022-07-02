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
    .then((data) => {
      const p = document.createElement('p')
      p.innerText = data.id
      document.body.append(p)
    })
    .catch(err => console.log(err.message))
}