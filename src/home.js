const pageHeader = () => {
    const content = document.getElementById('content')
    
    const header = document.createElement('div')
    header.setAttribute('class', 'header')
    content.appendChild(header)
    
    
    const title = document.createElement('h1')
    title.innerText = 'This the page title'
    header.appendChild(title)
    
    const link1 = document.createElement('a')
    link1.setAttribute('href', '#')
    link1.innerText = 'link1'
    
    const link2 = document.createElement('a')
    link2.setAttribute('href', '#')
    link2.innerText = 'link2'
    
    const link3 = document.createElement('a')
    link3.setAttribute('href', '#')
    link3.innerText = 'link3'
    
    header.appendChild(link1)
    header.appendChild(link2)
    header.appendChild(link3)
}
