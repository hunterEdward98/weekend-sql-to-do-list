$(document).ready(() => {
     update();
     setTimeout(getTasks(), 1000);
     getTasks();
     $('.content').on('click', 'button', clickHandler);
})
function update() {
     setInterval(function () {
          getTasks();
     }, 1000);
}
function getTasks() {
     $.ajax({
          method: 'GET',
          url: `toDo`
     }).then((response) => {
          task2DOM(response);
     }).catch((response) => {
          alert(response, 'error');
     });
}
function addTask(title, desc, dateDue, timeDue, dateGiven) {
     $.ajax({
          method: 'POST',
          url: `toDo/${title}/${desc}/${dateDue}/${timeDue}/${dateGiven}`
     }).then((response) => {
          console.log(response, ': submitted');
          getTasks();
     }).catch((response) => {
          console.log(response, 'error');
     });
}
function deleteTask(id) {

     if (confirm(`Are you Sure You're Done with task ${id}?`)) {
          $.ajax({
               method: 'DELETE',
               url: `toDo/${id}`
          }).then((response) => {
               console.log('DELETED')
               getTasks();
          });
     }
}
function updateTask(id, colName, newVal) {
     $.ajax({
          method: 'PUT',
          url: `toDo/${id}/${newVal}/${colName}`
     }).then((response) => {
          console.log(response);
          getTasks();
     }).catch((response) => {
          alert('your request did not go through, ', response)
     });
}
function task2DOM(array) {
     $('#tasksGoHere').empty();
     for (const task of array) {
          let row = $(`<div class="row justify-content-center col-12 col-sm-5 p-3 m-1 text-center" data-id="${task.id}"></div>`);
          row.append(`<div style="background-color:lightblue;color:black" class="col-10 h2 text-center p-3 mb-1 bg-dark2">TASK #
          ${task.id}</div>`);
          row.append(`<div class="col-sm-12 h5 col-md-6 col-lg-4 text-center p-3 mb-1 white">TASK:<br>
          ${task.title}</div>`);
          row.append(`<div class="col-sm-12 h5 col-md-6 col-lg-4 text-center p-3 mb-1 white">DETAILS:<br>
          ${task.description}</div>`);
          date = new Date(task.done_by_date);
          compareToCurrentDate(date);
          myDate =
               date.getFullYear() + "/" + (date.getMonth()) + "/" + date.getDate();
          row.append(`<div class="col-sm-12 h5 col-md-6 col-lg-4 text-center p-3 mb-1 white">NEED DONE:<br>
          ${myDate} ${task.done_by_time}</div>`);
          dateAssigned = new Date(task.added);
          myDate = dateAssigned.getFullYear() + "/" + (dateAssigned.getMonth()) + "/" + dateAssigned.getDate();
          row.append(`<div class="col-sm-12 h5 col-md-6 col-lg-4 text-center p-3 mb-1 white">ASSIGNED:<br>
          ${myDate}</div>`);


          if (task.completed) {
               row.append(`<div class="col-sm-12 h5 col-md-6 col-lg-4 text-center p-3 mb-1 white">STATUS:
               COMPLETED </div>`);
          }
          else if (compareToCurrentDate(date, task.done_by_time) >= 0) {
               difference = (compareToCurrentDate(date, task.done_by_time));
               row.append(`<div style="color:green" class="col-sm-12 h5 col-md-6 col-lg-4 text-center p-3 mb-1 white">TIME LEFT:
               <br>${convertMsToTime(difference)}<br><button id='markDone' class = "btn btn-success">MARK DONE</div>`);
          }
          else {
               row.append(`<div class="col-sm-12 h5 col-md-6 col-lg-4 text-center p-3 mb-1 white" style="color: red">STATUS:
               <br>LATE</div>`);
          }
          row.append(`<div class="col-sm-12 h4 col-md-6 col-lg-4 text-center p-3 mb-1 ">
          <button class = 'delTask btn btn-danger'>DELETE TASK</button></div>`);
          $('#tasksGoHere').append(row);
     }
}
function convertMsToTime(ms) {
     let days = Math.floor(((((ms) / 1000) / 60) / 60) / 24);
     let hours = Math.floor(((((ms) / 1000) / 60) / 60) - (days * 24));
     let minutes = Math.floor((((ms) / 1000) / 60) - (days * 1440 + hours * 60));
     let seconds = Math.floor(((ms) / 1000) - (days * 86400 + hours * 3600 + (minutes * 60)));
     let myTime = `${days}:${hours}:${minutes}:${seconds}`
     return myTime;
}
function compareToCurrentDate(date, time) {
     let current = new Date();
     let myDate = date.getMonth() + ' ' + date.getDate() + ', ' + date.getFullYear() + ' ' + time;
     let due = new Date(myDate);
     console.log(due - current);
     return due - current;

}
function clickHandler(event) {
     el = $(this);
     if (el.attr('id') == ('submitNewTask')) {
          console.log('got 1');
          confirmTaskInfo();
     }
     else {
          id = el.parent().parent().data('id');
          if (el.hasClass('delTask')) {
               deleteTask(id);
          }
          if (el.attr('id') == ('markDone')) {
               updateTask(id, 'completed', 'true')
          }
     }
}
function confirmTaskInfo() {
     if ($('#inTitle').val() && Date($('#inDue').val()) && $('#inDetails').val()) {
          let currentDate = new Date()
          let currentD = currentDate.getDate();
          let currentM = currentDate.getMonth();
          let currentY = currentDate.getFullYear();
          currentDate = currentY + '-' + currentM + '-' + currentD;
          addTask($('#inTitle').val(), $('#inDetails').val(), $('#inDue').val(), $('#inDueTime').val(), currentDate);
          $('#inTitle').val('');
          $('#inDetails').val('')
          $('#inDue').val('')
          $('#inDueTime').val('')
     }
}