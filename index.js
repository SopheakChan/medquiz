//quiz//
const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator")

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];

//push the questions into availableQuestions Array
function setAvailableQuestions(){
  const totalQuestion = quiz.length;
  for(let i=0; i<totalQuestion; i++){
      availableQuestions.push(quiz[i])  
  }
}

//set question number and question and options
function getNewQuestion(){
  // set question number
  questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + quiz.length;
  // set question text
  // get random question
  const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
  currentQuestion = questionIndex;
  questionText.innerHTML = currentQuestion.q;

  //get the position of 'questionIndex' from the availableQuestion Array
  const index1 = availableQuestions.indexOf(questionIndex);
  //remove the 'questionIndex' from the availableQuestion Array, so there is no repeat
  availableQuestions.splice(index1,1);

  // set options
  // get the length of options
  const optionLen = currentQuestion.options.length
  //push options into availableOptions Array
  for (let i=0; i<optionLen; i++){
    availableOptions.push(i)
  }

  optionContainer.innerHTML = '';
  let animationDelay = 0.15;
  //create options in html
  for (let i=0; i<optionLen; i++){
    //random option
  const optonIndex = availableOptions[Math.floor(Math.random()* availableOptions.length)];
    //get the position of 'optonIndex' from the availableOptions
    const index2 = availableOptions.indexOf(optonIndex);
    //remove the 'optonIndex' from the availableOptions, so that the option does not repeat
    availableOptions.splice(index2,1);

    const option = document.createElement("div");
    //+ option.innerHTML = currentQuestion.options[optonIndex];
    option.innerHTML =currentQuestion.options[optonIndex];
    option.id = optonIndex;
    option.style.animationDelay = animationDelay + 's';
    animationDelay = animationDelay + 0.15;
    option.className ="option";
    optionContainer.appendChild(option)
    option.setAttribute("onclick" , "getResult(this)");
  }
  questionCounter++
}
// get the result of current attempt question
function getResult(element){
  const id = parseInt(element.id);
  // get the answer by comparing the id of clicked option
  if (id === currentQuestion.answer){
    //set the green color to the correct answer
    element.classList.add("correct");
    //add the indicator to correct mark
    updateAnswerIndicator("correct");
  }else{
    //set the red color to the wrong answer
    element.classList.add("wrong");
    updateAnswerIndicator("wrong");
    //if the answer is incorrect the show the correct option by adding green color
    const optionLen = optionContainer.children.length;
    for (let i=0; i<optionLen; i++){
      if(parseInt(optionContainer.children[i].id) === currentQuestion.answer){
        optionContainer.children[i].classList.add("correct");
      }

    }
  }
  unclickableOptions();
}

//make all option unclickable once the user select a option(RESTRICT THE USER TO CHANGE THE OPTION)
function unclickableOptions(){
  const optionLen = optionContainer.children.length;
  for (let i=0; i<optionLen; i++){
    optionContainer.children[i].classList.add("already-answered");
  }
}
function answersIndicator(){
  const totalQuestion = quiz.length;
  for (let i=0; i<totalQuestion; i++){
    const indicator = document.createElement("div");
    answersIndicatorContainer.appendChild(indicator);
  }
}
function updateAnswerIndicator(markType){
  answersIndicatorContainer.children[questionCounter-1].classList.add(markType)
}

function next(){
  if(questionCounter === quiz.length){
    console.log("quiz over");
  }else{
    getNewQuestion();
  }
}

window.onload = function(){
  //first we wil set all questions in availableQuestions Array
  setAvailableQuestions();
  //seconod we will call getNewQuestion(); function
  getNewQuestion();
  // to create indicator of answers
  answersIndicator();
}



//dropdown//
const testimonials=document.querySelectorAll('.client_box')
const prevBtn=document.querySelector('.prev')
const nextBtn=document.querySelector('.next')

let currentIndex=0;

function showTestimonial(index){
  testimonials.forEach((testimonial, i)=>{
    if(i===index){
      testimonial.style.display='block';
    }else{
      testimonial.style.display='none';
    }
  })
}

function nextTestimonial(){
  currentIndex=(currentIndex+1) % testimonials.length;
  showTestimonial (currentIndex)
}
function prevTestimonial(){
  currentIndex=(currentIndex-1+testimonials.length) % testimonials.length;
  showTestimonial (currentIndex)
}
showTestimonial(currentIndex);

// nextBtn.addEventListener('click', nextTestimonial)
// prevBtn.addEventListener('click', prevTestimonial)

//navbar//
const burger=document.querySelector('.burger')
const navbarItems=document.querySelector('.navbar')
const nav=document.querySelector('.items')

burger.addEventListener('click', ()=>{
  navbarItems.classList.toggle('h-class')
  nav.classList.toggle('v-class')
})

//Array of Objets//
/*const quiz = [
  {
    q: 'Citer l’organe et fluide biologique suivant qui n’appartient pas à la première ligne de défense de l’organisme: ',
    option : ['Ganglion lymphatique', 'Poils', 'Salive', 'Système lacrymal', 'Peau et muqueux'],
    answer: 1
  },
  {
    q: 'Citer l’item qui est faux pour les caractéristiques des lymphocytes T ',
    option : ['Ils ont des durées de vie très courtes', 'Les lymphocytes T sont très peu recirculants dans le sang périphérique', 'En microscopie électronique, leur membrane paraît lisse, noyau dense et cytoplasme très fin', 'Dans les milieux de culture adéquats, les lymphocytes T se transforment en lymphoblastes', 'ils expriment à leur surface toutes les classes d’immunoglobulines'],
    answer: 3
  },
  {
    q: 'Citer les cellules qui sont des cellules non auxiliaires du système immunitaire ',
    option : ['Keratocytes', 'Mastocytes', 'Hématies', 'Cellules Langerhans', 'Cellule dendritique'],
    answer: 2
  },
  {
    q: 'Citer un item qui est faux, pour les activités de macrophage',
    option : ['Est une cellule présentatrice d^antigène', 'Est capable d’absorber les pathogènes', 'Est capable de tuer des bactéries', 'Synthétise des immunoglobulines', 'Synthétise les interleukine'],
    answer: 3
  },
  {
    q: 'Parmi les propositions suivantes, indiquez celle(s) qui est exacte(s). L^histamine est',
    option : ['Le produit de décarboxylation de molécules amine carboxylé', 'Un vasoconstricteur puissant', 'Un produit de transamination de l^histidine', 'Un produit libéré lors du processus inflammatoire', 'Un non stimulant des sécrétions de l^estomac'],
    answer: 3
  },
]*/