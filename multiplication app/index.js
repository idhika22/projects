const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);

const questionE1=document.getElementById("question");
const inputE1=document.getElementById("input");
const formE1=document.getElementById("form");
const scoreE1=document.getElementById("score");
let popup=document.getElementById("popup");
let popup1=document.getElementById("popup1");
let score=JSON.parse(localStorage.getItem("score"));

if(!score){
    score=0;
}

scoreE1.innerText=`score:${score}`;
questionE1.innerText=`What is ${num1} multiply by ${num2}?`;
const correctAns=num1*num2;

formE1.addEventListener("submit",()=>{
    const userAns=+inputE1.value;
    if(userAns==correctAns){
        score++;
        updateLocalStorage();
        function openPopup(){
                  popup.classList.add("open-popup");
        }
        function closePopup(){
            popup.classList.remove("close-openup");
        }
    }
    else{
        score--;
        updateLocalStorage();
    }

});
function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));
}