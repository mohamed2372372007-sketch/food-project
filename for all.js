const put = document.getElementById("buttom");

if (localStorage.getItem("change") === "enabled") {
  document.body.classList.add("change");
  put.textContent = "light mode";
} else {
  document.body.classList.remove("change");
  put.textContent = "dark mode";
}

put.addEventListener("click", () => {
  document.body.classList.toggle("change");

  if (document.body.classList.contains("change")) {
    put.textContent = "light mode";
    localStorage.setItem("change", "enabled");
  } else {
    put.textContent = "dark mode";
    localStorage.setItem("change", "disabled");
  }
});
