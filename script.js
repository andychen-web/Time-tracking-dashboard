const buttons = document.querySelectorAll(".btn");
const timerWrap = document.querySelector(".timers-wrap");
const initBtn = document.getElementById("init-btn");

const timeData = [{
    "title": "Work",
    "timeframes": {
        "daily": {
            "current": 5,
            "previous": 7
        },
        "weekly": {
            "current": 32,
            "previous": 36
        },
        "monthly": {
            "current": 103,
            "previous": 128
        }
    }
},
{
    "title": "Play",
    "timeframes": {
        "daily": {
            "current": 1,
            "previous": 2
        },
        "weekly": {
            "current": 10,
            "previous": 8
        },
        "monthly": {
            "current": 23,
            "previous": 29
        }
    }
},
{
    "title": "Study",
    "timeframes": {
        "daily": {
            "current": 0,
            "previous": 1
        },
        "weekly": {
            "current": 4,
            "previous": 7
        },
        "monthly": {
            "current": 13,
            "previous": 19
        }
    }
},
{
    "title": "Exercise",
    "timeframes": {
        "daily": {
            "current": 1,
            "previous": 1
        },
        "weekly": {
            "current": 4,
            "previous": 5
        },
        "monthly": {
            "current": 11,
            "previous": 18
        }
    }
},
{
    "title": "Social",
    "timeframes": {
        "daily": {
            "current": 1,
            "previous": 3
        },
        "weekly": {
            "current": 5,
            "previous": 10
        },
        "monthly": {
            "current": 21,
            "previous": 23
        }
    }
},
{
    "title": "Self Care",
    "timeframes": {
        "daily": {
            "current": 0,
            "previous": 1
        },
        "weekly": {
            "current": 2,
            "previous": 2
        },
        "monthly": {
            "current": 7,
            "previous": 11
        }
    }
}
]

function clearActivities() {
    // clear all cards
    const cardWraps = document.querySelectorAll(".card-wrap");
    cardWraps.forEach(card => card.remove());
}

function renderCard(btnTime) {

    function calTimeframe(btnTime) {
        if (btnTime === "daily") {
            return "Yesterday";
        } else if (btnTime === "weekly") {
            return "Last Week";
        } else if (btnTime === "monthly") {
            return "Last Month";
        }
    }

    timeData.forEach(activity => {
        // get data
        const activityTitle = activity.title;
        const activityClass = activity.title.toLowerCase().replace(" ", "-");
        const timeframeData = activity.timeframes[btnTime];
        const timeframePrevious = calTimeframe(btnTime);

        // create new element
        const newCard = document.createElement("div");
        newCard.classList.add("card-wrap", activityClass);
        const strToInject =
            `
        <div class="bg orange">
        &nbsp
        </div>
        <div class="time-track time-daily">
        <div> ${activityTitle} </div>
        <h1 class="hrs">${timeframeData.current}hrs
        </h1>
        <div class="previous-wrap">
          <span class="previous">${timeframePrevious} ${timeframeData.previous}hrs</span>
        </div>
      </div>
      <div class="time-track time-weekly">
        <div> ${activityTitle} </div>
        <h1 class="hrs"> ${timeframeData.current}hrs
        </h1>
        <div class="previous-wrap">
          <span class="previous">${timeframePrevious} ${timeframeData.previous}hrs</span>
        </div>
      </div>
      <div class="time-track time-monthly">
        <div> ${activityTitle} </div>
        <h1 class="hrs"> ${timeframeData.current}hrs
        </h1>
        <div class="previous-wrap">
          <span class="previous">${timeframePrevious} ${timeframeData.previous}hrs</span>
        </div>
      </div>
      `

        newCard.innerHTML = strToInject;
        timerWrap.append(newCard);
    })

};


// activate daily btn as default
initBtn.classList.add("activated");
renderCard(initBtn.dataset.option);

function btnColorChange(button) {
    buttons.forEach(btn => {
        btn.classList.remove("activated");
    })
    button.classList.add("activated");
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        btnColorChange(button);
        clearActivities();
        let btnTime = button.dataset.option;
        renderCard(btnTime);
    })
});
