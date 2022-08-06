/* ===============================================
 * HEADER SECTION
 * ==============================================*/

// H1 animation

document.addEventListener("DOMContentLoaded", function(event) { 
  setTimeout(function() {
    document.getElementById('name').classList.remove("isLoading");
  }, 100);
});

// Mobile slide-out navigation & disable scroll when menu modal is open
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const mobileNav = document.getElementById('mobileNavContainer');
const body = document.querySelector("body");
const navLinks = document.querySelectorAll('.mobileNavLink');
let mobileNavOpen = false;

const showMobileNav = (e) => {
    if (!mobileNavOpen){
        mobileNav.style.transform = "translateX(0%)";
        menuBtn.removeEventListener('click', showMobileNav);
        mobileNavOpen = true;
        // prevent scroll while modal is open
        body.style.overflowY = "hidden";
        body.style.height = "100vh";


        about.addEventListener('click', hideMobileNav);
        // close the menu if a link is clicked
        navLinks.forEach((navLink) => {
            navLink.addEventListener('click', hideMobileNav);
        })
    }
}

const hideMobileNav = (e) => {
    if (mobileNavOpen){
        mobileNav.style.transform = "translateX(100%)";
        mobileNavOpen = false;   
        menuBtn.addEventListener('click', showMobileNav);
        body.style.overflowY = "auto";
        body.style.height = "auto";     
    }
}

menuBtn.addEventListener('click', showMobileNav);
closeBtn.addEventListener('click', hideMobileNav);

// Rotate scroll down svg icon on scroll

window.onscroll = function () {
    scrollRotate();
};

const scrollRotate = () => {
    let image = document.getElementById("scrollDownIcon");
    image.style.transform = "rotate(" + -window.pageYOffset/5 + "deg)";
}

/* ===============================================
 * PROJECTS SECTION
 * ==============================================*/

// Play project demos on hover

const demos = document.querySelectorAll('video');

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

// Handle form submit (Formspree)

const contactForm = document.getElementById('contactForm');

async function handleSubmit(e) {
    e.preventDefault();
    const status = document.getElementById("formStatus");
    const data = new FormData(e.target);
    fetch(e.target.action, {
    method: contactForm.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
    }).then(response => {
    if (response.ok) {
        status.innerHTML = "Thanks for your submission! I will get back to you shortly.";
        contactForm.reset();
    } else {
        response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
            status.innerHTML = "Oops! There was a problem submitting your form. Please reach me by email."
        }
        })
    }
    }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form. Please reach me by email."
    });
}

contactForm.addEventListener("submit", handleSubmit)

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

/* ===============================================
 * AOS ANIMATIONS
 * ==============================================*/

AOS.init();
