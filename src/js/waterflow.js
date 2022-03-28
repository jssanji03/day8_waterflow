const items = document.querySelectorAll(".js-img")

let i = 0;
items.forEach((item) => {
    item.style.animationDelay = `${i+=0.1}s`
})
