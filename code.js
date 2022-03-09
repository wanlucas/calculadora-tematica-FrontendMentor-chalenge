

const themeHtml = document.querySelector('.themes-options');
const displayHtml = document.querySelector('.display');
const keysHTML = document.querySelectorAll('.key');

var actTheme = 1;

themeHtml.addEventListener("click", () => {
    actTheme == 3 ? actTheme = 1 : actTheme++;
    updateTheme(actTheme);
})
keysHTML.forEach(key => {
    key.addEventListener('click', ()=> {
        updateCalc(key.innerText);
    });
});

function updateTheme(theme) {
     themeHtml.style.animation = '';
     setTimeout(()=>{
        switch(theme) {
        }
    }, 40)
}


function updateCalc(key) {
    displayHtml.innerHTML += key
}