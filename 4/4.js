
const input = document.getElementsByTagName('input');
const btn = document.querySelector('button');
const text = document.querySelector('p');
const custom_div = document.querySelector('.custom_div');
let flag = false;
btn.addEventListener("click", () => {
    let count = 0;
    for (let i = 0; i<input.length;){
        Number(input[i].value);
         if ( isNaN(input[i].value) == true){
            custom_div.innerHTML = '<div class="custom_div"></div>';
            text.innerText = "одно из чисел вне диапазона от 100 до 300";
            flag = false;
            break;
        }
        else if (input[i].value < 100 || input[i].value > 300){
            custom_div.innerHTML = '<div class="custom_div"></div>';
            text.innerText = "одно из чисел вне диапазона от 100 до 300";
            flag = false; 
            break;
        }
        else if (input[i].value >= 100 || input[i].value <= 300){
            count++;
            if (count == 2){
                custom_div.innerHTML = '<div class="custom_div"></div>';
                flag = true;
                break;
            }
        }
        i++;
    }

    if (flag == true){
        text.innerText = " ";
        fetch(`https://picsum.photos/${input[0].value}/${input[1].value}`)
                .then((response) => { 
                    let content =  `<img src=${response.url} >`;
                    custom_div.insertAdjacentHTML('afterbegin', content);
                })
                .catch(() => { console.log('error') });
    }

})

