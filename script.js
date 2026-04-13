window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "0.5s ease";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 1500); // duration of loader
});



console.log("Portfolio loaded 🚀");