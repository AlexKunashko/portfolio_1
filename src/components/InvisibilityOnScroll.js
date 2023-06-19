import MainIntersectionObserver from './MainIntersectionObserver'
import { throttle } from './throttle';

export const InvisibilityOnScroll = () => {
    const header = document.getElementById("header")
    const main = document.getElementById("main");

    let prevScrollpos = window.pageYOffset;

    const handleScroll = throttle(() => {
        const currentScrollPos = window.pageYOffset;
        const direction = currentScrollPos - prevScrollpos

        if (direction < 0) {
            header.style.top = 0
        } else {
            header.style.top = "-30%";
        }

        prevScrollpos = currentScrollPos;
    }, 100)

    const observer = new MainIntersectionObserver(main, (entry) => {
        if (entry.isIntersecting) {
            window.removeEventListener('scroll', handleScroll)
        } else {
            window.addEventListener('scroll', handleScroll)
        }
    })

    observer.observe()
}