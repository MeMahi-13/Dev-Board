// For Random bg-color

document.getElementById('clickableImage').addEventListener('click', function () {
    document.body.style.backgroundColor = getRandomColor();
});
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//   number dicrease

let count = 6;
const display = document.getElementById("numberDisplay");
const buttons = document.querySelectorAll(".decreaseButton");

display.textContent = count;

function decreaseCount(event) {
    if (count > 0) {
        count--;
        display.textContent = count;
    }
    event.target.disabled = true;
    event.target.style.pointerEvents = "none";
    event.target.style.opacity = "0.5";
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", decreaseCount);
}

// number increase

let incount = 23;
const increasedisplay = document.getElementById("increaseDisplay");
const increasebuttons = document.querySelectorAll(".increaseButton");

increasedisplay.textContent = incount;

function increaseCount(event) {
    if (incount > 0) {
        incount++;
        increasedisplay.textContent = incount;
    }
}

for (let i = 0; i < increasebuttons.length; i++) {
    increasebuttons[i].addEventListener("click", increaseCount);
}

// date

function showDateAndDay() {
    const currentDate = new Date();
    const day = currentDate.toLocaleString('en-us', { weekday: 'short' });
    const date = currentDate.getDate();
    const month = currentDate.toLocaleString('en-us', { month: 'short' });
    const year = currentDate.getFullYear();

    document.getElementById('date-and-day').innerHTML = `${day},<br> ${date} ${month} ${year}`;
  }

  showDateAndDay();

//   activity

function myFunction() {
    alert("Board updated successfully!");
  }

document.addEventListener('DOMContentLoaded', function () {
    const activityEl = document.getElementById('activity');

    const addActivity = (taskText) => {
        const currentTime = new Date().toLocaleTimeString();
        const newActivity = document.createElement('p');
        newActivity.className = "bg-blue-50 p-2 mt-2 rounded-md";
        newActivity.innerHTML = `You have completed the task: ${taskText} at ${currentTime}`;
        activityEl.appendChild(newActivity);
    };

    document.querySelectorAll('.increaseButton').forEach(button => {
        button.addEventListener('click', function () {
            const taskContainer = this.closest('.task-container'); 
            const taskText = taskContainer.querySelector('.title').innerText; 
            addActivity(taskText);
        });
    });

    const clearHistoryButton = document.getElementById('activity-button');
        clearHistoryButton.addEventListener('click', function () {
            activityEl.innerHTML = '';
        });
});

// new page
document.getElementById('link-page').addEventListener('click', function () {
    window.open('blogs.html');
});