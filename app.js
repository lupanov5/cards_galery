function cardsGalery(slideSelector, activeClass, event, activeSlide = 0) {
    const slides = document.querySelectorAll(slideSelector)

    slides[activeSlide].classList.add(activeClass)

    slides.forEach((slide) => {
        slide.addEventListener(event, () => {
            clearActiveClasses()
            slide.classList.add(activeClass)        
        })
    })

    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove(activeClass)
        })
    }
}

cardsGalery('.slide', 'active', 'mouseover')