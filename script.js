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

/* ===============================================
 * CONTACT SECTION
 * ==============================================*/

// Form labels animation

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

// Email click to copy

const copyButton = document.getElementById('clickToCopyBtn');

const clickToCopy = (e) => {
  e.preventDefault();
  copyToClipboard(e.currentTarget.textContent);
  e.target.classList.add('isCopied');
  setTimeout(() => { e.target.classList.remove('isCopied') }, 1200);
}

// Copy to clipboard function, taken from https://www.30secondsofcode.org/blog/s/copy-text-to-clipboard-with-javascript/
// Clipboard API replaces the old document.execCommand()

const copyToClipboard = str => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    return navigator.clipboard.writeText(str);
  return Promise.reject('The Clipboard API is not available.');
};

// Fire the event on click
copyButton.addEventListener('click', clickToCopy);



