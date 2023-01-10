const pageHeader = () => {
    const content = document.getElementById('content')
    const header = document.createElement('div')
    header.setAttribute('class', 'header')
    content.appendChild(header)
    
    const title = document.createElement('h1')
    title.innerText = 'Ryangweenee'
    title.setAttribute('class', 'title')
    header.appendChild(title)
    
    const navLinks = document.createElement('div')
    navLinks.setAttribute('class', 'links')
    header.appendChild(navLinks)
    const link1 = document.createElement('a')
    link1.setAttribute('href', '#')
    link1.innerText = 'Home'
    const link2 = document.createElement('a')
    link2.setAttribute('href', '#')
    link2.innerText = 'Menu'
    const link3 = document.createElement('a')
    link3.setAttribute('href', '#')
    link3.innerText = 'About'
    
    navLinks.appendChild(link1)
    navLinks.appendChild(link2)
    navLinks.appendChild(link3)
}

const homePageContent = () => {
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

    content.appendChild(main) 
    main.appendChild(message)
    main.appendChild(image)
    main.appendChild(message2)
}

const pageFooter = () => {
    const footer = document.createElement('div')
    footer.setAttribute('class', 'footer')
    const footerInfo = document.createElement('p')
    footerInfo.innerText = 'Copyright © 2023 Sisyphus6ix'
    
    content.appendChild(footer)
    footer.appendChild(footerInfo)
}


export { pageHeader }
export { homePageContent }
export { pageFooter }