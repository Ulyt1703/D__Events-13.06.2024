document.addEventListener('DOMContentLoaded', function() {
    let vinylHome = document.querySelector('.home-vinyl')
    let bulleanFalse = false
    let rotate = 0
    let lastMouseX, lastMouseY

window.addEventListener('scroll', function() {
    if(window.scrollY >= 20) {
        vinylHome.classList.add('rotate-full-circle')
    }
    else {
        vinylHome.classList.remove('rotate-full-circle')
    }
})

vinylHome.addEventListener('mousedown', function(event) {
    bulleanFalse = true
    lastMouseX = event.clientX
    lastMouseY = event.clientY
})

document.addEventListener('mousemove', function(event) {
    if(bulleanFalse) {
        let mouseX = event.clientX
        let mouseY = event.clientY
        let newX = mouseX - lastMouseX
        let newY = mouseY - lastMouseY
        rotate += newX + newY
        vinylHome.style.transform = `rotate(${rotate}deg)`
        lastMouseX = mouseX
        lastMouseY = mouseY
        }
    })

document.addEventListener('mouseup', function() {
    bulleanFalse = false
    })

vinylHome.addEventListener('dragstart', function(event) {
        event.preventDefault()
    })
})