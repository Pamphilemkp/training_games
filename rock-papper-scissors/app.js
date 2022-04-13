const computer = document.getElementById("computer")
const user = document.getElementById("user")
const result = document.getElementById("result")
  
const clickBtn = document.querySelectorAll('button')
let userId
let check 


clickBtn.forEach(button =>button.addEventListener("click",(e)=>{
  userId = e.target.id;
  user.innerHTML = userId;
  computer.innerHTML = randomNumber();
  result.innerHTML = value();
 
}))


function randomNumber(){
    let number = Math.floor(Math.random()*3);
    if( number === 0){
        check = "papper🤚";
         return "papper🤚";
        }
    if( number === 1){ 
        check = "rock👊";
        return "rock👊";
    }
    if( number === 2){ 
        check = "scissors✌️";
        return "scissors✌️";
    }
}

function value(){
    if(check === userId) return "Oppps It's a draw😲💪";
    else if(check === "papper🤚" && userId === "scissors✌️" ) return "You win 🤩🥳👏";
    else if(check === "papper🤚" && userId === "rock👊" ) return "You lose😱😨";
    else if(check === "rock👊"  && userId === "scissors✌️" ) return "You lose😱😨";
    else if(check === "rock👊"  && userId === "papper🤚" ) return "You win 🤩🥳👏";
    else if(check === "scissors✌️" && userId === "papper🤚" ) return "You lose😱😨";
    else if(check === "scissors✌️" && userId === "rock👊" ) return "You win 🤩🥳👏";
}
