/*
Credit to @ihatetomatoes
*/
var event = new CustomEvent("finishedLoading");

$(document).ready(function() {
  window.onload = function() {
    setTimeout(function(){
      $('body').addClass('loaded');
      document.dispatchEvent(event);
    }, 300);
  }

  document.addEventListener("finishedLoading", function(e) {
    setTimeout(
      function() {
        $('div#second')
          .stop()
          .animate({
            bottom: "+=" + slideUpHeight
          }, 500);
      }, 800);
  });
});
