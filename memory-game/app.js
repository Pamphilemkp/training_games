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

cards.sort( () => 0.5 -Math.random())
console.log(cards)
let  itemchosen =[];
let itemchosenid =[];

const grid = document.querySelector('#grid')
const score = document.querySelector('#result')
let cardwon = [];
    
function createcards(){
    for(let i = 0; i < cards.length; i++){
    const block = document.createElement('img')
    block.setAttribute('src','images/blank.png')
    block.setAttribute('data-id', i)
    block.addEventListener('click', flip)
    grid.append(block)
    

}

}
createcards()
let count = [];
function flip(){
    let ids = this.getAttribute('data-id')
    let item = cards[ids]
    itemchosen.push(item.name)
    itemchosenid.push(ids)
    this.setAttribute('src',item.image)
    if( itemchosen.length == 2) setTimeout(chechMatch,500)
    console.log(itemchosen)
    console.log(itemchosenid)
    
}

let view =  document.querySelectorAll('img')

    console.log(view)

function chechMatch(){
    
let option0 = itemchosenid[0];
let option1 = itemchosenid[1]; 



console.log(option1, option0, itemchosen)

if(option0 === option1){
    alert('you have clicked the same image');
    view[option0].setAttribute('src','images/blank.png')

}
   else if(itemchosen[0] === itemchosen[1]){
       alert('you have got a much');
       
       view[option0].setAttribute('src','images/white.png')
       view[option0].removeEventListener('click',flip)
       view[option1].setAttribute('src','images/white.png')
       view[option1].removeEventListener('click',flip)
       cardwon.push(itemchosen)
       score.textContent = cardwon.length;
   }
   
   else{
       alert('sorry check for a match')
    view[option0].setAttribute('src','images/blank.png')
    view[option1].setAttribute('src','images/blank.png')


   }
   
   console.log(cardwon)
   itemchosen = [];
   itemchosenid = [];
}
