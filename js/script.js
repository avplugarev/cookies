const save_btn = document.querySelector('#save');
const clear_btn = document.querySelector('#clear');
const input_area = document.querySelector('#area');

function setCook (name, value) {
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    document.cookie = updatedCookie;
}

save_btn.onclick = () => {
    setCook("bravo", input_area.value);
    console.log("поставил");
}