const demos = document.querySelectorAll('video')

demos.forEach((e) => {
    e.addEventListener('mouseover', function () {
        this.play();
    });

    e.addEventListener('mouseleave', function () {
        this.pause();
    });
})