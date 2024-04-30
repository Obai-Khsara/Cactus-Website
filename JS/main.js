// Show and Hide menu in mobile
const navMenu = document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle")
const navClose = document.getElementById("nav-close")
if(navToggle){
    navToggle.addEventListener("click", ()=>{
        navMenu.classList.add("show-menu")
    })
}
if(navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove("show-menu")
    })
}

// Remove Menu Mobile if I click on any option from menu i closed the menu
const navLink = document.querySelectorAll(".nav__link")
const linkAction = () =>{
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))


// Change Background Header when we scrool down
const blurHeader = ()=> {
    const header = document.getElementById("header")
    this.scrollY >= 50 ? header.classList.add("blur-header") : header.classList.remove("blur-header")
}
window.addEventListener("scroll", blurHeader)


// Show Scroll up
const scrollup = () => {
    const scrollUp = document.getElementById("scroll-up")
    window.scrollY >= 350 ? scrollUp.classList.add("show-scroll") : scrollUp.classList.remove("show-scroll")
}

window.addEventListener("scroll", scrollup)

// Scroll Section Active Link
const sections = document.querySelectorAll("section[id]")
const scrollActive = ()=>{
    const scrollDown = window.scrollY
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 58
        const sectionId = current.getAttribute("id")
        const sectionClass = document.querySelector(`.nav__menu a[href*=${sectionId}]`)

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add("active-link")
        }else{
            sectionClass.classList.remove("active-link")
        }
    })
}
window.addEventListener("scroll", scrollActive)


// Animation By Scrollreval Library
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2500,
    delay: 300
})
sr.reveal(".home__img, .new__data, .care__img, .contact__content, .footer")
sr.reveal(".home__data, .care__list, .contact__img",{delay: 500})
sr.reveal(".new__card",{delay: 500})
sr.reveal(".shop__card",{interval: 100})