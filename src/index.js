import { pageHeader } from "/src/home.js";
import { homePageContent } from "/src/home.js";
import { pageFooter } from "/src/home.js";
import { clearPage } from "/src/home.js";

import { foodMenu } from "/src/menu.js";
import { contactInfo } from "/src/contact.js";

clearPage()
pageHeader()
homePageContent()
pageFooter()

let homeBtn = document.getElementsByClassName('button-nav')[0]
let menuBtn = document.getElementsByClassName('button-nav')[1]
let contactBtn = document.getElementsByClassName('button-nav')[2]

homeBtn.addEventListener('click', function (){
    console.log('Home button works')
    // clearPage()
    // pageHeader()
    // homePageContent()
    // pageFooter()
})

menuBtn.addEventListener('click', function (){
    console.log('Menu button works')
    clearPage()
    pageHeader()
    foodMenu()
    pageFooter()
})

contactBtn.addEventListener('click', function (){
    console.log('Contact button works')
    clearPage()
    pageHeader()
    contactInfo()
    pageFooter()
})