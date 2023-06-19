import { kitchenTipsText } from "./kitchenTipsText"
import { burgerMenu } from "./burgerMenu"
import { InvisibilityOnScroll } from "./InvisibilityOnScroll"
import { firstScrollForHeader } from "./firstScrollForHeader"
import { sizeScroll } from "./sizeScroll"


export default () => document.addEventListener('DOMContentLoaded', () => {
    firstScrollForHeader()
    burgerMenu()
    kitchenTipsText()
    InvisibilityOnScroll()
    sizeScroll()

})
