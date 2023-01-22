

// Get minutes since the day started in Canary islands timezone, accurate regardless daylight saving time
// also get day
let options = {
    timeZone: 'Atlantic/Canary',
    hour: 'numeric',
    minute: 'numeric',
    weekday: 'long'
  },
formatter = new Intl.DateTimeFormat('es-es', options);

let [d, t] = formatter.format(new Date()).split(", ");
let [h, m] = t.split(":").map(e=>Number(e));
let mins = (h*60+m)
//

let ns = "Desconocido"

if ((d == "sábado" || d == "domingo") || (d == "viernes" && mins >= 900)) {
    ns = "el recreo del siguiente lunes"
} else {
    if (mins < 690) {
        ns = "el recreo"
    } else if (mins < 900) {
        ns = "las 15:00 - 17:00"
    } else {
        ns = "el recreo de mañana"
    }
}
$('.nextshift').html(ns);

(()=>{
function handleFormSubmit(event) {
    event.preventDefault();
    document.getElementsByClassName("booking")[0].style.display = "none";
    document.getElementsByClassName("done")[0].style.display = "block";
    //$(".booking").css("display", "none")
    //$(".booking").css("display", "none")
}

document.getElementById("form").addEventListener("submit", handleFormSubmit, false);
})();