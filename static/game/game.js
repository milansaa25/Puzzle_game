const containergame = document.querySelector(".container")
const winnermssbox = document.querySelector(".bg-winner")
const winnermssbox2 = document.querySelector(".win-visual")
const winnermessage = document.querySelector(".winner")
const playerwinname = document.querySelector(".playerwin")
const restartgame = document.querySelector(".home")
const playerchance = document.querySelector(".chance")
const columns = document.querySelector(".column")
const music= document.getElementById("myAudio");
const firstcolor = document.getElementById("p1col")
const secondcolor = document.getElementById("p2col")
const firstplayer = document.getElementById("firstplayer")
const secondplayer = document.getElementById("secondplayer")

const show_first_popup = document.querySelector(".show-pop")
const opengame = document.querySelector(".opengame")
const gamebody = document.querySelector(".game-body")
opengame.addEventListener("click",()=>{
gamebody.classList.remove("active")
show_first_popup.classList.add("active")
})

setTimeout(showforfewsec,2000)
function showforfewsec(){

}

let r = document.querySelector(':root');





const form = document.getElementById("form")
form.addEventListener("submit", (e) => {
    e.preventDefault();



    getalldata()


// Create a function for setting a variable value
function myFunction_set() {
    // Set the value of variable --blue to another value (in this case "lightblue")
    r.style.setProperty('--firstvalue', firstcolor.value);
    r.style.setProperty('--secondvalue', secondcolor.value);
  }
  
  myFunction_set()





})

const error = (element, message) => {
    const inputcontrol = element.parentElement
    inputcontrol.classList.add("error")
    inputcontrol.classList.remove("success")
    const messagebox = inputcontrol.querySelector(".error")

    messagebox.innerText = message;

}

const success = (element) => {
    const inputcontrol = element.parentElement
    inputcontrol.classList.remove("error")
    inputcontrol.classList.add("success")
    const messagebox = inputcontrol.querySelector(".error")
    messagebox.innerText = ""


}



const getalldata = () => {

    let firstname = firstplayer.value.trim()
    let secondname = secondplayer.value.trim()
    let fcolor = firstcolor.value.trim()
    let scolor = secondcolor.value.trim()
    let firstp = document.querySelector(".first")
    let secondp = document.querySelector(".second")
    let color1 = document.querySelector(".color1")
    let color2 = document.querySelector(".color2")




    if (firstname === "") {
        error(firstplayer, "player name is required")
    }
    else {
        success(firstplayer)
    }
    if (secondname === "") {
        error(secondplayer, "playername is required")
    }
    else {
        success(secondplayer)

    }
    if (firstname === secondname) {

        error(secondplayer, "playername not be same")
    }
    else {

        success(secondplayer)

    }
    if (fcolor === "#000000" || fcolor === "#ffffff") {
        error(firstcolor, "change color")
    }
    else {
        success(firstcolor)
    }
    if (scolor === "#000000" || scolor === "#ffffff") {
        error(secondcolor, "change color")
    }
    else {
        success(secondcolor)
    }
    if (fcolor === scolor) {
        error(secondcolor, "color must be diffrent")
    }


    firstp.innerText = firstname

    secondp.innerText = secondname

    color1.style.backgroundColor = fcolor
    color2.style.backgroundColor = scolor
    if (firstname.length > 0 && secondname.length > 0 && fcolor != "#000000" && scolor != "#000000" && firstname != secondname) {
        containergame.classList.remove("active")
        form.classList.add("active")

    }

    playerchance.innerText = `${firstplayer.value}'s Turn`
}








// variable 
// box counting 
let count = 0;
const board = document.querySelector(".connect-4-game")
const allcells = document.querySelectorAll(".cell")
allcells.forEach(newcell => {
    for (let i = 1; i < allcells.length; i++) {
        newcell.innerText = count;
    }
    count++
})
// 0 - empty, 1 - red, 2 - yellow

const pieces = [
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
];

function playerhaswon(playerTurn, pieces) {
    for (let index = 0; index < allcells.length; index++) {
        //check horizontal win starting at index
        if (index % 7 < 4 && pieces[index] === playerTurn && pieces[index + 1] === playerTurn && pieces[index + 2] === playerTurn && pieces[index + 3] === playerTurn) {
            return true;
        }

        //check vertical win starting at index
   
        if (index < 21 && pieces[index] === playerTurn && pieces[index + 7] === playerTurn && pieces[index + 14] === playerTurn && pieces[index + 21] === playerTurn) {
            return true;
        }
  
            
        //check diagonal win starting at index
        if (index % 7 < 4 && index < 18 && pieces[index] === playerTurn && pieces[index + 8] === playerTurn && pieces[index + 16] === playerTurn && pieces[index + 24] === playerTurn) {
            return true;
        }
       
        //check diagonal oposite direction win starting at index
        if (index % 7 >= 3 && index < 21 && pieces[index] === playerTurn && pieces[index + 6] === playerTurn && pieces[index + 12] === playerTurn && pieces[index + 18] === playerTurn) {
            return true;
        }
    }
    return false;
}






let hovercolumn = -1


const firstturn = 1;
const secondturn = 2;
let playerTurn = firstturn;
let animating = false





allcells.forEach((cell, index) => {

    cell.onmouseenter = () => {
        // console.log(index)
        onmouseentercolumn(index % 7);

    }

    cell.onclick = () => {

        if (!animating) {

            oncolumclick(index % 7)
    
        }
     
    }
})

function oncolumclick(column) {



    let avialablerow = pieces.filter((_, index) => index % 7 === column).lastIndexOf(0);
    console.log(avialablerow)
    if (avialablerow === -1) {
        // no space in column 
        return;
    }
    pieces[(avialablerow * 7) + column] = playerTurn;
    let cell = board.children[(avialablerow * 7) + column];

    let piece = document.createElement("div")
    piece.className = "piece";
    piece.dataset.placed = true;
    piece.dataset.player = playerTurn
    cell.appendChild(piece)
    let sound = document.createElement("audio")
    sound.src = "https://github.com/Samir123786/Samir123786.github.io/raw/main/connect%20four%20master/gamesound.mp3"
   
cell.appendChild(sound)
sound.play()




    let unplacepiece = document.querySelector("[data-placed='false']")

    let unplacedy = unplacepiece.getBoundingClientRect().y;
    console.log(unplacedy)
    let unplacedx = piece.getBoundingClientRect().y;
    console.log(unplacedx)
    let ydiff = unplacedy - unplacedx
    animating = true;
    removeUnplacedPiece()
    let animation = piece.animate(
        [
            { transform: `translateY(${ydiff}px)`, offset: 0 },
            { transform: `translateY(0px)`, offset: 0.6 },
            { transform: `translateY(${ydiff / 20}px)`, offset: 0.8 },
            { transform: `translateY(0px)`, offset: 0.95 },

        ],
        {
            duration: 400,
            easing: "Linear",
            iterations: 1
        }
    )

    animation.addEventListener("finish", checkwindraw)

}


function checkwindraw() {
    animating = false;
    //check if game is draw
    if (!pieces.includes(0)) {
        winnermssbox.classList.remove("active")
        winnermssbox2.classList.remove("active")
        playerwinname.innerText=` game is draw`
        restartgame.addEventListener("click",()=>{
           
            location.reload()
        })
    }

    //check if the current player has won
    if (playerhaswon(playerTurn, pieces)) {
        //current player has won
    
        winnermssbox.classList.remove("active")
        winnermssbox2.classList.remove("active")
        let winningsound = document.createElement("audio")
            winningsound.src = "https://github.com/Samir123786/Samir123786.github.io/raw/main/connect%20four%20master/winning.wav"
         
            winningsound.style.display="none"
            winningsound.play()
            winnermssbox.append(winningsound)
            
          
        setTimeout( victory,3000)
        function victory(){
            winnermessage.classList.remove("active")
            winnermssbox2.classList.add("active")
        }
        playerwinname.innerText=`Congratulation \n ${playerTurn === firstturn ? firstplayer.value: secondplayer.value}  is winner`
        restartgame.addEventListener("click",()=>{
            
            
         location.reload()
          
            
        })
      
    
    }




    if (playerTurn === firstturn) {
        playerTurn = secondturn;
        
        playerchance.innerText = `${secondplayer.value}'s Turn`
   
        
    }
    else {
        playerTurn = firstturn;
       
        playerchance.innerText = `${firstplayer.value}'s Turn`
    }
    updatehover()
}



function updatehover() {
    removeUnplacedPiece()
    if (pieces[hovercolumn] === 0) {

        let cell = board.children[hovercolumn]
        // console.log(cell)
        let piece = document.createElement("div")
        piece.className = "piece";
        piece.dataset.placed = false;
        piece.dataset.player = playerTurn;
        cell.appendChild(piece)
       
           
      

   





    }
    



}


function removeUnplacedPiece() {
    // remove exiting unplaced piece 
    let unplacedPiece = document.querySelector("[data-placed='false']");
    // console.log(unplacedPiece)
    if (unplacedPiece) {
        unplacedPiece.parentElement.removeChild(unplacedPiece);
        // console.log(unplacedPiece)
    }
}

function onmouseentercolumn(column) {

    hovercolumn = column;
  
    if(!animating){
        updatehover()
    
    }

}







