// sign in
const SignIn = document.querySelector(".SignIn");
const showSignIn = document.querySelector(".show-SignIn");
const IconClose = document.querySelector(".icon-close i");

function show() {
    showSignIn.classList.add("open");
}

function hide() {
    showSignIn.classList.remove("open");
}
SignIn.addEventListener("click", show);
IconClose.addEventListener("click", hide);
//-----------------slider-------------------------

let big_slider = document.querySelector(".slider-container");
let big_slide_items = big_slider.querySelectorAll(".slider-item");
let big_slide_index = 0;
let slide_play = true;
let slide_next = big_slider.querySelector(".next");

let slide_prev = big_slider.querySelector(".prev");

showSlide = (index) => {
    big_slider.querySelector(".slider-item.active").classList.remove("active");
    big_slide_items[index].classList.add("active");
};

nextSlide = () => {
    big_slide_index =
        big_slide_index + 1 === big_slide_items.length ? 0 : big_slide_index + 1;
    showSlide(big_slide_index);
};

prevSlide = () => {
    big_slide_index =
        big_slide_index - 1 < 0 ? big_slide_items.length - 1 : big_slide_index - 1;
    showSlide(big_slide_index);
};

slide_next.addEventListener("click", () => nextSlide());

slide_prev.addEventListener("click", () => prevSlide());

big_slider.addEventListener("mouseover", () => (slide_play = false));

big_slider.addEventListener("mouseleave", () => (slide_play = true));

setTimeout(() => big_slide_items[0].classList.add("active"), 50);

setInterval(() => {
    if (!slide_play) return;
    nextSlide();
}, 5000);

//------------------- end slider-------------------

//-------------------Menu -------------------------

let nav = document.querySelectorAll(".menu-item");

for (let i = 0; i < nav.length; i++) {
    nav[i].onclick = function() {
        let j = 0;
        while (j < nav.length) {
            nav[j++].className = "menu-item";
        }
        nav[i].className = "menu-item active";
    };
}

// progress-bar

let scrollPrecentage = () => {
    let scrollProgress = document.getElementById("progress-bar");
    let progressVal = document.getElementById("progress-val");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrollVal = Math.round((pos * 100) / calcHeight);

    scrollProgress.style.background = `conic-gradient(#c0392c ${scrollVal}%, #2b2f38 ${scrollVal}%)`;
    scrollProgress.style.boxShadow = `box-shadow: 0 0 12px rgb(255 255 255 / 20%);`;
};

window.onscroll = scrollPrecentage;
window.onload = scrollPrecentage;