/* global bootstrap: false */
(() => {
  'use strict'
  const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(tooltipTriggerEl => {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })
})()


document.getElementById("b13").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("img1").style.display = "none";
  // document.getElementById("demo").src = 'k1.html';
    document.getElementById("p1").innerHTML = " New text"

}




  // $(document).ready(function(){
  //   $("#b13").click(function(){
  //     $("#img1").hide();
  //     // console.log($("#p1"))
  //     // $("#p1").load("k1.html");
  //     // $("#p1").html("sdsa");
  //   });
  // });



