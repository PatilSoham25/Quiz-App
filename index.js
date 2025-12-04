const questions = [
    {
        question: ' Which of the three banks will be merged with the other two to create India’s third-largest bank?',
        options: ['Punjab National Bank', 'Indian Bank', 
            'Bank of Baroda ', 'Dena Bank'],
        answer: 'Indian Bank'
    },
    {
        question: 'HTML stands for',
        options: ['Highest Machine Language', 'HyperText and Links Markup Language',
            'HyperText Markup Language', 'None of these'],
        answer: 'HyperText Markup Language'
    },
    {
        question: 'CSS stands for',
        options: ['Cascading Style Sheets', 'Coloured Style Sheets', 
            'Color and Style Sheets', 'None of these'],
        answer: 'Cascading Style Sheets'
    },
    {
        question: 'Which of the following is one the methods to deep copy an object in JavaScript?',
        options: ['Object.create()', 'JSON.stringify()', 'Object.keys()', 'Object.values()'],
        answer: 'JSON.stringify()'
    },
    {
        question: 'Which operator is used for strict equality comparison in JavaScript (checking both value and type)?',
        options: ['==', '!=', '===', '!=='],
        answer: '==='
    },
    {
        question: 'Which of the following are closures in Javascript?',
        options: ['Variables', 'Functions', 'Objects', 'All of the above'],
        answer: 'All of the above'
    },
    {
        question: 'Which of the following keywords is used to define a variable in Javascript?',
        options: ['let', 'var', 'both a & b', 'None of the above'],
        answer: 'both a & b'
    },
    {
        question: 'How to access HTML elements using class in DOM?',
        options: ['getElementbyId()', 'getElementsbyId()', 'getElementbyClassName()', 'getElementsbyClassName()'],
        answer: 'getElementsbyClassName()'
    },
    {
        question: 'How to access HTML elements using Id in DOM?',
        options: ['getElementbyId()', 'getElementsbyId()', 'getElementbyClassName()', 'getElementsbyClassName()'],
        answer: 'getElementbyId()'
    },
    {
        question: 'What is JavaScript?',
        options: ['JavaScript is a scripting language used to make the website interactive',
             ' JavaScript is an assembly language used to make the website interactive', 
             'JavaScript is a compiled language used to make the website interactive', 
             'None of the above'],
        answer: 'JavaScript is a scripting language used to make the website interactive'
    },

]

let index = 0

const optionsContainer =  document.getElementById('options-container')
const totalScore = questions.length 
let score = 0

const showQuizQuestion = () => {
    const currentQuestion = questions[index]

    const questionArea = document.getElementById('question')
    questionArea.innerText = currentQuestion.question

    currentQuestion.options.forEach((option) => {
        const div = document.createElement('div')
        div.classList.add('options')
        div.innerText = option

        if(option == currentQuestion.answer) {
            div.id="correct-answer"
        }
        div.addEventListener('click', function () {
            if(option == currentQuestion.answer) {
                div.style.backgroundColor = '#198754'
                div.disabled = true; 
                alert(`Hooray! That's correct!`)
                score++
            } else {
                div.style.backgroundColor = '#DC3545'
                alert(`Unfortunately, that's incorrect!`)
                document.getElementById('correct-answer').
                style.backgroundColor = '#198754'
            }

            if(index < questions.length - 1) {
                document.getElementById('next-btn').style.visibility = 'visible'
            } else {
                quizCompleted()
            }
        })

        optionsContainer.append(div)
    })
}

const nextBtn = document.getElementById('next-btn')
nextBtn.addEventListener('click', () => {
    optionsContainer.innerHTML = ''

    index = index + 1 // 0 + 1 = 1
    showQuizQuestion()

    document.getElementById('next-btn').style.visibility = 'hidden'
})

const startQuiz = () => {
    document.getElementById('start-btn').style.display = 'none'
    document.getElementById('quiz-container').style.display = 'block'
    showQuizQuestion()
}

const quizCompleted = () => {
    document.getElementById('quiz-container').style.display = 'none'
    document.getElementById('quiz-completed').style.display = 'block'
    document.getElementById('final-score').innerText = `${score}/${totalScore}`
}

/*
    #Explore:
    Pass arguments to callback function

    () => selectOption (parameter 1 ......)

*/