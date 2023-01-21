

// Get minutes since the day started in Canary islands timezone, accurate regardless daylight saving time
let options = {
    timeZone: 'Atlantic/Canary',
    hour: 'numeric',
    minute: 'numeric'
  },
formatter = new Intl.DateTimeFormat([], options);
let [h, m] = formatter.format(new Date()).split(":").map(e=>Number(e));
let mins = (h*60+m)
//

let ns = "Desconocido"
if (mins < 690) {
    ns = "el recreo"
} else if (mins < 900) {
    ns = "las 15:00 - 17:00"
} else {
    ns = "el recreo de mañana"
}
document.getElementById("nextshift").innerHTML = ns
