const gameContainer = document.getElementById("game");
let card1=null;
let card2=null;
let cardsFlipped=0;
let noClicking = false;

const COLORS =[
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "red",
    "blue",
    "green",
    "orange",
    "purple"
];

// while there are elements in the arry, swap the last element with it
function shuffle(array){
    let counter =array.length;

    while (counter>0){
        //pick a random index
        let index = Math.floor(Math.random()*counter);
    counter--;

    let temp=array[counter];
    array[counter]=array[index];
    array[index]=temp;

    }
    return array;

}


let shuffledColors = shuffle(COLORS);

function createDivsForColors(colorArray){
    for (let color of colorArray){
        const newDiv = document.createElement("div");
        newDiv.classList.add(color);
        newDiv.addEventListener("click",handleCardClick);
        gameContainer.append(newDiv);
    }
}

function handleCardClick(e){
    if(noClicking) return;
    if (e.target.classList.contains("flipped")) return;

    let currentCard=e.target;
    currentCard.style.backgroudnColor=currentCard.classList[0];
    //???? classList[0];

    if (!card1||!card2){
        currentCard.classList.add("flipped");
        card1=card1||currentCard;
        //??? card1=e.target or null??
        card2=currentCard===card1?null:currentCard;
        // dont understandt at all!!

    }

    if (card1&&card2){
        //ca1 and car2 both have value;
        noClicking=true;
        //debugger
        let gif1=card1.className;
        let gif2=card2.className;

        if(gif1===gif2){
            cardsFlipped+=2;

            //??? cardsFlipped !=2;
            card1.removeEventListener("click",handleCardClick);
            card2.removeEventListener("click",handleCardClick);
            card1=null;
            card2=null;
            noClicking=false;
            //set back to begining
        }else{
            setTimeout(function(){
                // very confused here!
                card1.style.backgroudnColor="";
                card2.style.backgroudnColor="";
                card1.classList.remove("flipped");
                card2.classList.remove("flipped");
                card1=null;
                card2=null;
                noClicking=false;

            },100);

        }
    }
    if (cardsFlipped===COLORS.length)alert("game over!");
}
createDivsForColors(shuffledColors);
