const wrapper = document.querySelector(".sliderWrapper")
let itemCount = 0
setInterval(() => {
    wrapper.style.transform = `translatex(${-100 * itemCount}vw)`

    if (itemCount >= 4) {
        itemCount = 0
    } else {
        itemCount++
    }

}, 5000)
