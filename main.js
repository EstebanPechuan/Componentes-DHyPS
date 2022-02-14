const stepsRegistro = document.querySelector('.pasos-registracion')
const buttonsSteps = document.querySelectorAll('.buttonSiguiente')
const mascaraGradient = document.querySelector('.mascara-gradient')

let leftSteps = 0
let leftMascara = 0

buttonsSteps.forEach(button => {
    button.addEventListener('click', () => {
        leftSteps -= 100
        leftMascara += 20
        stepsRegistro.style.left = `${leftSteps}vw`
        mascaraGradient.style.left = `${leftMascara}%`
    })
})
