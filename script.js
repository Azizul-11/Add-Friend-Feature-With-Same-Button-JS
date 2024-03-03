var istatus = document.querySelector("h5");
var btn = document.querySelector("#add");
// var remove = document.querySelector("#remove");
var i = 0;

btn.addEventListener("click", function () {
  if (i == 0) {
    istatus.innerHTML = "Friend";
    istatus.style.color = "green";
    btn.textContent = "Remove";
    i = 1;
  } else {
    istatus.innerHTML = "Stranger";
    istatus.style.color = "Red";
    btn.textContent = "Friend";
    i = 0;
  }
});

// remove.addEventListener("click", function () {
//   istatus.innerHTML = "Stranger";
//   istatus.style.color = "red";
// });
