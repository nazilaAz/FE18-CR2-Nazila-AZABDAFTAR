const jsonObj = `[{
    "taskName": "Hit the gym",
    "image": "../images/Gym.jpg",
    "description": "Überall dieselbe alte Leier. Das Layout ist fertig, der Text lässt auf",
    "importance": 0
  }, {
    "taskName": "Pay bills",
    "image": "../images/PayBills.jpg",
    "description": "Überall dieselbe alte Leier. Das Layout ist fertig",
    "importance": 0
  }, {
    "taskName": "Meet George",
    "image": "../images/MeetGeorg.jpg",
    "description": "Reserve a Restaurant for our Meeting!",
    "importance": 0
  }, {
    "taskName": "Buy eggs",
    "image": "../images/eggs.jpg",
    "description": "Shop at Billa.",
    "importance": 0
  }, {
    "taskName": "Read a book",
    "image": "../Images/books.jpg",
    "description": "zum Beispiel",
    "importance": 0
  }, {
    "taskName": "Organize office",
    "image": "../images/organize.jpg",
    "description": "das es ebenso verdient wahrgenommen zu werden: Webstandards nämlich",
    "importance": 0
  }, {
    "taskName": "Renew car insurance",
    "image": "../Images/car.jpg",
    "description": "Denn esse est percipi - Sein ist wahrgenommen",
    "importance": 0
  }, {
    "taskName": "Sign up for online course",
    "image": "../images/online.jpg",
    "description": "HTML, CSS, JavaScript",
    "importance": 0
  }, {
    "taskName": "Call Sam For payments",
    "image": "Images/phone.jpg",
    "description": "Damit das Layout nun nicht nackt im Raume steht und sich klein und leer vorkommt",
    "importance": 0
  }, {
    "taskName": "Make payment to Bluedart",
    "image": "../Images/puzzle-2500328_1280.jpg",
    "description": "ere Sätze lang zu begleiten",
    "importance": 0
  }, {
    "taskName": "Having a Party",
    "image": "../images/party.jpg",
    "description": "t percipi - Sein ist wahrgenommen werden. Und weil Sie nun schon die Güte haben, mich ein pa",
    "importance": 0
  }, {
    "taskName": "Send Email to Hannah",
    "image": "../images/Email.jpg",
    "description": " Zwecke erschaffen, immer im Schatten meines großen Bruders »Lorem Ipsum",
    "importance": 0
  }]`;


const taskList = JSON.parse(jsonObj);
//console.log(taskList[11].importance);

for (let taskListValue of taskList) {
    document.getElementById("result").innerHTML += `
    <div>
<div class="card shadow-lg h-100">
<div class="topCard">
    <button type="button" class="btn btn-secondary btn-info btnTopCard">Tasks</button>
    <div class="svgCard">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
            <path
                d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
            <path
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
        </svg>
    </div>
</div>

<img src="${taskListValue.image}" class="card-img-top" alt="${taskListValue.taskName}">
<div class="card-body">
    <h5 class="card-title">${taskListValue.taskName}</h5>
    <p class="card-text">${taskListValue.description}</p>
    <hr>
    <div class="priorityLevel">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
            <path
                d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
        <p class="mx-2">Priority level:</p>
        <button type="button" class="btn btn-success mx-2 taskPri btnColor" id="taskPriority" ">${taskListValue.importance}</button>
    </div>
    <div class="deadtimeCard">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
            <path
                d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
            <path
                d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        </svg>
        <p>Deadtime:</p>
        <p>11/02/2023</p>
    </div>
    <hr>
    <!--Buttons-->
    <div class="btnBottomCard">
        <a href="#" class="btn btn-success btnTopCard">Delete</a>
        <a href="#" class="btn btn-danger btnTopCard">Done</a>
    </div>
</div>
</div>
</div>`;
}

let taskPri = document.getElementsByClassName("taskPri");
for (let i = 0; i < taskPri.length; i++) {

    taskPri[i].addEventListener("click", function() {
        taskList[i].importance = taskList[i].importance + 1;

        if (taskList[i].importance <= 5) {
            document.getElementsByClassName("taskPri")[i].innerHTML =
                taskList[i].importance;
        }

        if (taskList[i].importance <= 1) {
            document.getElementsByClassName("taskPri")[i].classList.add("btn-success");
        } else if (taskList[i].importance <= 3) {
            document.getElementsByClassName("taskPri")[i].classList.remove("btn-success");
            document.getElementsByClassName("taskPri")[i].classList.add("btn-warning");

        } else {
            document.getElementsByClassName("taskPri")[i].classList.remove("btn-warning");
            document.getElementsByClassName("taskPri")[i].classList.add("btn-danger");
        }
    })
}