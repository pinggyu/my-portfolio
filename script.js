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
const mobileNav = document.getElementById('mobileNavContainer');
const body = document.querySelector("body");
const navLinks = document.querySelectorAll('.mobileNavLink');

const toggleMobileNav = (e) => {
    e.preventDefault();
    mobileNav.classList.toggle('open');
    // trigger menu button animation (to become close button)
    menuBtn.classList.toggle('active');
}

// close the menu if a link is clicked
navLinks.forEach((navLink) => {
    navLink.addEventListener('click', toggleMobileNav);
})

menuBtn.addEventListener('click', toggleMobileNav);

// Rotate scroll down svg icon on scroll

const scrollRotate = () => {
    let image = document.getElementById("scrollDownIcon");
    image.style.transform = "rotate(" + -window.pageYOffset/20 + "deg)";
}

// Shrink nav bar on scroll
const mainNav = document.getElementById('mainNav');

const scrollFunction = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        mainNav.classList.add('scrolled');
    } else {
        mainNav.classList.remove('scrolled');
    }
}

window.onscroll = function () {
    scrollRotate();
    scrollFunction();
};

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
