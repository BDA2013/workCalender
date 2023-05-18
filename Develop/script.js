// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentTimeEl = document.getElementById('currentDay');
var saveButtonEl = document.getElementsByClassName('saveBtn');
var currentDate = dayjs();
var currentTime = dayjs();

$(function () {
  //Helped from Tutor
  document.addEventListener("click", function(event) {
    event.preventDefault();
    //console.log(this);
    if (event.target.className.includes("saveBtn")) {
      //console.log(event.target.parentElement.id);
      var textValue = event.target.previousElementSibling.value;
      var id = event.target.parentElement.id;
      localStorage.setItem(id, textValue);
    } else if (event.target.className.includes("fas fa-save")) {
      //console.log(event.target.parentElement);
      var textValue = event.target.parentElement.previousElementSibling.value;
      var id = event.target.parentElement.parentElement.id;
      localStorage.setItem(id, textValue);
    }
  })
    //console.log(saveButtonEl);
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  setInterval(function (){
    currentTimeEl.textContent = currentDate.format('MMM D, YYYY') + " " + (new Date()).toLocaleTimeString();
  }, 1000);
});
