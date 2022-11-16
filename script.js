const speedInput = document.getElementById("speed-input")
const calcTempoButton = document.getElementById("calc-tempo")
const calcSpeedButton = document.getElementById("calc-speed")
const tempoView = document.getElementById("speed-calc")

const tempoPara = document.getElementById("tempo")
const speedPara = document.getElementById("speed")

const tempoMin = document.getElementById("tempo-min")
const tempoSec = document.getElementById("tempo-sec")

const distInput = document.getElementById("dist-input")
const distTempoHr = document.getElementById("dist-tempo-hr")
const distTempoMin = document.getElementById("dist-tempo-min")
const distTempoSec = document.getElementById("dist-tempo-sec")
const calcRacePaceBtn = document.getElementById("calc-race-pace")

const raceSpeedPara = document.getElementById("race-speed")
const racePacePara = document.getElementById("race-pace")

const elevDist = document.getElementById("dist-elev")
const Elev = document.getElementById("elev")
const calcElevationBtn = document.getElementById("calc-elev")
const superElev = document.getElementById("super-elev")

const calcSpeedToTempo = function(speed) { 
    const tempo = `${Math.trunc(60 / speed)}:${String(Math.trunc((60 / speed) * 60 % 60)).padStart(2, '0')}`
    return tempo
}

const calcTempoToSpeed = function(min, sec) {
    const speed = (3600 / ((parseInt(min) * 60) + parseInt(sec))).toFixed(2)
    return speed
}

const calcRaceSpeed = function(dist, hr, min, sec) {
    const raceSpeed = (dist / (hr + (min / 60) + (sec / 3600))).toFixed(2)
    return raceSpeed

}

const calcRacePace = function(dist, hr, min, sec) {
    const raceSpeed = (dist / (hr + (min / 60) + (sec / 3600))).toFixed(2)
    const racePace = `${Math.trunc(60 / raceSpeed)}:${String(Math.trunc((60 / raceSpeed) * 60 % 60)).padStart(2, '0')}`
    return racePace
}

const calcElevation = function(elev, dist) {
    const superElev = ((elev / (dist * 1000)) * 100).toFixed(2)
    return superElev

} 

calcTempoButton.addEventListener("click", function() {
    const tempo = calcSpeedToTempo(speedInput.value)
    tempoPara.textContent = `${speedInput.value}km/h je ${tempo}min/km`
})

calcSpeedButton.addEventListener("click", function() {
    const speed = calcTempoToSpeed(tempoMin.value, tempoSec.value)
    speedPara.textContent = `${tempoMin.value}:${tempoSec.value}min/km je ${speed}km/h`
})

calcRacePaceBtn.addEventListener("click", function() {
    const speed = calcRaceSpeed(parseInt(distInput.value), parseInt(distTempoHr.value), parseInt(distTempoMin.value), parseInt(distTempoSec.value))
    const pace = calcRacePace(parseInt(distInput.value), parseInt(distTempoHr.value), parseInt(distTempoMin.value), parseInt(distTempoSec.value))
    raceSpeedPara.textContent = `Musíš bežať rýchlosťou ${speed}km/h`
    racePacePara.textContent = `Musíš bežať v tempe ${pace}min/km`
})

calcElevationBtn.addEventListener("click", function() {
    const superEl = calcElevation(elev.value,elevDist.value)
    superElev.textContent = `Priemerný sklon kopca je ${superEl}%`

})