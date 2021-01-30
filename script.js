document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("nav-button").addEventListener("click", function() {
    this.classList.toggle("active");
    document.getElementById("nav").classList.toggle("active");
    
  })
})