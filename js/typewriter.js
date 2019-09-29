$(document).ready(function() {
  document.addEventListener("finishedLoading", function(e) {
    $("#typetext").typed({
      strings: ["Columbia University's First Southeast Asian Zine",
                "Showcasing art, writing, music, film, and more!",
                "Share your voice",
                "Submit today!"],
      typeSpeed: 80,
      backDelay: 1200,
      loop: true
    });
  });
})
