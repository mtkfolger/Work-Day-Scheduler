//time/date display

var timeDisplayEl = $('#currentDay');

function displayTime() {
  var rightNow = moment().format(' [Today is] dddd MMMM DD, YYYY[. It is] hh:mm a');
  timeDisplayEl.text(rightNow);
};

setInterval(displayTime, 1000);



/*
//set function that turns time blocks red after that time of day has passed
if (displayTime.textContent !== document.getElementById('#timeblock8').valueOf) {
  h4.setAttribute('class', "list-group-item-danger")
}

//set onclick event that allows input when item is clicked
var timeblock8El = document.getElementById('#timeblock8');

timeblock8El.addEventListener('click',)