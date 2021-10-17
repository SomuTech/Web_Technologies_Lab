 
const start=document.getElementById("start-btn");
const next=document.getElementById('next-btn');
const submit = document.getElementById('submit-btn')
const questionContainer=document.getElementById('question-container');
let questionElement= document.getElementById("question");
const answerButtons=document.getElementById('answer-buttons');

let QuestionIndex, quizScore=0;


start.addEventListener("click",startGame);
next.addEventListener("click", () =>{
    QuestionIndex++;
    setNextQuestion();
});

function startGame() {
    start.classList.add("hide");
    QuestionIndex = 0;
    questionContainer.classList.remove("hide");
    setNextQuestion();
    quizScore=0;
}

function setNextQuestion() {
    resetState();
    showQuestion(questions[QuestionIndex]);
}

function resetState(){
    clearStatusClass(document.body)
    next.classList.add("hide");
    while(answerButtons.firstChild)
        answerButtons.removeChild(answerButtons.firstChild);
}

function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if(answer.correct)
            button.dataset.correct = answer.correct;
        button.addEventListener("click",selectAnswer);
        answerButtons.appendChild(button);
    });
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;

    setStatusClass(document.body,correct)
    Array.from(answerButtons.children).forEach((button) => {
        setStatusClass(button,button.dataset.correct)
    });

    if(questions.length> QuestionIndex + 1)
        next.classList.remove("hide");
    else{
        submit.classList.remove("hide");
        submit.addEventListener("click",stopGame);
    }

    if(selectedButton.dataset = correct)
        quizScore++;
        //
        document.getElementById('right-answers').innerHTML = quizScore;
}

function setStatusClass(element,correct){
    clearStatusClass(element);
    if(correct)
        element.classList.add("correct");
    else
        element.classList.add("wrong");
}

function clearStatusClass(element)
{
    element.classList.remove('correct');
    element.classList.remove('wrong');
    
}

function stopGame()
{
    submit.classList.add("hide");
    questionContainer.classList.add("hide");
    document.getElementById('tq').innerText="Thank You";
}

//questions
const questions=[
    {
        question:'1.which one of the following is called as "Brain of Computer System" ?',
        answers:[
            {text:'ALU',correct:false},
            {text:'Control Unit',correct:false},
            {text:'CPU',correct:true},
            {text:'Memory',correct:false}
        ],
    },
    {
        question:'2.The Octal System uses powers of....?',
        answers:[
            {text:'8',correct:true},
            {text:'2',correct:false},
            {text:'10',correct:false},
            {text:'16',correct:false}
        ],
    },
    {
        question:'3.which of these are languages?',
        answers:[
            {text:'html',correct:false},
            {text:'React',correct:false},
            {text:'python',correct:true},
            {text:'eclipse',correct:false}
        ],
    },
    {
        question:'4.By Which Javascript code is used?',
        answers:[
            {text:'Events',correct:false},
            {text:'RMI',correct:false},
            {text:'Methods/Functions',correct:true},
            {text:'Classes/Objects',correct:false}
        ],
    },
     {
        question:'5.What is the value of 4-8*2+5?',
        answers:[
            {text:'-7',correct:true},
            {text:'10',correct:false},
            {text:'-3',correct:false},
            {text:'17',correct:false}
        ],
    },
    {
        question:'6.Which one of the following is not a framework?',
        answers:[
            {text:'python',correct:true},
            {text:'Django',correct:false},
            {text:'React',correct:false},
            {text:'Angular',correct:false}
        ],
    },
     {
        question:'7.In javascript, which is not valid data type ?',
        answers:[
            {text:'Number',correct:false},
            {text:'Undefined',correct:false},
            {text:'Boolean',correct:false},
            {text:'Float',correct:true}
        ]
    } ,
    {
        question:'8.In javascript, which is not valid data type ?',
        answers:[
            {text:'Number',correct:false},
            {text:'Undefined',correct:false},
            {text:'Boolean',correct:false},
            {text:'Float',correct:true}
        ]
    },
    {
        question:'9.Which one of the following is not a framework?',
        answers:[
            {text:'python',correct:true},
            {text:'Django',correct:false},
            {text:'React',correct:false},
            {text:'Angular',correct:false}
        ],
    }, 
    {
        question:'10.What is the value of 9+8*2-5?',
        answers:[
            {text:'-7',correct:true},
            {text:'20',correct:false},
            {text:'-3',correct:false},
            {text:'29',correct:false}
        ],
    }
];
