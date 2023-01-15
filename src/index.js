import { initializeWebsite } from "/src/home.js";
import { clearPage } from "/src/home.js";
import { pageHeader } from "/src/home.js";
import { homePageContent } from "/src/home.js";
import { pageFooter } from "/src/home.js";
import { foodMenu } from "/src/menu.js";
import { contactInfo } from "/src/contact.js";

initializeWebsite()

let homeBtn = document.getElementsByClassName('button-nav')[0]
let menuBtn = document.getElementsByClassName('button-nav')[1]
let contactBtn = document.getElementsByClassName('button-nav')[2]

homeBtn.addEventListener('click', function (){
    clearPage()
    pageHeader()
    homePageContent()
    pageFooter()
})

menuBtn.addEventListener('click', function (){
    clearPage()
    pageHeader()
    foodMenu()
    pageFooter()
})

contactBtn.addEventListener('click', function (){
    clearPage()
    pageHeader()
    contactInfo()
    pageFooter()
})