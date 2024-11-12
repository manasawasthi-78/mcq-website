const quizDB = [
    {
        question: "Q1: Who was the founder of the Maurya Empire??",
        a: "Ashoka",
        b: "Chandragupta Maurya",
        c: "Bindusara",
        d: "Bimbisara",
        ans: "ans2"
    },
    {
        question: "Q2: The battle of Plassey was fought in the year:",
        a: "1757",
        b: "1764",
        c: "1754",
        d: "1748",
        ans: "ans1"
    },
    {
        question: "Q3: Which Mughal Emperor built the Taj Mahal ?",
        a: " Akbar",
        b: " Aurangzeb",
        c: "Shah Jahan",
        d: "Jahangir",
        ans: "ans3"
    },
    {
        question: "Q4: Who was the first President of the Indian National Congress?",
        a: "Dadabhai Naoroji",
        b: " W.C. Banerjee",
        c: "A.O. Hume",
        d: " Bal Gangadhar Tilak",
        ans: "ans2"
    },
    {
        question: "Q5: The Quit India Movement was launched in the year:?",
        a: "1940",
        b: "1942",
        c: "1945",
        d: "1939",
        ans: "ans2"
    },
    {
        question: "Q6: The ‘Chipko Movement’ is associated with:",
        a: "Preventing child labor",
        b: "Environmental conservation",
        c: " Women’s education",
        d: " Industrial development",
        ans: "ans2"
    },
    {
        question: "Q7:Who among the following was associated with the doctrine of Passive Resistance?",
        a: "Subhash Chandra Bose",
        b: "M.K. Gandhi",
        c: " Aurobindo Ghosh",
        d: "Jawaharlal Nehru",
        ans: "ans3"
    },
    {
        question: "Q8: The First Anglo-Maratha War was fought during the years:",
        a: "1775–1782",
        b: "1775–1782",
        c: "1765–1772",
        d: "1785–1790",
        ans: "ans1"
    },
    {
        question: "Q9: Who introduced the Permanent Settlement in India?",
        a: "Warren Hastings",
        b: "Lord Cornwallis",
        c: "Lord Wellesley",
        d: "Lord Curzon",
        ans: "ans2"
    },
    {
        question: "Q10: Who is considered the ‘Father of Indian Renaissance’?",
        a: "B.R. Ambedkar",
        b: "Raja Ram Mohan Roy",
        c: "Bal Gangadhar Tilak",
        d: "Rabindranath Tagore",
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
