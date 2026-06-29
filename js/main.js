// TABS
const tabsBtns = document.querySelectorAll(".tab__btn button");
const tabItems = document.querySelectorAll(".tabs__item");

// function hides tabs on buttons and removes tab__btn-item--blue

function hideTabs() {
    tabItems.forEach(item => item.classList.add("hide"))
    tabsBtns.forEach(item => item.classList.remove("tab__btn-item--blue"))
}


// The function displays the transmitted tab number and makes the corresponding button active.
function showTab(index) {
    tabItems[index].classList.remove("hide")
    tabsBtns[index].classList.add("tab__btn-item--blue")
}

hideTabs()
showTab(0)

tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
}))



// anchor

const anchor = document.querySelectorAll(".header__nav a");

anchor.forEach(anc => {
    anc.addEventListener('click', function(e) {
        e.preventDefault();

        const id = anc.getAttribute('href')
        const element = document.querySelector(id)

        window.scroll({
            top: element.offsetTop - 120,
            behavior: 'smooth'
        });
    });
});