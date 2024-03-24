// const envelope = document.getElementById('envelope');

// window.addEventListener('scroll', () => {
//     const scrollY = window.scrollY;
//     const envelopeTop = envelope.getBoundingClientRect().top;

//     if (scrollY > envelopeTop - window.innerHeight / 2) {
//         envelope.classList.add('opened');
//     }
// });

window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)

function setScrollVar() {
    const htmlElement = document.documentElement
    const percentOfScreenHeightScrolled =
        htmlElement.scrollTop / htmlElement.clientHeight
    var sectionHeightScrolled = Math.min(percentOfScreenHeightScrolled * 100, 100)
    htmlElement.style.setProperty(
        "--scroll",
        sectionHeightScrolled
    )

    openEnvelop(sectionHeightScrolled)
}

function openEnvelop(sectionHeightScrolled) {
    if (sectionHeightScrolled >= 66) {
        document.querySelector("#front-flap").classList.add("opened")
    }
    else {
        document.querySelector("#front-flap").classList.remove("opened")
    }
}

const observer = new IntersectionObserver(entries => {
    for (let i = entries.length - 1; i >= 0; i--) {
        const entry = entries[i]
        if (entry.isIntersecting) {
            document.querySelectorAll("[data-img]").forEach(img => {
                img.classList.remove("show")
            })
            const img = document.querySelector(entry.target.dataset.imgToShow)
            img?.classList.add("show")
            break
        }
    }
})

document.querySelectorAll("[data-img-to-show]").forEach(section => {
    observer.observe(section)
})