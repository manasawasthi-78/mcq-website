const quizDB = [
    {
        question: "Q1: What is the primary goal of economic planning?",
        a: "Industrial growth",
        b: "Agricultural growth",
        c: "Social welfare and economic equality",
        d: "Increase in trade",
        ans: "ans3"
    },
    {
        question: "Q2: Increase in trade?",
        a: "Increase in prices of certain goods",
        b: "Increase in the overall price level",
        c: "Decrease in prices of essential goods",
        d: "Increase in employment",
        ans: "ans2"
    },
    {
        question: "Q3: In a mixed economy, which of the following sectors is the government involved in?",
        a: "Only industrial sector",
        b: "Only agricultural sector",
        c: "Both public and private sectors",
        d: "Only private sector",
        ans: "ans3"
    },
    {
        question: "Q4: Which term describes a situation where there is only one buyer in the market?",
        a: "Monopoly",
        b: "Monopsony",
        c: "Oligopoly",
        d: "Perfect competition",
        ans: "ans2"
    },
    {
        question: "Q5: What does GDP stand for?",
        a: "Gross Departmental Product",
        b: "Gross Domestic Product",
        c: "General Domestic Product",
        d: "Gross Development Product",
        ans: "ans2"
    },
    {
        question: "Q6: Which of the following policies is aimed at reducing inflation?",
        a: "Expansionary monetary policy",
        b: "Contractionary monetary policy",
        c: "Fiscal policy",
        d: " Trade policy",
        ans: "ans2"
    },
    {
        question: "Q7: What is the main objective of the 'Green Revolution' in India?",
        a: "Industrial growth",
        b: "Increase in food grain production",
        c: " Increase in foreign investment",
        d: "Improvement in IT sector",
        ans: "ans2"
    },
    {
        question: "Q8:  What is 'Deflation'",
        a: "An increase in prices",
        b: "A fall in the general price level",
        c: "An increase in demand for goods",
        d: "A rise in employment",
        ans: "ans2"
    },
    {
        question: "Q9: What is meant by the term ‘capitalism’",
        a: "Private ownership of resources",
        b: "Government ownership of resources",
        c: "Equal distribution of resources",
        d: "Public-private partnership",
        ans: "ans1"
    },
    {
        question: "Q10:  Which organization is known as the 'Central Bank' of India?",
        a: "State Bank of India",
        b: "National Bank for Agriculture and Rural Development (NABARD)",
        c: "Reserve Bank of India (RBI)",
        d: "Industrial Development Bank of India (IDBI)",
        ans: "ans3"
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
