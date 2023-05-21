// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentTimeEl = document.getElementById('currentDay');
var saveButtonEl = document.getElementsByClassName('saveBtn');
var timeBlockEl = document.getElementsByClassName('time-block');
var hourEl = document.getElementsByClassName('hour');
var divTextEl = document.getElementsByClassName('col-8 col-md-10 description');
var currentDate = dayjs();
var hour = new Date().toLocaleTimeString([], {hour: '2-digit'});
//Founded from Google, deletes the space
var currentHour = hour.replace(/\s+/g, '');


$(function () {
  //console.log(divTextEl.length)
    //Helped from Tutor
    document.addEventListener("click", function(event) {
      event.preventDefault();
      //console.log(this);
      if (event.target.className.includes("saveBtn")) {
        //console.log(event.target.parentElement.id);
        var textValue = event.target.previousElementSibling.value;
        var id = event.target.parentElement.id;
        localStorage.setItem(id, textValue);
        loadScheduler();
      } else if (event.target.className.includes("fas fa-save")) {
        //console.log(event.target.parentElement);
        var textValue = event.target.parentElement.previousElementSibling.value;
        var id = event.target.parentElement.parentElement.id;
        console.log(id);
        localStorage.setItem(id, textValue);
        loadScheduler();
      }
    })
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  /* for(var i = 0; i < timeBlockEl.length; i++) {
    if(hourEl.textContent < currentHour) {
      divTextEl[i].setAttribute('class', 'past');
    }
  } */

  //
  function loadScheduler() {
    for (i = 0; i < divTextEl.length; i++) {
      console.log(divTextEl[i].parentElement.id);
        var key = divTextEl[i].parentElement.id;
        divTextEl[i].textContent = localStorage.getItem(key); 
    }
  }
  
  setInterval(function (){
    currentTimeEl.textContent = currentDate.format('MMM D, YYYY') + " " + (new Date()).toLocaleTimeString();
  }, 1000);

  loadScheduler();
});
