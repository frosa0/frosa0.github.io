const navToogle = document.getElementById("nav_toggle");
const navList = document.querySelector(".nav__list");
const navLi = document.querySelectorAll(".nav__li");

navToogle.addEventListener('click', () => {
    navList.classList.toggle("show");
})

for (let i = 0; i < navLi.length; i++) {
    navLi[i].addEventListener("click", function() {
        navList.classList.toggle("show");
    });
}


const contactForm = document.querySelector(".contact_form");
const mailTo = document.querySelector("#mail_to");

contactForm.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    // event.preventDefault(); //evito que se recargue la pagina
    const form = new FormData(this);
    const tempHref = document.getElementById("mail_to").getAttribute("href");
    console.log(tempHref);
    mailTo.setAttribute('href', `${tempHref}?subject=${form.get("name")} ${form.get("email")}&body=${form.get("message")}`)
    mailTo.click();
}
    