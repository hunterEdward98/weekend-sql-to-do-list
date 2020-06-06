$(document).ready(() => {
     getTasks();
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
     }).catch((response) => {
          console.log(response, 'error');
     });
}
function task2DOM(array) {
     for (const task of array) {
          let row = $(`<div class="row justify-content-center col-6 p-3 mb-1 bg-dark2 text-center" data-id="${task.id}"></div>`);
          row.append(`<div style="background-color:lightblue;color:black" class="col-10 h2 text-center p-3 mb-1 bg-dark2">TASK #
          ${task.id}</div>`);
          row.append(`<div class="col-12 h5 col-md-6 col-lg-4 text-center p-3 mb-1 white">TASK:<br>
          ${task.title}</div>`);
          row.append(`<div class="col-12 h5 col-md-6 col-lg-4 text-center p-3 mb-1 white">DETAILS:<br>
          ${task.description}</div>`);
          date = new Date(task.done_by_date);
          myDate =
               date.getFullYear() + "/" + (date.getMonth()) + "/" + date.getDate();
          row.append(`<div class="col-12 h5 col-md-6 col-lg-4 text-center p-3 mb-1 white">NEED DONE:<br>
          ${myDate} ${task.done_by_time}</div>`);
          dateAssigned = new Date(task.added);
          myDate =
               dateAssigned.getFullYear() + "/" + (dateAssigned.getMonth()) + "/" + dateAssigned.getDate();
          row.append(`<div class="col-12 h5 col-md-6 col-lg-4 text-center p-3 mb-1 white">ASSIGNED:<br>
          ${myDate}</div>`);
          row.append(`<div class="col-12 h5 col-md-6 col-lg-4 text-center p-3 mb-1 white">COMPLETED:
          ${task.completed}</div>`);
          row.append(`<div class="col-12 h5 col-md-6 col-lg-4 text-center p-3 mb-1 ">
          <button class = 'delTask btn btn-danger'>DELETE TASK</button></div>`);
          $('#tasksGoHere').append(row);
     }
}