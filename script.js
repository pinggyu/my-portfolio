/* ===============================================
 * HEADER SECTION
 * ==============================================*/

// Mobile slide-out navigation & disable scroll when menu modal is open
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const mobileNav = document.getElementById('mobileNavContainer');
const body = document.querySelector("body");
let mobileNavOpen = false;

const showMobileNav = (e) => {
    if (!mobileNavOpen){
        mobileNav.style.transform = "translateX(0%)";
        menuBtn.removeEventListener('click', showMobileNav);
        mobileNavOpen = true;
        body.style.overflow = "hidden";
    }
}

const hideMobileNav = (e) => {
    if (mobileNavOpen){
        mobileNav.style.transform = "translateX(100%)";
        mobileNavOpen = false;   
        menuBtn.addEventListener('click', showMobileNav);
        body.style.overflow = "auto";     
    }
}

menuBtn.addEventListener('click', showMobileNav);
closeBtn.addEventListener('click', hideMobileNav);

/* ===============================================
 * PROJECTS SECTION
 * ==============================================*/

// Play project demos on hover

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



