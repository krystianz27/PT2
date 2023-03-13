/* global bootstrap: false */
(() => {
  'use strict'
  const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(tooltipTriggerEl => {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })
})()


// document.getElementById("b4").addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementById("img1").style.display = "none";
//   document.getElementById("demo").src = 'k1.html';

// }




  $(document).ready(function(){
    $("#b4").click(function(){
      $("#img1").hide();
      console.log($("#demo"))
      $("#demo").load("./k1.html");
      // $("#demo").html("sdsa");
    });
  });



