// import { startTimer, stopTimer } from "./timer.js"

/// Buttun Handler Functions

var isStarted = false

function toggleWrite() {
    if (!isStarted) {
        document.getElementById("prompt-input").disabled = true
        document.getElementById("input-textarea").disabled = false
        document.getElementById("timer-input-hour").disabled = true
        document.getElementById("timer-input-minute").disabled = true
        document.getElementById("timer-input-second").disabled = true
        document.getElementById("startStopButton").textContent = "Stop"

        startTimer()
    } else {
        document.getElementById("prompt-input").disabled = false
        document.getElementById("input-textarea").disabled = true
        document.getElementById("timer-input-hour").disabled = false
        document.getElementById("timer-input-minute").disabled = false
        document.getElementById("timer-input-second").disabled = false
        document.getElementById("startStopButton").textContent = "Start"

        stopTimer()
    }

    isStarted = !isStarted
}

function copyPromptLink() {
    let searchParams = new URLSearchParams(window.location.search)

    searchParams.set("prompt", document.getElementById("prompt-input").value)

    let urlWithoutParams = window.location.href.split('?')[0];

    navigator.clipboard.writeText(urlWithoutParams + "?" + searchParams.toString())
}



/// Init

let searchParams = new URLSearchParams(window.location.search)

if (searchParams.has("prompt")) {
    document.getElementById("prompt-input").value = searchParams.get("prompt")
}