const createButton = () => {
    const question = document.getElementsByClassName('question')
    for(let i = 0; i < question.length; i++){
        const button = document.createElement('button')
        button.className = 'btn'
        button.style.width = '70px'
        button.style.height = '30px'
        button.style.background = '#7FFFD4'
        button.style.border = 'none'
        button.innerText = 'ANSWER'
        question[i].append(button)
    }
    
    return question
}
createButton()
const showAnswers = () => {
    const buttons = document.querySelectorAll('.btn')
    const answers = document.getElementsByClassName('answer')
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', () => {
            answers[i].style.display = answers[i].style.display === 'none' ? 'block' : 'none';
        });
    }
    return buttons
} 
showAnswers()