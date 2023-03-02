// Попап

const popup = document.getElementById('popup');
const popupOpen = document.getElementById('popup-open');
const popupClose = document.getElementById('popup-close');

popupOpen.addEventListener('click', function(e){
    e.preventDefault();
    popup.classList.add('active');
})

popupClose.addEventListener('click', function(e){
    e.preventDefault();
    popup.classList.remove('active');
})


// Даты попапа

function getAvailability(dateInput) {
    let answer;
    const day = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const currentDate = [day, month, year];
    let userDate = dateInput.split(' ');
    let Months = [
        'январ',
        'феврал',
        'март',
        'апрел',
        'ма',
        'июн',
        'июл',
        'август',
        'сентябр',
        'ноябр',
        'декабр',
    ];
    userDate = [
        parseInt(userDate[0], 10),
        Months.indexOf(userDate[1].slice(0, -1)) + 1,
        parseInt(userDate[2], 10)
    ];

    answer = "succes"
    for (let i = 2; i >= 0; i--) {
        if (currentDate[i] > userDate[i]) {
            answer = "dateMismatch";
            break
        }
    }

    return answer;
}

function createMessage(answer) {
    let message;

    if (answer == "succes") {
      message = "На эти даты есть свободные номера. Пока есть.";
    } else if (answer == "dateMismatch") {
      message = "Мы не можем отправить вас в прошлое.";
    }

    return message;
}


const firstDate = document.getElementById("#firstDate");
const secondDate = document.getElementById("#secondDate");
const firstDateState = document.getElementById("#firstDateState");
const secondDateState = document.getElementById("secondDateState");

firstDate.onchange = function() {
    let firstDateMessage = createMessage(getAvailability(firstDate.value));
    firstDateState.value = firstDateMessage;
}

secondDate.onchange = function() {
    let secondDateMessage = createMessage(getAvailability(secondDate.value));
    secondDateState.value = secondDateMessage;
}
