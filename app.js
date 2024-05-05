const url = 'https://thronesapi.com/api/v2/Characters'
const body = document.querySelector('body')
const select = document.querySelector('#character-list')
const image = document.querySelector('#image')
const section = document.createElement('section')
const options = document.createElement('option')
const name = document.createElement('h1')
options.textContent = 'Elge tu personaje favorito'
section.setAttribute('class', 'flex')
body.appendChild(section)
section.appendChild(select)
select.appendChild(options)
section.appendChild(image)
//STYLE SECTION
const getGOT = async (url) => {
  await fetch(url, {
    method: 'GET'
  })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      data.map((el) => {
        const options = document.createElement('option')
        options.setAttribute('value', el.id)
        options.textContent = el.fullName
        select.appendChild(options)
      })
    })
    .catch((error) => {
      console.log(error)
    })
}
getGOT(url)
let person = 0
select.addEventListener('input', (e) => {
  person = e.target.value
  getPerson(person)
  name.innerHTML = ''
})
const getPerson = async (person) => {
  await fetch(`${url}/${person}`)
    .then((response) => response.json())
    .then((data) => {
      const containImage = document.querySelector('.contain-image')
      const img = document.querySelector('img')
      const contImg = document.createElement('div')
      img.setAttribute('alt', data.image)
      img.setAttribute('src', data.imageUrl)
      name.textContent = data.fullName
      image.appendChild(containImage)
      image.appendChild(name)
      containImage.appendChild(img)
    })
    .catch((error) => {
      console.log(error)
    })
}
