const xhr = new XMLHttpRequest();

const input = document.querySelector('input');
const btn = document.querySelector('button');
const text = document.querySelector('p');
const custom_div = document.querySelector('.custom_div');


btn.addEventListener("click", () => {
    if (input.value == ""){
        text.innerText = " ";
    }
    else if ( input.value >= 1 && input.value <= 10){
        xhr.open("get", `https://picsum.photos/v2/list?limit=${input.value}`, true);
        xhr.onload = function() {
            data = JSON.parse(xhr.response);
            for (let i = 0; i < input.value;){
                let content =  `<img src=${data[i].download_url} >`;
                custom_div.insertAdjacentHTML('afterbegin', content);
                i++;
            }
            text.innerText = " ";
        };
        xhr.onerror = function() {
        console.log('Ошибка запроса');
        };
        xhr.send();
        }
    else if(input.value < 1 || input.value > 10 ){
        custom_div.innerHTML = '<div class="custom_div"></div>'
        text.innerText = "число вне диапазона от 1 до 10";
        console.log(input.value < 1 || input.value > 10);
    }

})

