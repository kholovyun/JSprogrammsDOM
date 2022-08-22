const createElement = () => {
        const container = document.querySelector('#container')
        const element = document.createElement('div')
        element.className = 'element'
        element.innerText = Math.floor(Math.random() * 20 + 1)
        container.append(element)
}

const intervalFun = () => {
    const stopper = document.getElementById('stop')
    const starter = document.getElementById('start')
    let interval = setInterval(createElement, 1000)
    starter.addEventListener('click', () => {
        clearInterval(interval)
        interval = setInterval(createElement, 1000)
    })
    stopper.addEventListener('click', () => {
        clearInterval(interval)
    })
}

intervalFun()






