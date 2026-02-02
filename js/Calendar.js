function generateCalendar() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();

    // Correction du décalage (semaine commençant lundi)
    let firstDay = new Date(year, month, 1).getDay();
    firstDay = (firstDay === 0) ? 6 : firstDay - 1;

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

    let html = "<table><tr>";
    for (let d of days) html += "<th>" + d + "</th>";
    html += "</tr><tr>";

    for (let i = 0; i < firstDay; i++) html += "<td></td>";

    for (let day = 1; day <= daysInMonth; day++) {
        html += "<td>" + day + "</td>";
        if ((day + firstDay) % 7 === 0) html += "</tr><tr>";
    }

    html += "</tr></table>";
    document.getElementById("calendar").innerHTML = html;
}

document.addEventListener("DOMContentLoaded", generateCalendar);
