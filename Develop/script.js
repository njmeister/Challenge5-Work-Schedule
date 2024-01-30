// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(



$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

let today = dayjs().format('dddd, MMMM DD');
let thisHour = dayjs().hour();

console.log('something')

console.log(today);
console.log(thisHour);

let todayDisplay = document.getElementById('currentDay');
todayDisplay.innerHTML = today

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

let schedule = [hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17]
console.log(schedule)
  
  let main = $('.container-lg');

  let saveBtn = main.children('div').children('button');

  let textEnter = $('div').children('textarea');

  console.log(saveBtn);

  saveBtn.on('click', function(){

    let hourSect = $(this).parent();
    let field = hourSect.children('textarea');

    console.log(hourSect)
    console.log($(hourSect).val())
    console.log(field);
    console.log('This is working');
    console.log(field.val());


    localStorage.setItem(hourSect.val(), field.val());




  })

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  








  for (i=0; i<schedule.length; i++) {

    if (schedule[i].value === thisHour) {
      $(schedule[i]).addClass('present');
      console.log('this is' + schedule[i])
    } else if (schedule[i].value < thisHour) {
      $(schedule[i]).addClass('past');
    } else {
      $(schedule[i]).addClass('future');
    }
  }
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
}))