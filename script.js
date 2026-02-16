document.getElementById("revealBtn").addEventListener("click", function() {
  const message = document.getElementById("message");
  message.style.display = "block";   // show container
  message.classList.add("show");     // trigger animation
});
