let log = document.getElementById('calclog');
// form.display.value = eval(form.display.value)
let field = document.getElementById('display')
const update = () => {
    let expression = field.value;
    let result = eval(field.value);
    field.value = result;
    let logupdate = `<div>${expression} <div class='result'> = ${result}</div> </div><hr>`;
    log.innerHTML += logupdate;
}