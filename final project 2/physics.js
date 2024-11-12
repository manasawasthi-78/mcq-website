const quizDB = [
    {
        question: "Q1: ?",
        a: "",
        b: "",
        c: "",
        d: "",
        ans: "ans"
    },
    {
        question: "Q2: ?",
        a: "",
        b: "",
        c: "",
        d: "",
        ans: "ans"
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a: "Hypertext Transfer Product",
        b: "Hypertext Test Protocol",
        c: "Hey Transfer Protocol",
        d: "Hypertext Transfer Protocol",
        ans: "ans4"
    },
    {
        question: "Q4: What is the full form of JS?",
        a: "JavaScript",
        b: "JavaSuper",
        c: "JustScript",
        d: "JordenShoes",
        ans: "ans1"
    },
    {
        question: "Q5: What is the main purpose of CSS?",
        a: "To add behavior to HTML",
        b: "To style HTML elements",
        c: "To structure content",
        d: "To make websites dynamic",
        ans: "ans2"
    },
    {
        question: "Q6: Which of the following is a JavaScript framework?",
        a: "React",
        b: "HTML",
        c: "CSS",
        d: "MySQL",
        ans: "ans1"
    },
    {
        question: "Q7: What is the full form of SQL?",
        a: "Structured Query List",
        b: "Simple Query Language",
        c: "Structured Query Language",
        d: "Statements Query Language",
        ans: "ans3"
    },
    {
        question: "Q8: Which HTML tag is used to define an internal style sheet?",
        a: "<css>",
        b: "<style>",
        c: "<script>",
        d: "<link>",
        ans: "ans2"
    },
    {
        question: "Q9: Which company developed JavaScript?",
        a: "Mozilla",
        b: "Netscape",
        c: "Microsoft",
        d: "Apple",
        ans: "ans2"
    },
    {
        question: "Q10: What is the correct syntax for referring to an external script called 'app.js'?",
        a: "<script src='app.js'>",
        b: "<script href='app.js'>",
        c: "<script ref='app.js'>",
        d: "<script name='app.js'>",
        ans: "ans1"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
};

const deselectAll = () => {
    answers.forEach(currCheckedAns => currCheckedAns.checked = false);
};

loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach(curAnsElem => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
};

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;  
    }

    questionCount++;
    deselectAll();

    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `
            <h3> You scored ${score}/${quizDB.length} ✌</h3>
            <button class="btn" onclick="location.reload()">Play Again</button>
        `;
        showScore.classList.remove('scoreArea');
    }
});
