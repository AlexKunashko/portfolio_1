

export const kitchenTipsText = () => {
    let arrayMarket = document.querySelectorAll('#about-the-kitchen__info-marker')
    arrayMarket.forEach((item) => {
        item.addEventListener('mouseover', () => {
            let parent = item.closest('.about-the-kitchen__info')
            let text = parent.querySelector('.about-the-kitchen__info-text')
            text.style.opacity = "1";
        }),
            item.addEventListener('mouseout', () => {
                let parent = item.closest('.about-the-kitchen__info')
                let text = parent.querySelector('.about-the-kitchen__info-text')
                text.style.opacity = "0";
            })
    })
}
