
const createElement = (element, callback) => {
    const newElement = document.createElement(element);
    newElement.className = 'element';
    newElement.innerText = 'Element';
    callback(newElement)
}
const addElementIntoContainer = (element) => {
    const container = document.getElementById('container')
    container.append(element)
    console.log('hello')
}
const addDivButton = document.getElementById('add-item-btn')

addDivButton.addEventListener('click', (e) =>{
    createElement('div', addElementIntoContainer)
})
