const quizDB = [
    {
        question: "Q1:Who is known as the 'Father of the Indian Constitution' ?",
        a: "Dr. Rajendra Prasad",
        b: "Dr. B.R. Ambedkar",
        c: "Jawaharlal Nehru",
        d: "Mahatma Gandhi",
        ans: "ans2"
    },
    {
        question: "Q2:Which part of the Indian Constitution deals with Fundamental Rights?",
        a: "Part II",
        b: "Part III",
        c: "Part IV",
        d: "Part V",
        ans: "ans2"
    },
    {
        question: "Q3: Which article of the Indian Constitution grants special status to Jammu & Kashmir?",
        a: " Article 356",
        b: " Article 360",
        c: "Article 370",
        d: "Article 368",
        ans: "ans3"
    },
    {
        question: "Q4: In the Indian Constitution, the Directive Principles of State Policy are enshrined in which part?",
        a: "Part III",
        b: "Part IV",
        c: "Part V",
        d: "Part VI",
        ans: "ans2"
    },
    {
        question: "Q5: The power to proclaim a state of emergency in India lies with the:",
        a: "Prime Minister",
        b: "President",
        c: "Chief Justice of India",
        d: "Parliament",
        ans: "ans2"
    },
    {
        question: "Q6: Which of the following is a feature of the Indian Parliamentary System?",
        a: "Dual Citizenship",
        b: "Bicameral Legislature",
        c: "Presidential Rule",
        d: "Dual Government",
        ans: "ans2"
    },
    {
        question: "Q7: Who among the following appoints the Chief Election Commissioner of India?",
        a: "President of India",
        b: "Prime Minister",
        c: "Chief Justice of India",
        d: "Lok Sabha Speaker",
        ans: "ans1"
    },
    {
        question: "Q8: The Panchayati Raj System was adopted to:",
        a: "Decentralize power",
        b: "Increase agricultural production",
        c: "Ensure urban development",
        d: "Improve defense capabilities",
        ans: "ans1"
    },
    {
        question: "Q9: Who has the authority to dissolve  ?",
        a: "President",
        b: "Prime Minister",
        c: "Speaker of the Lok Sabha",
        d: "Chief Justice of India",
        ans: "ans1"
    },
    {
        question: "Q10: What is the maximum gap allowed between two sessions of the Parliament?",
        a: "3 months",
        b: "6 months",
        c: "9 months",
        d: "12 months",
        ans: "ans2"
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
