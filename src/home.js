
export default const Home = () => { 
    holder.setAttribute('id', 'holder')// ?? where is this var coming from?
    
    const main = document.createElement('div')
    const message = document.createElement('p')
    const image = document.createElement('img')
    const message2 = document.createElement('p')
    
    //Set attributes
    main.setAttribute('class', 'main')
    message.setAttribute('class', 'message')
    message2.setAttribute('class', 'message')
    
    //Set contents
    image.src = 'https://www.idlememe.com/wp-content/uploads/2021/10/salt-bae-meme-idlememe.jpg'
    message.innerText = 'Your local fan favorite!'
    message2.innerText = 'Serving you since 1890'

    //A strectch, but you could just append Home to this in index.js.
    // This works though
    holder.appendChild(main) 
    
    //Apend to main.
    main.appendChild(message)
    main.appendChild(image)
    main.appendChild(message2)
}
