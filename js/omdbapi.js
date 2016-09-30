'use strict'

window.onload = function() {
  console.log("inside the onload");
  var button = document.getElementById("btnLarge");
  button.addEventListener("click", ajaxCall);
};

function ajaxCall(event) {
  event.preventDefault();
  console.log("in the ajax call");
  let userInput = document.getElementById("search").value;
  console.log(userInput);

  $.ajax({
    url: `https://www.omdbapi.com/?t=${userInput}&y=&plot=long&r=json`,
    method: "GET",
    success: movieResult,
    error: movieFail
  });
}

function movieResult(data) {
  var infoArea = document.getElementById("listings");
  console.log("in the info area");
  infoArea.textContent = "";

  let resultPar = document.createElement("p");
  let resultImg = document.createElement("img");

  resultImg.src = data.Poster;
  resultPar.textContent = data.Plot;

  infoArea.appendChild(resultPar);
  infoArea.appendChild(resultImg);

}

function movieFail(){
  console.log("movie failed");
}
