var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

btn.addEventListener("click", function (event) {
  event.preventDefault();
  modal.style.display = "block";
});
btn.addEventListener("click", function (event) {
  event.preventDefault();
  modal.style.display = "block";
});

span.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

document.getElementById("startGameBtn").addEventListener("click", () => {
  window.location.href = "streets.html";
});
