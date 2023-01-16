import { initializeWebsite } from "/src/default.js";
import { clearDiv } from "/src/default.js";
import { homePage } from "/src/home.js";
import { foodMenu } from "/src/menu.js";
import { contactInfo } from "/src/contact.js";

initializeWebsite()
let buttons = document.querySelectorAll('button')

buttons[0].addEventListener('click', function (){
    clearDiv()
    homePage()
})

buttons[1].addEventListener('click', function (){
    clearDiv()
    foodMenu()
})

buttons[2].addEventListener('click', function (){
    clearDiv()
    contactInfo()
})