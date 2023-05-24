const darkMode = document.querySelector(".switch")
const bodyDarkMode = document.querySelector("body")
darkMode.addEventListener("click", () => {
    bodyDarkMode.classList.toggle("darkMode")
    if(darkMode.innerHTML === `<i class="fa-solid fa-moon"></i>`){
        darkMode.innerHTML = `<i class="fa-solid fa-sun"></i>`
    }else{
        darkMode.innerHTML = `<i class="fa-solid fa-moon"></i>`
    }
})

