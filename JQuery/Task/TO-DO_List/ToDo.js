$(document).ready(function () {

    let tablebody = $("#MyTable tbody");

    // let indexMain;
    let obj = [];

    //prevent from losing data after reload:
    let getAgain = localStorage.getItem("objData");
    // debugger
    if (getAgain) {
        obj = JSON.parse(getAgain);
    }
    addData();


    function addData() {
        // debugger;
        let allData = "";
        obj.forEach((row) => {
            allData += `
                <tr>
                    <td class="align-middle" style="cursor:pointer; text-decoration:${row.completed ? "line-through" : 'none'}; background-color:${row.completed ? "gray" : 'none'}"; onclick="CompleteTask(${row.index})">${row.index}</td>
                    <td class="align-middle">
                        <input type="checkbox" ${row.completed ? "checked" : ''}  class="form-check-input border border-secondary-subtle" id="checkedBox" onchange="BoxCheck(${row.index})">
                    </td>
                    <td class="align-middle" onclick="CompleteTask(${row.index})" style="cursor:pointer; text-decoration:${row.completed ? "line-through" : 'none'}; background-color:${row.completed ? "gray" : 'none'}";>
                    ${row.task}</td>
                    <td class="align-middle">
                        <button id="${row.index}" class="btn btn-outline-danger py-1 px-2" 
                        onclick="deleteTask(${row.index})">Remove</button>
                    </td>
                </tr>
                `
        })
        tablebody.html(allData);

        //prevent from losing data after reload:
        localStorage.setItem("objData", JSON.stringify(obj))
    }

    $("#addTaskBtn").click(function () {
        // debugger;

        //inserting new task
        let AddedTaskVal = $("#addTask").val();
        if (AddedTaskVal.trim() === "") {
            alert("Enter a task please!");
            return;
        }
        else {
            obj.unshift({            //note here the unshift method...it is for the add data at start of array
                task: AddedTaskVal,
                completed: false,
            });
            $("#addTask").val("");
            indexing();
        }
        addData();
    });


    //indexing : set the index no
    function indexing() {
        obj.forEach((row, index) => {
            row.index = index + 1;
        });
    }


    //removing the task
    deleteTask = (indexNum) => {
        obj = obj.filter(x => x.index !== indexNum);

        indexing();
        addData();
    }
    //Note: if we write like this:-----  function deleteTask (indexNum){} ------ then it is not working


    //CompleteTask
    CompleteTask = (indux) => {
        obj.forEach(CurrentTask => {
            if (CurrentTask.index === indux) {
                CurrentTask.completed = !CurrentTask.completed;
            }
        });
        // console.log($(this)
        // $(e).css("text-decoration", "line-through")
        addData();
    }


    BoxCheck = (index) => {
        obj.forEach(ele => {
            if (ele.index === index) {
                ele.completed = !ele.completed;
            }
        });
        addData();
    }

});