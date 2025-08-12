const welcomeScreen =document.getElementById("welcomeScreen")
const quizeArea =document.getElementById("quizeArea")

const levels =[
  'RS. 1000000', 
  'RS. 500000',
  'RS. 250000',  
  'RS. 125000',
  'RS. 64000',   
  'RS. 32000',
  'RS. 16000',   
  'RS. 8000',
  'RS. 4000',    
  'RS. 2000',
  'RS. 1000',    
  'RS. 500',
  'RS. 300',     
  'RS. 200',
  'RS. 100'
]

const questions =[
    {
        question:"Who is the known as father of the nation in india ?",
        options :["jawaharlal nehru" , "mahatma gandhi" , "subhash chandra bhos" ,"lokmanya tilak"],
        answer:1,
    },
    {
        question:"what is the capital of france?",
        options :["berlin" , "madrid" , "paris" ,"lisbon"],
        answer:2,
    },
    {
        question:"which plnet is known as red planet ?",
        options :["earth" , "mars" , "jupiter" ,"saturn"],
        answer:1,
    },
    {
        question:"which is a largest mammel ?",
        options :["elephant" , "blue whale" , "giraffe" ,"polar bear"],
        answer:1,
    },
     {
        question:"Who is the known as father of the nation in india ?",
        options :["jawaharlal nehru" , "mahatma gandhi" , "subhash chandra bhos" ,"lokmanya tilak"],
        answer:1,
    },
     {
        question:"Who is the known as father of the nation in india ?",
        options :["jawaharlal nehru" , "mahatma gandhi" , "subhash chandra bhos" ,"lokmanya tilak"],
        answer:1,
    },
     {
        question:"Who is the known as father of the nation in india ?",
        options :["jawaharlal nehru" , "mahatma gandhi" , "subhash chandra bhos" ,"lokmanya tilak"],
        answer:1,
    },
     {
        question:"Who is the known as father of the nation in india ?",
        options :["jawaharlal nehru" , "mahatma gandhi" , "subhash chandra bhos" ,"lokmanya tilak"],
        answer:1,
    },
     {
        question:"Who is the known as father of the nation in india ?",
        options :["jawaharlal nehru" , "mahatma gandhi" , "subhash chandra bhos" ,"lokmanya tilak"],
        answer:1,
    },
     {
        question:"Who is the known as father of the nation in india ?",
        options :["jawaharlal nehru" , "mahatma gandhi" , "subhash chandra bhos" ,"lokmanya tilak"],
        answer:1,
    },
     {
        question:"Who is the known as father of the nation in india ?",
        options :["jawaharlal nehru" , "mahatma gandhi" , "subhash chandra bhos" ,"lokmanya tilak"],
        answer:1,
    },
     {
        question:"Who is the known as father of the nation in india ?",
        options :["jawaharlal nehru" , "mahatma gandhi" , "subhash chandra bhos" ,"lokmanya tilak"],
        answer:1,
    },
     {
        question:"Who is the known as father of the nation in india ?",
        options :["jawaharlal nehru" , "mahatma gandhi" , "subhash chandra bhos" ,"lokmanya tilak"],
        answer:1,
    },
     {
        question:"Who is the known as father of the nation in india ?",
        options :["jawaharlal nehru" , "mahatma gandhi" , "subhash chandra bhos" ,"lokmanya tilak"],
        answer:1,
    },
     {
        question:"Who is the known as father of the nation in india ?",
        options :["jawaharlal nehru" , "mahatma gandhi" , "subhash chandra bhos" ,"lokmanya tilak"],
        answer:1,
    },

    
]

let currentLevelIndex= levels.length - 1;
let currentQuestionIndex= 0;
let userWinning = "RS. 0";


// const currentQuestionAnswerIndex= 0;




function startGame(){
    const username = document.getElementById("userName").value;
    const errorMessage = document.getElementById("userNameError");


    if(username.trim() == ""){
        errorMessage.innerHTML = "please enter some name"
        return;
    }else{
        errorMessage.innerHTML=""
    }

    welcomeScreen.classList.add("hide");
    quizeArea.classList.remove("hide");
    loadLevels();

}

function loadLevels(){
   
       const levelList = document.getElementById("levelList");
       levelList.innerHTML = "";

       levels.forEach((level , index)=>{
               const levelDiv = document.createElement("li");
               levelDiv.classList.add("level");
               
               levelDiv.innerHTML = `
               <span class="levelNumber">${15-index} </span>
               <span class="levelAmount">${level} </span>

               `

               if(currentLevelIndex == index){
                levelDiv.classList.add("active");
               }

               levelList.appendChild(levelDiv);

       })
}

loadLevels();

function loadQuestion(){
    const questionStatement = document.getElementById("questionStatement")
    const answers = document.getElementById("answers")

    answers.innerHTML ="";
    const currentQuestion = questions[currentQuestionIndex];
    
    currentQuestion.options.forEach((option ,index ) =>{
    const answerDiv = document.createElement("div");
    answerDiv.classList.add("answer");
    answerDiv.innerHTML = option; 

    answerDiv.setAttribute("onClick" , `checkAnswer(${index})` );
 
    answers.appendChild(answerDiv);
           
    })

    questionStatement.innerHTML = currentQuestion.question
}

loadQuestion(); 

function checkAnswer(option){

const currentQuestion = questions[currentQuestionIndex];

 
    if(option != currentQuestion.answer){

        const looseScreen = document.getElementById("looseScreen");
        const prizeMoney =document.getElementById("prizeMoney");
        prizeMoney.innerHTML =`You Won :${userWinning}`;

        quizeArea.classList.add("hide");
        looseScreen.classList.remove("hide");
 

    } 
    else{
        currentQuestionIndex++;
        userWinning = levels[currentLevelIndex];
        currentLevelIndex--;
        
        if(currentLevelIndex <0){
        const looseScreen = document.getElementById("looseScreen");
        const prizeMoney =document.getElementById("prizeMoney");
        const message =document.getElementById("message");

        prizeMoney.innerHTML =`You Won :${levels[0]}`;
        message.innerHTML ="Congratulation You Pass All levels !!"

        quizeArea.classList.add("hide");
        looseScreen.classList.remove("hide");

        }


        loadLevels();
        loadQuestion(); 

    }

}
















// function loadAnswer(){
//     const options = document.getElementById("answers")
//     const allOptions = questions[currentQuestionAnswerIndex];
//     options.innerHTML = allOptions.options
// }
// loadAnswer();


