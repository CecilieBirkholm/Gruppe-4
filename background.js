window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var section1Height = document.querySelector('.header-biside').offsetHeight;
    var section2Height = section1Height + document.querySelector('.om-mig-side').offsetHeight;

    if (scrollPosition < section1Height) {
        document.body.classList.remove('section2', 'section3');
        document.body.classList.add('section1');
    } else if (scrollPosition >= section1Height && scrollPosition < section2Height) {
        document.body.classList.remove('section1', 'section3');
        document.body.classList.add('section2');
    } else {
        document.body.classList.remove('section1', 'section2');
        document.body.classList.add('section3');
    }
});
