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

//функция скрытия и появление кнопок, текста, блоков
function hideAndShow (saveVisible, clearVisible, messageVisible, inputVisible, resultVisible) {
    save_btn.style.display = saveVisible;
    clear_btn.style.display = clearVisible;
    message.style.display = messageVisible;
    input_area.style.display = inputVisible;
    result.style.display = resultVisible;
}

//обработчик кнопки сохранить
save_btn.onclick = () => {
    setCookies("location", input_area.value);
    hideAndShow('none','none', 'none', 'none');
    result.innerText = "Спасибо. Ваши данные сохранены.";
}

//обработчик кнопки очистить
clear_btn.onclick = () => {
    deleteCookies("location");
    hideAndShow('none','none', 'none', 'none');
    result.innerText = "Спасибо. Ваши данные очищены.";
}

//определяем при заходе стоит ли уже кука
let city = getCookie('location');

//если не стоит - показываем вопрос
if (city == undefined) {
    hideAndShow('inline','none');
    message.innerText="Введите ваш город пребывания:"
} //иначе скрываем вопрос и показываем город
else {
        hideAndShow('none','inline', 'block', 'none');
        message.innerHTML="Ваш город: '"+(city)+"'";
        input_area.style.display='none'
    }

