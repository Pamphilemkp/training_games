const score = document.querySelector("#score")
const timeleft = document.querySelector("#time-left")
const bestscore = document.querySelector("#best-score")
const minimumscore = document.querySelector("#tscore-hit")
const squares = document.querySelectorAll(".square")
const grid = document.querySelector(".grid")

let count = 0;
let clickId = 0;
let randomId=0;
let randomPosition 
let time = 60;
let minimum = 10;
//let compareScore1
//let compareScore2


//setting already the best score
bestscore.textContent = localStorage.getItem("bestScore")==null ? 0 :localStorage.getItem("bestScore");
// best score setting end

function randomcolor(){
    squares.forEach(square =>{
        square.addEventListener("mousedown",click)
        square.classList.remove("mole");
    })

    randomPosition = squares[Math.floor(Math.random()*9)];
    randomPosition.classList.add("mole")
    
    //console.log(randomPosition)
}
randomcolor()

let timer = setInterval(randomcolor,1000)


function click(){
  randomId = randomPosition.id;
  clickId = this.id;
   // console.log(randomId)
    
   if(randomId === clickId) count++;
   score.textContent = count;

  // console.log(count)
}

let timeremaining = setInterval(clearer,500)
function clearer(){
    time--
    if(time === 0){
        clearInterval(timer)
        clearInterval(timeremaining)
        //setting the localStorage 
        
        
        if( count < minimum ){
        grid.textContent= "GAME OVER ";
        grid.style.color ="red"
        grid.style.width ="100%"
        }
        else{
        grid.textContent= "You win ";
        grid.style.color ="blue"
        grid.style.width ="100%"
        
        let actualCount = localStorage.getItem("bestScore")
        
           if( count < actualCount ) {
            localStorage.setItem("bestScore", actualCount)
            bestscore.textContent = actualCount 
            }
            else{
                localStorage.setItem("bestScore",count)
                bestscore.textContent = count;
            }
          
        }
        
    }
    //console.log(time)
    timeleft.textContent= time;
   
}
//if(count < minumum)


