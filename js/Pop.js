const harpop = document.getElementById("harcelement");
const haropen = document.getElementById("harcopen");
const harclose = document.getElementById("harclose");

const tempop = document.getElementById("temoignage");
const temopen = document.getElementById("temcopen");
const temclose = document.getElementById("temclose");

const butpop = document.getElementById("but");
const butopen = document.getElementById("butopen");
const butclose = document.getElementById("butclose");

const nosreppop = document.getElementById("nosrep");
const nosrepopen = document.getElementById("nosrepopen");
const nosrepclose = document.getElementById("nosrepclose");



haropen.addEventListener('click', () => {
    harpop.showModal();
});

harclose.addEventListener('click', () => {
    harpop.close();
});



temopen.addEventListener('click', () => {
    tempop.showModal();
});

temclose.addEventListener('click', () => {
    tempop.close();
});



butopen.addEventListener('click', () => {
    butpop.showModal();
});

butclose.addEventListener('click', () => {
    butpop.close();
});



nosrepopen.addEventListener('click', () => {
    nosreppop.showModal();
});

nosrepclose.addEventListener('click', () => {
    nosreppop.close();
});

