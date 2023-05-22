var currentTimeEl = document.getElementById('currentDay');
var divTextEl = document.getElementsByClassName('col-8 col-md-10 description');
var currentDate = dayjs();
var divTimeBlock = document.getElementsByClassName('time-block');
//Founded from Google, deletes the space
var currentHour = new Date().toLocaleTimeString([], {
  hour12: false,
  hour: '2-digit'});




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


  for (i = 0; i < divTimeBlock.length; i++) {
    var hour = parseInt(divTimeBlock[i].id.replace('hour-',''));
    var intCurrentHour = parseInt(currentHour);
    console.log(hour);
    console.log(intCurrentHour);

    if (hour < intCurrentHour) {
      if (divTimeBlock[i].className.match('present')) {
        divTimeBlock[i].classList.replace('present','past');
      } else if (divTimeBlock[i].className.match('future')) {
        divTimeBlock[i].classList.replace('future','past');
      }
    } else if (hour = intCurrentHour) {
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
  function loadScheduler() {
    for (i = 0; i < divTextEl.length; i++) {
      //console.log(divHour[i].textContent);
      //console.log(divTextEl[i].parentElement.id);
      var key = divTextEl[i].parentElement.id;
      divTextEl[i].textContent = localStorage.getItem(key); 
    }
  }
  
  setInterval(function (){
    currentTimeEl.textContent = currentDate.format('MMM D, YYYY') + " " + (new Date()).toLocaleTimeString();
  }, 1000);

  loadScheduler();
});
