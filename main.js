
// let img = document.createElement('img')

// img.src = "https://avatars.mds.yandex.net/i?id=6d413cd6a92d1c36997c18b77b429288a23d4186-10125837-images-thumbs&n=13"

// body.appendChild(img)


// let text = document.createElement('p')

// text.textContent = "Hello world"

// body.appendChild(text)

// document.querySelector('h2').remove()


// let hr = document.createElement('hr')

// body.appendChild(hr)


// let ism = prompt('Ismingizni kiriting: ')



let body = document.querySelector('body')
body.style.background = 'orange'
body.style.height = '100vh'
body.style.display = 'flex'
body.style.justifyContent = 'center'
body.style.alignItems = 'center'

let ism = prompt('Matn kiriting: ')

let title = document.createElement('h1')

title.textContent = ism

title.style.textAlign = 'center'
title.style.fontSize = '80px'

body.append(title)