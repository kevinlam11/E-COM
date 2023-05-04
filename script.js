const openBtn = document.getElementById("open");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close");

openBtn.addEventListener("click", function () {
  sidebar.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  sidebar.style.display = "none";
});
