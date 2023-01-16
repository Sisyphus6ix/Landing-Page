const homePage = () => {
    const holder = document.getElementById('holder')
    holder.setAttribute('id', 'holder')
    const main = document.createElement('div')
    main.setAttribute('class', 'main')
    const message = document.createElement('p')
    message.setAttribute('class', 'message')
    message.innerText = 'Your local fan favorite!'
    const image = document.createElement('img')
    image.src = 'https://www.idlememe.com/wp-content/uploads/2021/10/salt-bae-meme-idlememe.jpg'
    const message2 = document.createElement('p')
    message2.setAttribute('class', 'message')
    message2.innerText = 'Serving you since 1890'

    holder.appendChild(main) 
    main.appendChild(message)
    main.appendChild(image)
    main.appendChild(message2)
}

export { homePage }