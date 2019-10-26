const sabmit_btn = document.querySelector('#submit');
let preferences = document.getElementsByClassName('preferences')

//сохраняем значение в локал сторадж
sabmit_btn.onclick = () => {
    for (i=0;i<preferences.length;i++) {
        localStorage.setItem(preferences[i].id+".checked", preferences[i].checked);
        localStorage.setItem(preferences[i].id+".disabled", true);
        }
    sabmit_btn.disabled = true;
    };
//если есть сохраненные данные - вытаскиваем их из локал сторадж
for (i=0;i<preferences.length;i++) {
    preferences[i].checked = (localStorage.getItem(preferences[i].id + ".checked") === "true");
    preferences[i].disabled = localStorage.getItem(preferences[i].id + ".disabled", true);
  };


