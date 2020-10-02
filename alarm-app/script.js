let alarm = document.getElementById("alarm");
let content = document.getElementById("content");
let set = document.getElementById("Set");
let stop = document.getElementById("stop");
let date = new Date();
let date1 = new Date();
let val;
function ringBell() {
  var audio = new Audio("audio1.mp3");
  audio.play();
}

set.addEventListener("click", () => {
  date = new Date(alarm.value);

  document.getElementById(
    "content"
  ).innerHTML = `<div class="alert alert-info my-4" role="alert">
                Alarm set for -- ${date} !
                </div>`;
  val = date - date1;
  if (val >= 0) {
    console.log(`the alarm will ring after ${val}ms`);
    setTimeout(() => {
      ringBell();
    }, val);
  } else {
    console.log("this is a invalid date");
  }
});

stop.addEventListener("click", (e) => {
  location.reload();
});
