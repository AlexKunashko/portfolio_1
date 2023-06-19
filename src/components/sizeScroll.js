
function sizeScrolling() {
    let scrollLine = document.querySelector('.red-line-scroll')
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;
    let scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    scrollLine.style.width = `${scrollPercent}%`
}
function throttle(func, ms) {
    let isThrottled = false;
    let savedArgs;
    let savedThis;

    function wrapper() {
        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }
        func.apply(this, arguments);

        isThrottled = true;

        setTimeout(() => {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedArgs, savedThis);
                savedArgs = savedThis = null
            }
        }, ms);
    }
    return wrapper;
}

export const sizeScroll = () => {


    window.addEventListener('scroll', throttle(sizeScrolling, 300))

}