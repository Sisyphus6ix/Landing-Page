const contactInfo = () => {
    const holder = document.getElementById('holder')
    const infoDiv = document.createElement('div')
    infoDiv.setAttribute('class', 'contact-div')

    const info = document.createElement('div')
    info.setAttribute('class', 'contact-info')
    const map = document.createElement('div')
    map.setAttribute('class', 'map')
    const phoneInfo = document.createElement('div')
    phoneInfo.setAttribute('class', 'phone-info')
    const addressInfo = document.createElement('div')
    addressInfo.setAttribute('class', 'address-info')

    const phoneNum = document.createElement('p')
    const phonePic = document.createElement('img')
    phonePic.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Red_Phone_Font-Awesome.svg/768px-Red_Phone_Font-Awesome.svg.png'
    phoneNum.innerText = ': 123-456-7890'
    const locationAddress = document.createElement('p')
    locationAddress.innerText = ': Santa Croce, 500, 30100 Tronchetto VE, Italy'
    const locationPic = document.createElement('img')
    locationPic.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Go-home.svg/2048px-Go-home.svg.png'
    const location = document.createElement('img')
    location.setAttribute('src', 'https://www.pointsandtravel.com/wp-content/uploads/2013/11/Snip20150905_266.png')

    holder.appendChild(infoDiv)
    infoDiv.appendChild(info)
    infoDiv.appendChild(map)
    info.appendChild(phoneInfo)
    info.appendChild(addressInfo)
    phoneInfo.appendChild(phonePic)
    phoneInfo.appendChild(phoneNum)
    addressInfo.appendChild(locationPic)
    addressInfo.appendChild(locationAddress)
    map.appendChild(location)
}

export { contactInfo }