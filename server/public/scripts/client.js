$(document).ready(() => {
     getTasks();
     $('.content').on('click', 'button', clickHandler);
})


function getTasks() {
     $.ajax({
          method: 'GET',
          url: `toDo`
     }).then((response) => {
          console.log(response, ': submitted');
          task2DOM(response);
     }).catch((response) => {
          console.log(response, 'error');
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
     $.ajax({
          method: 'DELETE',
          url: `toDo/${id}`
     }).then((response) => {
          console.log('DELETED')
          getTasks();
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
          myDate =
               date.getFullYear() + "/" + (date.getMonth()) + "/" + date.getDate();
          row.append(`<div class="col-sm-12 h5 col-md-6 col-lg-4 text-center p-3 mb-1 white">NEED DONE:<br>
          ${myDate} ${task.done_by_time}</div>`);
          dateAssigned = new Date(task.added);
          myDate =
               dateAssigned.getFullYear() + "/" + (dateAssigned.getMonth()) + "/" + dateAssigned.getDate();
          row.append(`<div class="col-sm-12 h5 col-md-6 col-lg-4 text-center p-3 mb-1 white">ASSIGNED:<br>
          ${myDate}</div>`);
          row.append(`<div class="col-sm-12 h5 col-md-6 col-lg-4 text-center p-3 mb-1 white">COMPLETED:
          ${task.completed}</div>`);
          row.append(`<div class="col-sm-12 h5 col-md-6 col-lg-4 text-center p-3 mb-1 ">
          <button class = 'delTask btn btn-danger'>DELETE TASK</button></div>`);
          $('#tasksGoHere').append(row);
     }
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
     }
}
function confirmTaskInfo() {
     if ($('#inTitle').val() && Date($('#inDue').val()) && $('#inDetails').val()) {
          let currentDate = new Date()
          let currentD = currentDate.getDate();
          let currentM = currentDate.getMonth();
          let currentY = currentDate.getYear();
          currentDate = currentY + '-' + currentM + '-' + currentD;
          addTask($('#inTitle').val(), $('#inDetails').val(), $('#inDue').val(), $('#inDueTime').val(), currentDate);
     }
}
function timeConvertor(time) {
     console.log(time);
     var PM = time.match('PM') ? true : false

     time = time.split(':')
     var min = time[1]

     if (PM) {
          var hour = 12 + parseInt(time[0], 10)
     } else {
          var hour = time[0]
     }

     console.log(hour + ':' + min)
}