const quizDB = [
    {
        question: "Q1: The longest river in India is:?",
        a: "Ganges",
        b: "Yamuna",
        c: "Brahmaputra",
        d: "Godavari",
        ans: "ans1"
    },
    {
        question: "Q2: Which Indian state is the largest producer of coffee?",
        a: "Tamil Nadu",
        b: "Karnataka",
        c: "Kerala",
        d: "Andhra Pradesh",
        ans: "ans2"
    },
    {
        question: "Q3: The Konkan Coast lies along which of the following Indian states?",
        a: "Gujarat",
        b: "Maharashtra and Goa",
        c: "Odisha",
        d: "Tamil Nadu",
        ans: "ans2"
    },
    {
        question: "Q4: Which of these cities is known as the 'Manchester of India'?",
        a: "Ahmedabad",
        b: "Mumbai",
        c: "Kolkata",
        d: "Chennai",
        ans: "ans1"
    },
    {
        question: "Q5: Which mountain range forms the natural boundary between India and Myanmar?",
        a: "Aravalli Range",
        b: "Karakoram Range",
        c: "Eastern Ghats",
        d: "Patkai Range",
        ans: "ans4"
    },
    {
        question: "Q6: The Sunderbans, famous for mangrove forests, is located in:",
        a: "Gujarat",
        b: "West Bengal",
        c: " Assam",
        d: "Maharashtra",
        ans: "ans2"
    },
    {
        question: "Q7: Which river is referred to as the 'Sorrow of Bihar'?",
        a: "Ganga",
        b: "Kosi",
        c: "Son",
        d: "Gandak",
        ans: "ans2"
    },
    {
        question: "Q8: Where are the Gir Forests, famous for Asiatic Lions, located?",
        a: "Maharashtra",
        b: "Karnataka",
        c: "Gujarat",
        d: "Madhya Pradesh",
        ans: "ans3"
    },
    {
        question: "Q9: Which Indian state is known as the 'Land of Five Rivers'?",
        a: "Rajasthan",
        b: "Punjab",
        c: "Haryana",
        d: "Bihar",
        ans: "ans2"
    },
    {
        question: "Q10: Which of these Indian rivers flows from east to westv?",
        a: "Mahanadi",
        b: "Godavari",
        c: "Narmada",
        d: "Krishna",
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
