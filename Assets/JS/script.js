$(document).ready(

$(function () {

//get values from dayjs
let today = dayjs().format('dddd, MMMM DD');
let thisHour = dayjs().hour();

//add current day display
let todayDisplay = document.getElementById('currentDay');
todayDisplay.innerHTML = today

//define the sections for the hour slots
let hour9 = document.getElementById('hour-9');
hour9.value = 9
$(hour9).children('textarea').text(localStorage.getItem('9'));

let hour10 = document.getElementById('hour-10');
hour10.value = 10
$(hour10).children('textarea').text(localStorage.getItem('10'));

let hour11 = document.getElementById('hour-11');
hour11.value = 11
$(hour11).children('textarea').text(localStorage.getItem('11'));

let hour12 = document.getElementById('hour-12');
hour12.value = 12
$(hour12).children('textarea').text(localStorage.getItem('12'));

let hour13 = document.getElementById('hour-13');
hour13.value = 13
$(hour13).children('textarea').text(localStorage.getItem('13'));

let hour14 = document.getElementById('hour-14');
hour14.value = 14
$(hour14).children('textarea').text(localStorage.getItem('14'));

let hour15 = document.getElementById('hour-15');
hour15.value = 15
$(hour15).children('textarea').text(localStorage.getItem('15'));

let hour16 = document.getElementById('hour-16');
hour16.value = 16
$(hour16).children('textarea').text(localStorage.getItem('16'));

let hour17 = document.getElementById('hour-17');
hour17.value = 17
$(hour17).children('textarea').text(localStorage.getItem('17'));


//put the hour slots into an array
let schedule = [hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17]

//set DOM traversal to select the buttons of each section
let main = $('.container-lg');

let saveBtn = main.children('div').children('button');

//listener event to save user entered text

saveBtn.on('click', function(){
  //DOM traversal to select the corresponding text area
  let hourSect = $(this).parent();
  let field = hourSect.children('textarea');
  //saves the entry to local storage
  localStorage.setItem(hourSect.val(), field.val());
  })

//for loop to assign class to each field based on dayjs
for (i=0; i<schedule.length; i++) {

  if (schedule[i].value === thisHour) {
    $(schedule[i]).addClass('present');
  } else if (schedule[i].value < thisHour) {
    $(schedule[i]).addClass('past');
  } else {
    $(schedule[i]).addClass('future');
  }
}

}))