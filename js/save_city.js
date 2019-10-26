const save_btn = document.querySelector('#save');
const clear_btn = document.querySelector('#clear');
const input_area = document.querySelector('#area');
const message = document.querySelector('#message');
const result = document.querySelector('#result');

//функция установки куки
function setCookies (name, value, options = {}) {
let date = new Date(Date.now() + 86400e3);
date = date.toUTCString();

    options = {path: '/', domain:"localhost", expires:date, samesite:"strict"};
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }
    document.cookie = updatedCookie;
}

//функция удаления куки
function deleteCookies(name) {
    document.cookie = name+"=user"+"domain=localhost; path=/; max-age=-1";
}

//функция получить куку
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
//определяем при заходе стоит ли уже кука
let city = getCookie('location');

//если стоит - скрываем вопрос
if (city == undefined) {
    message.innerText="Введите ваш город пребывания:"
    save_btn.style.display = 'inline';
    clear_btn.style.display = 'none';
}
else {
        message.innerHTML="Ваш город: '"+(city)+"'";
        input_area.style.display='none'
        save_btn.style.display='none';
        clear_btn.style.display = 'inline';
    }

save_btn.onclick = () => {
    setCookies("location", input_area.value);
    result.innerText = "Спасибо. Ваши данные сохранены.";
    save_btn.style.display = 'none';
    input_area.style.display = 'none';
    message.style.display = 'none';
}

clear_btn.onclick = () => {
    deleteCookies("location");
    message.style.display = 'none';
    result.innerText = "Спасибо. Ваши данные очищены.";
    clear_btn.style.display = 'none';
}