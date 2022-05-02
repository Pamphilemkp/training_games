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
let minimum = 15;

//setting  after game win or lose
const next = document.querySelector("#next")
const replay = document.querySelector("#replay")
const back = document.querySelector("#back")


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


        
        //back
        const backward =  document.createElement("button")
        const text2 = document.createTextNode("Back ⏪")
        backward.appendChild(text2)
        back.appendChild(backward)
        back.style.marginTop = "20px";



        //reload the window 
        const refresher = document.createElement("button")
        const text = document.createTextNode("Replay 🔁")
        refresher.appendChild(text)
        refresher.addEventListener("click",replayer)
        replay.appendChild(refresher)



        function replayer(){
            window.location.reload();
        }
        

        
        if( count < minimum ){
        grid.textContent= "GAME OVER 😥😰😓 ";
        grid.style.color ="red"
        grid.style.fontSize ="40px"
        grid.style.width ="94%"
        grid.style.height ="30%"
        grid.style.padding ="40px"
        }
        else{
        grid.textContent= "You win  🤭🥳🤩";
        grid.style.color ="white"
        grid.style.fontSize ="40px"
        grid.style.width ="94%"
        grid.style.height ="30%"
        grid.style.textAlign ="center"
        grid.style.padding ="40px"

        
        //win
        const winFinal = document.createElement("button")
        const text1 = document.createTextNode("Next ⏩")
        winFinal.appendChild(text1)
        next.appendChild(winFinal)
        next.style.marginTop = "20px";



        //setting best score
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


