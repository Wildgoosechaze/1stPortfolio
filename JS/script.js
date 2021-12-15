let navName = document.getElementsByClassName("nav-title")
let proj1 = document.getElementById('BDE')

const bounce = () => {
    proj1.innerHTML = "we did it!"
}

navName.onclick = bounce
proj1.onmousedown= bounce

