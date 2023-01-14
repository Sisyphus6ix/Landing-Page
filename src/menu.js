const foodMenu = () => {
    const content = document.getElementById('content')
    const menu = document.createElement('div')
    menu.setAttribute('class', 'food-menu')
    const food = document.createElement('div')
    food.setAttribute('class', 'food-list')

    const foodOne = document.createElement('div')
    const foodOneTitle = document.createElement('h2')
    const foodOneInfo = document.createElement('p')
    const foodOnePrice = document.createElement('h3')
    foodOne.setAttribute('class', 'food-one')
    foodOneTitle.innerText = 'Risotto'
    foodOneInfo.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet'
    foodOnePrice.innerText = '$25'

    const foodTwo = document.createElement('div')
    const foodTwoTitle = document.createElement('h2')
    const foodTwoInfo = document.createElement('p')
    const foodTwoPrice = document.createElement('h3')
    foodTwo.setAttribute('class', 'food-two')
    foodTwoTitle.innerText = 'Pasta carbonara'
    foodTwoInfo.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet'
    foodTwoPrice.innerText = '$20'

    const foodThree = document.createElement('div')
    const foodThreeTitle = document.createElement('h2')
    const foodThreeInfo = document.createElement('p')
    const foodThreePrice = document.createElement('h3')
    foodThree.setAttribute('class', 'food-three')
    foodThreeTitle.innerText = 'Gnocchi'
    foodThreeInfo.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet'
    foodThreePrice.innerText = '$33'
    
    content.appendChild(menu)
    menu.appendChild(food)
    food.appendChild(foodOne)
    foodOne.appendChild(foodOneTitle)
    foodOne.appendChild(foodOneInfo)
    foodOne.appendChild(foodOnePrice)
    food.appendChild(foodTwo)
    foodTwo.appendChild(foodTwoTitle)
    foodTwo.appendChild(foodTwoInfo)
    foodTwo.appendChild(foodTwoPrice)
    food.appendChild(foodThree)
    foodThree.appendChild(foodThreeTitle)
    foodThree.appendChild(foodThreeInfo)
    foodThree.appendChild(foodThreePrice)
}

export { foodMenu }