const form = document.querySelector('.form')
const formInputs = [...form.children]
    .filter(element => element.nodeName === 'INPUT')
const formTextarea = document.querySelector('.form__textarea')

form.addEventListener('submit', event => {
    event.preventDefault()

    // If input is empty, show error messages
    formInputs.forEach(input => {
        let smallTag = input.nextElementSibling
        if(input.value.trim() === '') {
            input.classList.add('input-error')

            const errorText = document.createTextNode('This field can\'t be empty')
            smallTag.appendChild(errorText)
            smallTag.classList.add('input-error')
        }

        if(formTextarea.value.trim() === '') {
            formTextarea.classList.add('input-error')
        }
    })
})

// Defaults input styles when user type in them after error messages
formInputs.forEach(input => {
    input.addEventListener('keydown', () => {
        let smallTag = input.nextElementSibling

        if(input.classList.contains('input-error')) {
            input.classList.remove('input-error')
            smallTag.classList.remove('input-error')
            smallTag.removeChild(smallTag.firstChild) // remove text from tag
        }
    }) 
})