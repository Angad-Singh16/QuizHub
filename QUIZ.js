const quizData = [{
    question: "Which tag is used to define an unordered list in HTML?",
    a:" <ul>",
    b:"<ol>",
    c:"<li>",
    d: '<ul> and <ol>',
    correct: "d",
},
{
    question: "Which attribute is used to specify an image in HTML?",
    a: "src",
    b: "href",
    c: "link",
    d: "Image",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "Which CSS property is used to add shadows to text?",
    a: "text-shadow",
    b: "shadow-text",
    c: "font-shadow",
    d: "text-effect",
    correct: "a",
}
,
{
    question: "Which CSS property is used to set the width of an element?",
    a: " width",
    b: " size",
    c: " element-width",
    d: " width-height",
    correct: "a",
}
,
{
    question: "Which of the following is the correct way to add a comment in HTML?",
    a: " // This is a comment",
    b: " /* This is a comment */",
    c: " <!-- This is a comment -->",
    d: " <! This is a comment !>",
    correct: "c",
}
,
{
    question: "Which attribute is used to specify the target window or frame for a hyperlink in HTML?",
    a: " target",
    b: " frame",
    c: " window",
    d: " href",
    correct: "a",
},
{
    question: "Which tag is used to define the main content of an HTML document?",
    a: " <body>",
    b: " <main>",
    c: " <header>",
    d: " <content>",
    correct: "b",
},
{
    question: "Which tag is used to create a line break in HTML?",
    a: " <br>",
    b: " <break>",
    c: " <lb>",
    d: " <line>",
    correct: "a",
},
{
    question: "Which CSS property is used to set the width of an element?",
    a: " width",
    b: " size",
    c: " element-width",
    d: " width-height",
    correct: "d",
},
{
    question: "Which CSS property is used to make text bold?",
    a: " font-style",
    b: " bold",
    c: " text-weight",
    d: " font-weight",
    correct: "b",
}
,
{
    question: "Which CSS property is used to set the background color of an element?",
    a: " bg-color",
    b: "background-color",
    c: "color-background",
    d: " bgcolor",
    correct: "b",
},
{
    question: "Which CSS property is used to control the spacing between lines of text within an element?",
    a: " line-height",
    b: " spacing",
    c: " text-spacing",
    d: " line-spacing",
    correct: "a",
},
{
    question: "Which property is used to change the text color of an element in CSS?",
    a: " text-color",
    b: " color",
    c: " font-color",
    d: " text-style",
    correct: "b",
},
{
    question: "What does DOM stand for in JavaScript?",
    a: " Document Object Model",
    b: " Data Object Model",
    c: " Document Oriented Model",
    d: " Document Observation Mechanism",
    correct: "a",
},
{
    question: "Which of the following is not a valid JavaScript data type",
    a: " String",
    b: " Boolean",
    c: " Array",
    d: " Integer",
    correct: "d",
},
{
    question: "What will the following JavaScript code output: console.log(typeof([]));?",
    a: " object",
    b: " array",
    c: " array-like",
    d: " array object",
    correct: "a",
},
{
    question: "What is the purpose of the addEventListener method in JavaScript?",
    a: " To remove an event listener from an element",
    b: " To add a new property to an objec",
    c: " To execute a function when a specified event occurs",
    d: " To append an element to the DOM tree",
    correct: "c",
},
{
    question: "Which of the following methods is used to iterate over the elements of an array in JavaScript?",
    a: " forEach()",
    b: " iterate()",
    c: " loop()",
    d: " traverse()",
    correct: "a",
},
{
    question: "What does the typeof operator return for the value null?",
    a: " object",
    b: " null",
    c: " undefined",
    d: " function",
    correct: "b",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);