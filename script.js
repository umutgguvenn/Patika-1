let name = prompt("İsminiz Nedir ?", "Umut");

if (name == "") {
  while (name == "") name = prompt("Lütfen Bir İsim Girin !");
}

document.getElementById("id").innerText = name;

function time() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let day = date.getDay();

  if (day == 1) {
    day = "Pazartesi";
  } else if (day == 2) {
    day = "Salı";
  } else if (day == 3) {
    day = "Çarşamba";
  } else if (day == 4) {
    day = "Perşembe";
  } else if (day == 5) {
    day = "Cuma";
  } else if (day == 6) {
    day = "Cumartesi";
  } else if (day == 7) {
    day = "Pazar";
  }

  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    h = "0" + h;
  }
  if (s < 10) {
    s = "0" + s;
  }
  document.getElementById("time").innerText = `${h}:${m}:${s} ${day}  `;
  setTimeout(time, 1000);
}
time();
