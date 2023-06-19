import { throttle } from "./throttle";


function firstScrollingForHeader() {
    let scrollpos = window.scrollY
    const header = document.getElementById("header")
    const scrollChange = 100
    scrollpos = window.scrollY;
    (scrollpos >= scrollChange) ? header.classList.add("scroll-header") : header.classList.remove("scroll-header")
}

export const firstScrollForHeader = () => {

    window.addEventListener('scroll', throttle(firstScrollingForHeader, 100))
}