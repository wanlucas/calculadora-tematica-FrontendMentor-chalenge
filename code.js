const bodyHtml = document.body;
const themeHtml = document.querySelector('.themes-options');
const displayHtml = document.querySelector('.display');

var actTheme = 1, calc = '';

themeHtml.addEventListener("click", ()=>{
    actTheme == 3 ? actTheme = 1 : actTheme++;
    updateTheme(actTheme);
})
function updateTheme(theme) {
        switch(theme) {
            case 1 : {
                bodyHtml.setAttribute('data-theme', 'theme-primary');
                themeHtml.style.justifyContent = 'left';
            }; break;
            case 2 : {
                bodyHtml.setAttribute('data-theme', 'theme-secundary');
                themeHtml.style.justifyContent = 'center';
            }; break;
            case 3 : {
                bodyHtml.setAttribute('data-theme', 'theme-tertiary');
                themeHtml.style.justifyContent = 'right';
            }; break;
        }
}
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', ()=>{
        const d = displayHtml, k = key.innerText;
        if(d.innerText.length > 10 || d.innerText == '0' && k == 0) return;
        if(!/[0-9]/.test(d.innerText.split('').pop()) && !/[0-9]/.test(k)) del();
        d.innerText == '0' ? d.innerText = k : d.innerText += k;
        if(k == 'x') return calc+= '*'; 
        calc += k;
        console.log(calc)
    });
});
document.querySelector('#reset').addEventListener("click", ()=>{
    displayHtml.innerText='0', calc = '';
})
document.querySelector('#delete').addEventListener("click", del);
function del() {
    const txt = displayHtml.innerText.split('');
    let res =  txt.slice(0, txt.length-1).join('');
    if(res == '') {return displayHtml.innerText='0', calc=''};
    displayHtml.innerText = res, calc = res;
}
document.querySelector('#calc').onclick = ()=> {
    res = eval(calc);
    Number.isInteger(res) ? 0 : res = res.toFixed(2);
    displayHtml.innerText = res, calc = res;
}

