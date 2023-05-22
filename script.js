var currentTimeEl = document.getElementById('currentDay');
var divTextEl = document.getElementsByClassName('col-8 col-md-10 description');
var currentDate = dayjs();
var divTimeBlock = document.getElementsByClassName('row time-block ');
//Founded from Google, alternative to using Day.js
var currentHour = new Date().toLocaleTimeString([], {
  hour12: false,
  hour: '2-digit'});




$(function () {
    //Helped from Tutor
    document.addEventListener("click", function(event) {
      event.preventDefault();
      if (event.target.className.includes("saveBtn")) {
        var textValue = event.target.previousElementSibling.value;
        var id = event.target.parentElement.id;
        localStorage.setItem(id, textValue);
        loadScheduler();
      } else if (event.target.className.includes("fas fa-save")) {
        var textValue = event.target.parentElement.previousElementSibling.value;
        var id = event.target.parentElement.parentElement.id;
        console.log(id);
        localStorage.setItem(id, textValue);
        loadScheduler();
      }
    })

setInterval(function(){
  for (i = 0; i < divTimeBlock.length; i++) {
    var hour = parseInt(divTimeBlock[i].id.replace('hour-',''));
    var intCurrentHour = parseInt(currentHour);

    if (hour < intCurrentHour) {
      if (divTimeBlock[i].className.match('present')) {
        divTimeBlock[i].classList.replace('present','past');
      } else if (divTimeBlock[i].className.match('future')) {
        divTimeBlock[i].classList.replace('future','past');
      }
    } else if (hour == intCurrentHour) {
      if (divTimeBlock[i].className.match('past')) {
        divTimeBlock[i].classList.replace('past','present');
      } else if (divTimeBlock[i].className.match('future')) {
        divTimeBlock[i].classList.replace('future','present');
      }
    } else if (hour > intCurrentHour) {
      if (divTimeBlock[i].className.match('present')) {
        divTimeBlock[i].classList.replace('present','future');
      } else if (divTimeBlock[i].className.match('past')) {
        divTimeBlock[i].classList.replace('past','future');
      }
    };
  }
})
  
  function loadScheduler() {
    for (i = 0; i < divTextEl.length; i++) {
      var key = divTextEl[i].parentElement.id;
      divTextEl[i].textContent = localStorage.getItem(key); 
    }
  }
  
  setInterval(function (){
    //Recieved from asking a classmate
    currentTimeEl.textContent = currentDate.format('MMM D, YYYY') + " " + (new Date()).toLocaleTimeString();
  }, 1000);

  loadScheduler();
});
