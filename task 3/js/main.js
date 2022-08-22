    let sec = 00;
    let min = 00;
    let seconds = document.getElementById('seconds')
    let minutes = document.getElementById('minutes')
    let interval;
    const starter = document.getElementById('start')
    const pauser = document.getElementById('pause')
    const reset = document.getElementById('reset')
const timeGoingFun = () => {
    sec++
    if(sec <= 9){
        seconds.innerText = '0' + sec
    } else {seconds.innerText = sec}
    if(sec >= 60){
        min++
        if(min <= 9){
            minutes.innerText = '0' + min
            sec = 0
        } else{
            min.innerText = min
            sec = 0
        }
        
    }
    return seconds
}

starter.addEventListener('click', () => {
    interval = setInterval(timeGoingFun, 1000)
})
pauser.addEventListener('click', () => {
    clearInterval(interval)
})
reset.addEventListener('click', () => {
    clearInterval(interval)
    sec = 00
    min = 00
    seconds.innerText = '0' + sec
    minutes.innerText = '0'+ sec
})