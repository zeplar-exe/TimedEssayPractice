var timerIntervalId = null

function startTimer() {
    let hourInputElement = document.getElementById("timer-input-hour")
    let minuteInputElement = document.getElementById("timer-input-minute")
    let secondInputElement = document.getElementById("timer-input-second")

    let date = createDate(hourInputElement.value, minuteInputElement.value, secondInputElement.value)
    
    timerIntervalId = window.setInterval(function() {
        date = decrementSecond(date)
        console.log(date)

        hourInputElement.value = date.getHours()
        minuteInputElement.value = date.getMinutes()
        secondInputElement.value = date.getSeconds()

        if (date.getSeconds() === 0 && date.getMinutes() === 0 && date.getHours() === 0) {
            window.clearInterval(timerIntervalId)
            stopTimer()
            toggleWrite()
        }
    }, 1000)
}

function stopTimer() {
    window.clearInterval(timerIntervalId)
}

function decrementSecond(date) {
    let seconds = date.getSeconds();

    if (seconds == 0)
        return date;

    date.setSeconds(seconds - 1);

    return date;
}

function createDate(hours, minutes, seconds) {
    return new Date(0, 0, 0, hours=hours, minutes=minutes, seconds=seconds);
}