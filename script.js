// PROJECT DEMO VIDEOS

const demos = document.querySelectorAll('video')

demos.forEach((demo) => {
    demo.addEventListener('mouseover', function (e) {
        this.play();
    });

    demo.addEventListener('mouseleave', function (e) {
        this.pause();
    });
})

// CONTACT FORM 

const formInputs = document.querySelectorAll('.formInput')

formInputs.forEach((formInput) => {
    const label = document.querySelector(`[for="${formInput.id}"]`)

    formInput.addEventListener('focus', () => {
        formInput.classList.add('formInputFocused');
        label.classList.add('inputLabelFocused');
    })
    formInput.addEventListener('blur', () => {
        if (!formInput.value){
            formInput.classList.remove('formInputFocused');
            label.classList.remove('inputLabelFocused');
        }
    })
})
