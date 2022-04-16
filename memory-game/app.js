const cards = [
    {
        name:'cheeseburger',image:'images/cheeseburger.png'
    },
    {
        name:'fries',image:'images/fries.png'
    },
    {
        name:'hotdog',image:'images/hotdog.png'
    },
    {
        name:'ice-cream',image:'images/ice-cream.png'
    },
    {
        name:'milkshake',image:'images/milkshake.png'
    },
    {
        name:'pizza',image:'images/pizza.png'
    },
    {
        name:'cheeseburger',image:'images/cheeseburger.png'
    },
    {
        name:'fries',image:'images/fries.png'
    },
    {
        name:'hotdog',image:'images/hotdog.png'
    },
    {
        name:'ice-cream',image:'images/ice-cream.png'
    },
    {
        name:'milkshake',image:'images/milkshake.png'
    },
    {
        name:'pizza',image:'images/pizza.png'
    }
    
]

cards.sort(() => 0.5 - Math.random());

 const grid = document.querySelector('#grid')
 const score = document.querySelector('#result')
 const win = document.querySelector('#win')
 let cardClicked =[];
 let cardClickedid = [];
 const matchResult =[];
 


function display(){ 
 for(let i = 0; i < cards.length; i++){
   const images = document.createElement("img")
   images.setAttribute("src", 'images/blank.png')
   images.setAttribute("data-id",i)
   images.addEventListener('click',flip)
   grid.append(images);
   
}
}
display()


function flip(){
    const ids = this.getAttribute('data-id')
    cardClicked.push(cards[ids].name)
    cardClickedid.push(ids)
    this.setAttribute('src',cards[ids].image)

    if(cardClicked.length === 2){
        setTimeout(matchChecker,500)
       
        
    }
   
   
}
let view = document.querySelectorAll("img")



 function matchChecker(){

    let idone = cardClickedid[0];
    let idtwo = cardClickedid[1];
    

if(idone === idtwo){
    alert("you have clicked the same image 😀 😃, try to find it match")
    view[idone].setAttribute('src','images/blank.png')
}
else if(cardClicked[0] === cardClicked[1]){
    alert('well played 🥲 ☺️ 😊, try to find more match and win the game')
    view[idone].setAttribute('src','images/white.png')
    view[idone].removeEventListener("click",flip)
    view[idtwo].setAttribute('src','images/white.png')
    view[idtwo].removeEventListener("click",flip)
    matchResult.push(cardClicked[1])

    score.textContent = matchResult.length;

    if(matchResult.length === (cards.length)/2){
        win.innerHTML = ` Congratulations 🤩👏🥳🙌 <br/> <br/> <br/> 
        <img src='images/congratulation.jfif' alt="you win" >`
    }
    
    
}

else{
    alert("sorry those images don't match 🥺 😢, try to find their matches")
    view[idone].setAttribute('src','images/blank.png')
    view[idtwo].setAttribute('src','images/blank.png')
}


cardClicked = [];
cardClickedid = [];

 }