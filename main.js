const stepsRegistro = document.querySelector('.pasos-registracion')
const buttonAtras = document.querySelectorAll('.buttonAtras')
const buttonSiguiente = document.querySelectorAll('.buttonSiguiente')
const mascaraGradient = document.querySelector('.mascara-gradient')

let leftSteps = 0
let leftMascara = 0

buttonSiguiente.forEach(button => {
    button.addEventListener('click', () => {
        leftSteps -= 100
        leftMascara += 20
        stepsRegistro.style.left = `${leftSteps}vw`
        mascaraGradient.style.left = `calc(${leftMascara}% - 40px)`
    })
})

buttonAtras.forEach(button2 => {
    button2.addEventListener('click', () => {
        leftSteps += 100
        leftMascara -= 20
        stepsRegistro.style.left = `${leftSteps}vw`
        mascaraGradient.style.left = `calc(${leftMascara}% - 40px)`
    })
})
