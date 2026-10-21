
let questions: string[] = [
    "2+3=5?",
    "SUN IS PLANET?",
    "WEEK HAS 7 DAYS?",
    "FISH LIVE IN TREES?",
    "10>6?"
]

let answers: boolean[] = [
    true,
    false,
    true,
    false,
    true
]

let score = 0
let questionIndex = 0

function askQuestion() {
    if (questionIndex < questions.length) {
        basic.showString("Q" + (questionIndex + 1))
        basic.showString(questions[questionIndex])
        basic.showString("A=T B=F")
    } else {
        basic.showString("SCORE")
        basic.showNumber(score)
        if (score >= 4) {
            basic.showIcon(IconNames.Happy)
            basic.showString("GREAT!")
        } else {
            basic.showString("TRY AGAIN")
        }
        basic.showString("A+B RESTART")
    }
}

function checkAnswer(playerAnswer: boolean) {
    if (questionIndex < questions.length) {
        if (playerAnswer == answers[questionIndex]) {
            score += 1
            basic.showIcon(IconNames.Yes)
        } else {
            basic.showIcon(IconNames.No)
        }

        basic.pause(500)
        questionIndex += 1
        askQuestion()
    }
}

input.onButtonPressed(Button.A, function () {
    checkAnswer(true)
})

input.onButtonPressed(Button.B, function () {
    checkAnswer(false)
})

input.onButtonPressed(Button.AB, function () {
    score = 0
    questionIndex = 0
    basic.showString("QUIZ")
    askQuestion()
})

basic.showString("QUIZ")
askQuestion()

