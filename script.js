window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)
window.onload = function () {
    setScrollVar()
}
function setScrollVar() {
    const htmlElement = document.documentElement
    const percentOfScreenHeightScrolled =
        htmlElement.scrollTop / htmlElement.clientHeight
    var sectionHeightScrolled = percentOfScreenHeightScrolled * 100
    htmlElement.style.setProperty(
        "--scroll",
        sectionHeightScrolled
    )

    openEnvelop(sectionHeightScrolled)
    setCardAnimation(sectionHeightScrolled)
}

function openEnvelop(sectionHeightScrolled) {
    if (sectionHeightScrolled >= 63) {
        document.querySelector("#hearts").classList.add("open")
        document.querySelector("#hearts").classList.remove("close")
    } else {
        document.querySelector("#hearts").classList.add("close")
        document.querySelector("#hearts").classList.remove("open")
    }

    if (sectionHeightScrolled >= 66) {
        document.querySelector("#front-flap").classList.add("opened")
        document.querySelector("#hearts").classList.add("open")
        document.querySelector("#hearts").classList.remove("close")
    } else {
        document.querySelector("#front-flap").classList.remove("opened")
    }
}

function setCardAnimation(sectionHeightScrolled) {
    if (sectionHeightScrolled >= 141.3) {
        document.querySelector("#card1").classList.add("takeout-to-center")
        if (sectionHeightScrolled >= 155) {
            document.querySelector("#card1").classList.add("takeout-to-below")
        } else {
            document.querySelector("#card1").classList.remove("takeout-to-below")
        }
    } else {
        document.querySelector("#card1").classList.remove("takeout-to-center")
    }

    if (sectionHeightScrolled >= 220) {
        document.querySelector("#card2").classList.add("takeout-to-center")
        if (sectionHeightScrolled >= 234) {
            document.querySelector("#card2").classList.add("takeout-to-below")
        } else {
            document.querySelector("#card2").classList.remove("takeout-to-below")
        }
    } else {
        document.querySelector("#card2").classList.remove("takeout-to-center")
    }

    if (sectionHeightScrolled >= 304) {
        document.querySelector("#card3").classList.add("takeout-to-center")
        if (sectionHeightScrolled >= 314) {
            document.querySelector("#card3").classList.add("takeout-to-below")
        } else {
            document.querySelector("#card3").classList.remove("takeout-to-below")
        }
    } else {
        document.querySelector("#card3").classList.remove("takeout-to-center")
    }
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            var scrollDiv = document.getElementById("third").offsetTop;
            window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
        } else {
        }
    })
})

observer.observe(document.querySelector("#third"))

var countDownDate = new Date("July 6, 2024 00:00:00").getTime();

var countdownTimer = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);