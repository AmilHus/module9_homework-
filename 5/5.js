const input = document.getElementsByTagName('input');
const btn = document.querySelector('button');
const text = document.querySelector('p');
const custom_div = document.querySelector('.custom_div');
let flag = false;

window.onload = function(){
    for (let i = 0;i < localStorage.length;i++){
        custom_div.insertAdjacentHTML('afterbegin',localStorage.getItem(`url${i}`));
    }
}

btn.addEventListener("click", () => {
    let notInRange = []
    let inRange = []
    Number(input.value);
        for (let i = 0; i<input.length;i++){
            Number(input[i].value);
            if (isNaN(input[i].value) == true){
                notInRange.push(input[i]);
                }
            else if (input[i].value < 1 || input[i].value > 10 ){
                notInRange.push(input[i]);
            }
            else if (input[i].value >= 1 || input[i].value <= 10 ){
                inRange.push(input[i]);
            }
        }
        for(let i = 0; i<2;i++){

            if (notInRange.length == 2){
                custom_div.innerHTML = '<div class="custom_div"></div>';
                text.innerText = "Номер страницы и лимит вне диапазона от 1 до 10"; 
                flag = false;
                break;
            }
            else if (notInRange.length == 1 && notInRange.includes(input[0])){
                custom_div.innerHTML = '<div class="custom_div"></div>';
                text.innerText = "Номер страницы вне диапазона от 1 до 10";
                flag = false;
                break; 
            }
            else if (notInRange.length == 1 && notInRange.includes(input[1])){
                custom_div.innerHTML = '<div class="custom_div"></div>';
                text.innerText = "Лимит вне диапазона от 1 до 10";
                flag = false;
                break; 
            }
            else if (inRange.length == 2){
                custom_div.innerHTML = '<div class="custom_div"></div>';
                text.innerText = "";
                flag = true;
                console.log(flag);
                break; 
            }
        }
    if (flag == true){
        fetch(`https://picsum.photos/v2/list?page=${input[0].value}&limit=${input[1].value}`)
        .then((response) => {
            return response.json(); 
        })
        .then((data) => {
            localStorage.clear();
            for (let i = 0; i < input[1].value;i++){
                localStorage.setItem(`url${i}`,`<img src=${data[i].download_url} >`)
                custom_div.insertAdjacentHTML('afterbegin', `<img src=${data[i].download_url} >`);
            }
            console.log(data);
            console.log(localStorage);
        })
        .catch(() => console.log("error"));
    }


})

