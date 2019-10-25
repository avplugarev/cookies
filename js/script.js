const save_btn = document.querySelector('#save');
const clear_btn = document.querySelector('#clear');
const input_area = document.querySelector('#area');

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


save_btn.onclick = () => {
    setCookies("location", input_area.value);
    console.log("поставил");
}

clear_btn.onclick = () => {
    deleteCookies("location");
    console.log("удалил");
}