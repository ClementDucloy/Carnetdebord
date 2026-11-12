
const presppop = document.getElementById("press");
const presopen = document.getElementById("pres");
const presclose = document.getElementById("pressclose");

const appppop = document.getElementById("appo");
const appopen = document.getElementById("app");
const appclose = document.getElementById("appclose");

const rempop = document.getElementById("Remerciment");
const remopen = document.getElementById("rem");
const remclose = document.getElementById("remclose");


presopen.addEventListener('click', () => {
    presppop.showModal();
});

presclose.addEventListener('click', () => {
    presppop.close();
});


appopen.addEventListener('click', () => {
    appppop.showModal();
});

appclose.addEventListener('click', () => {
    appppop.close();
});


remopen.addEventListener('click', () => {
    rempop.showModal();
});

remclose.addEventListener('click', () => {
    rempop.close();
});
