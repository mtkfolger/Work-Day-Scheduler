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
  localStorage.setItem('save8', sibling)
  document.getElementById("input8").innerHTML = localStorage.getItem("save8");
}




save8.addEventListener('click',saveLocal8)

function saveLocal9(){
  var sibling = document.getElementById("save9").previousElementSibling.value;
  console.log(sibling)
  localStorage.setItem('save9', sibling)
  document.getElementById("input9").innerHTML = localStorage.getItem("save9");
}

save9.addEventListener('click',saveLocal9)

function saveLocal10(){
  var sibling = document.getElementById("save10").previousElementSibling.value;
  console.log(sibling)
  localStorage.setItem('save10', sibling)
  document.getElementById("input10").innerHTML = localStorage.getItem("save10");
}

save10.addEventListener('click',saveLocal10)


function saveLocal11(){
  var sibling = document.getElementById("save11").previousElementSibling.value;
  console.log(sibling)
  localStorage.setItem('save11', sibling)
  document.getElementById("input11").innerHTML = localStorage.getItem("save11");
}

save11.addEventListener('click',saveLocal11)


function saveLocal12(){
  var sibling = document.getElementById("save12").previousElementSibling.value;
  console.log(sibling)
  localStorage.setItem('save12', sibling)
  document.getElementById("input12").innerHTML = localStorage.getItem("save12");
}

save12.addEventListener('click',saveLocal12)

function saveLocal1(){
  var sibling = document.getElementById("save1").previousElementSibling.value;
  console.log(sibling)
  localStorage.setItem('save1', sibling)
  document.getElementById("input1").innerHTML = localStorage.getItem("save1");
}

save1.addEventListener('click',saveLocal1)


function saveLocal2(){
  var sibling = document.getElementById("save2").previousElementSibling.value;
  console.log(sibling)
  localStorage.setItem('save2', sibling)
  document.getElementById("input2").innerHTML = localStorage.getItem("save2");
}

save2.addEventListener('click',saveLocal2)


function saveLocal3(){
  var sibling = document.getElementById("save3").previousElementSibling.value;
  console.log(sibling)
  localStorage.setItem('save3', sibling)
  document.getElementById("input3").innerHTML = localStorage.getItem("save3");
}

save3.addEventListener('click',saveLocal3)


function saveLocal4(){
  var sibling = document.getElementById("save4").previousElementSibling.value;
  console.log(sibling)
  localStorage.setItem('save4', sibling)
  document.getElementById("input4").innerHTML = localStorage.getItem("save4");
}

save4.addEventListener('click',saveLocal4)


function saveLocal5(){
  var sibling = document.getElementById("save5").previousElementSibling.value;
  console.log(sibling)
  localStorage.setItem('save5', sibling)
  document.getElementById("input5").innerHTML = localStorage.getItem("save5");
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


  var currentTime = moment().format('hh:mm');

  console.log(currentTime);

