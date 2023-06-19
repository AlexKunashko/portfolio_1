"use strict"

export const burgerMenu = () => {
    const activeBtn = document.getElementById("header__menu-btn")
    const closeBtn = document.getElementById("mobile-header__close")
    const mobileHeader = document.getElementById("mobile-header")

    activeBtn.addEventListener("click", () => { mobileHeader.classList.add("active-header") })
    closeBtn.addEventListener("click", () => { mobileHeader.classList.remove("active-header") })
}