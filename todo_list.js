document.getElementById("duedate_input").value = '';
document.getElementById("duetime_input").value = '';

document.querySelector('#add_task').addEventListener('click', function(){
	addTask(document.getElementById("task_description_input").value,
	dateAndTimeToTimestamp(document.getElementById("duedate_input"),
	document.getElementById("duetime_input")));
});

document.getElementById("task_description_input").addEventListener('keydown', function (enter){
	if (enter.key === 'Enter') {
		addTask(document.getElementById("task_description_input").value,
		dateAndTimeToTimestamp(document.getElementById("duedate_input"),
		document.getElementById("duetime_input")));
	}
});

function dateAndTimeToTimestamp(dateInputElement, timeInputElement){
	const dueDate = dateInputElement.valueAsNumber; // Returns the timestamp at midnight for the given date
	const dueTime = timeInputElement.valueAsNumber; // Returns the number of milliseconds from midnight to the time

	if (dueDate && dueTime) { // The user specified both a due date & due time
		//Add the timezone offset to account for the fact that timestamps are specified by UTC
		const timezoneOffset = (new Date()).getTimezoneOffset() * 60 * 1000;
		return dueDate + dueTime + timezoneOffset;
	} else {
		// if the user did not specify both a due date and due time, return false
		return false;
	}
}

var description = document.getElementById("task_description_input").value;
var dateInputElement = document.getElementById("duedate_input");
var timeInputElement = document.getElementById("duetime_input");
var dueTime = dateAndTimeToTimestamp(dateInputElement, timeInputElement);
var elements = document.getElementById("task_list");

function addTask(description, dueTime=false){

	// if (dueTime == false) {
	// 	dueTime = "";
	// } else {
	// 	dueTime = new Date(dueTime);
	// }
	if (dueTime){
		elements.innerHTML += `<li>${description}<span classs="due"> due ${new Date(dueTime).toLocaleString()}</span><button class="btn btn-sm btn-outline-danger done" type="button">Done</button></li>`;
	} else{
		elements.innerHTML += `<li>${description}<button class="btn btn-sm btn-outline-danger done" type="button">Done</button></li>`;
		}
	document.getElementById("task_description_input").value = "";
	document.getElementById("duedate_input").value = '';
	document.getElementById("duetime_input").value = '';
}

addTask("Buy milk");
addTask("Learn to wrap gifts", 1639944400000);

console.log(document.querySelector('.input-group'));
document.querySelector("#task_list").addEventListener('click', function (event){
	// console.log(e.target);)
	const clickTarget = document.getElementsByClassName("btn btn-sm btn-outline-danger done");
	var x = event.target
    if (x = clickTarget) {
		event.target.parentNode.remove();
	}
});

// document.querySelector("#task_list").addEventListener('click', (e) => {
//     // preventDefault() stops default behavior, and added
//     // here so clicking a link doesn't take us away.
//     // e.preventDefault();
//     console.log('this element is about to get removed', e.target.outerHTML);
//     e.target.remove();
// });

//hint: inside the function, the e.target helps find out the exact place to click. if it is the done button, need to remove the parent element (li).

// var done = document.getElementsByClassName("btn btn-sm btn-outline-danger done");
// var i;
// for (i = 0; i < done.length; i++) {
//   done[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }