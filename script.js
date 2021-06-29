//time/date display

var timeDisplayEl = $('#currentDay');

function displayTime() {
  var rightNow = moment().format(' [Today is] dddd MMMM DD, YYYY[. It is] hh:mm a');
  timeDisplayEl.text(rightNow);
};

setInterval(displayTime, 1000);


//saving user input to local storage

localStorage.setItem('input','')


function saveLocal8(){
   var sibling = document.getElementById("save8").previousElementSibling.value;
  console.log(sibling)
  localStorage.setItem(sibling, 'value')
  window.localStorage.getItem('sibling')
}

save8.addEventListener('click',saveLocal8)

function saveLocal9(){
  var sibling = document.getElementById("save9").previousElementSibling.value;
  console.log(sibling)
  localStorage.setItem(sibling, 'value')
}

save9.addEventListener('click',saveLocal9)

function saveLocal10(){
  var sibling = document.getElementById("save10").previousElementSibling.value;
  console.log(sibling)
  localStorage.setItem(sibling, 'value')
}

save10.addEventListener('click',saveLocal10)


function saveLocal11(){
  var sibling = document.getElementById("save11").previousElementSibling.value;
  console.log(sibling)
  localStorage.setItem(sibling, 'value')
}

save11.addEventListener('click',saveLocal11)


function saveLocal12(){
  var sibling = document.getElementById("save12").previousElementSibling.value;
  console.log(sibling)
  localStorage.setItem(sibling, 'value')
}

save12.addEventListener('click',saveLocal12)

function saveLocal1(){
  var sibling = document.getElementById("save1").previousElementSibling.value;
  console.log(sibling)
  localStorage.setItem(sibling, 'value')
}

save1.addEventListener('click',saveLocal1)


function saveLocal2(){
  var sibling = document.getElementById("save2").previousElementSibling.value;
  console.log(sibling)
  localStorage.setItem(sibling, 'value')
}

save2.addEventListener('click',saveLocal2)


function saveLocal3(){
  var sibling = document.getElementById("save3").previousElementSibling.value;
  console.log(sibling)
  localStorage.setItem(sibling, 'value')
}

save3.addEventListener('click',saveLocal3)


function saveLocal4(){
  var sibling = document.getElementById("save4").previousElementSibling.value;
  console.log(sibling)
  localStorage.setItem(sibling, 'value')
}

save4.addEventListener('click',saveLocal4)


function saveLocal5(){
  var sibling = document.getElementById("save5").previousElementSibling.value;
  console.log(sibling)
  localStorage.setItem(sibling, 'value')
}

save5.addEventListener('click',saveLocal5)


document.getElementById('save8').addEventListener('click',saveLocal8);
document.getElementById('save9').addEventListener('click',saveLocal9);
document.getElementById('save10').addEventListener('click',saveLocal10);
document.getElementById('save11').addEventListener('click',saveLocal11);
document.getElementById('save12').addEventListener('click',saveLocal12);
document.getElementById('save1').addEventListener('click',saveLocal1);
document.getElementById('save2').addEventListener('click',saveLocal2);
document.getElementById('save3').addEventListener('click',saveLocal3);
document.getElementById('save4').addEventListener('click',saveLocal4);
document.getElementById('save5').addEventListener('click',saveLocal5);



//function to set timeblocks different colors based on time i.e. red = past, green = present , yellow = future, repeat for all timeblocks
//if (displayTime <= 8:00) {
  //document.getElementById('timeblock8').setAttribute('class','form-control list-group-item-danger');
  //}
  //else if (displayTime === 8:00) {
    //document.getElementById('timeblock8).setAtribute('class', 'form-control list-group-item-success');
  //}

  //else {
    //document.getElementById('timeblock8).setAttribute('class','form-control list-group-item-warning');
  //}
