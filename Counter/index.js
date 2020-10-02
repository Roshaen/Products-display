console.log("this is a small project of the counter clock");
const sec = document.getElementById("sec");
const set = document.getElementById("set");
const box = document.getElementById("box");
set.addEventListener("click", startCounter);

function startCounter() {
  let value = sec.value;
  if (value > 0) {
    setInterval(() => {
      if (value > 0) {
        box.innerHTML = `<input type="text" name="count" id="count" value="${value--}" class="form-control text-success" style="height: 200px; font-size: 100px; text-align: center;">`;
      } else {
        box.innerHTML = `<input type="text" name="count" id="count" class="form-control text-danger" value="You have reached the End!!" style="height: 200px; font-size: 50px; text-align: center;">`;
        clearInterval();
      }
    }, 1000);
    // ringBell();
  } else {
    box.innerHTML = `<h3>You have Entered a invalid Count</h3>`;
  }
}
