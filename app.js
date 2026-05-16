var items = document.querySelectorAll('.item');
var text = document.querySelectorAll('.about');
let button = document.querySelector('.next');
let shop = document.querySelector('.shop');
let display = document.body;
n=0;
onload = function()
{
    update(n);
}
button.addEventListener('click',(e) =>{
            n++;
    
    if (n>=items.length){
         n=0;
    
    }update(n);
    shop.classList.remove('blue', 'green', 'red');
    if (n===0){
       display.style.backgroundColor='rgb(137, 51, 51)';
        shop.classList.add('red') 
    }
       if(n===1){
        display.style.backgroundColor='rgb(58, 71, 101)';
        shop.classList.add('blue')
       }
       if (n===2){
        display.style.backgroundColor='rgb(83, 113, 79)';
        shop.classList.add('green')
       } 
})
function update(n) {
    // 1. Ховаємо абсолютно всі елементи з класом .change
    items.forEach(element => {
        element.style.display = 'none';
    })
    // 2. Показуємо тільки той, на який ми "перемкнулися"
    if (items[n]) { // Перевірка, чи існує такий елемент
        items[n].style.display = 'block';
    }
    text.forEach(element =>{
        element.style.display='none';
    })
    if (text[n]){ // Перевірка, чи існує такий елемент
        text[n].style.display = 'block';
    }
    
};

