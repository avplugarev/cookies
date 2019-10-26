const sabmit_btn = document.querySelector('#submit');
let preferences = document.getElementsByClassName('preferences');

//функция проверки послде загрузки сделан ли уже выбор
function check() {
    for (i=0;i<preferences.length;i++) {
        preferences[i].checked = (localStorage.getItem(preferences[i].id + ".checked") === "true");
        preferences[i].disabled = localStorage.getItem(preferences[i].id + ".disabled");
    };
    localStorage.getItem(preferences[0].id + ".checked") != null ? sabmit_btn.disabled = "true" : undefined;
}

//сохраняем значение в локал сторадж
sabmit_btn.onclick = () => {
    for (i=0;i<preferences.length;i++) {
        localStorage.setItem(preferences[i].id+".checked", preferences[i].checked);
        localStorage.setItem(preferences[i].id+".disabled", "true");
        preferences[i].disabled = true;
        }
    sabmit_btn.disabled = true;
    };
//если есть сохраненные данные - вытаскиваем их из локал сторадж
check();


