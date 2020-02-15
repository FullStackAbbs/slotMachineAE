//Create three boxes in your HTML / CSS
//Click on a box and have it rotate (45+ degrees each click)
//On the third click of each box change the color of the other two boxes
//On a click of a box, turn that box into a circle and have it move to the right
//Pseudo Code and Wireframes:

//Build a simple slot machine with minimum 5 items per reel
//and 3 reels - user should be able to bet min or max and have their total update
//aka how much money they have won or lost.
//Min bet does $5 and Max bet does $50.
//They should start with $1000. Matches of the three wheels = a win just like a
//normal slot machine and they win 10x their bet

// Group Attribution by Divya S.,Sam D.,Anjelica B,Miguelina,Chi I.,Sebastian.

document.getElementById("playSlots").addEventListener("click", spinReel)


const minBet = 5
const maxBet = 50
let balance = 1000

let slotOne = document.getElementById("slot1")
let slotTwo = document.getElementById("slot2")
let slotThree = document.getElementById("slot3")


let images = ["../images/image1.png", "../image2.png", "../images/image3.png", "image4.png", "image5.png"];



document.getElementById("balance").innerHTML = balance


function displayMessage (msg){
  document.getElementById("displayMessage").innerHTML = msg
}

function spinReel() {
  let randomSpin1 = Math.floor(Math.random() * images.length)
  let randomSpin2 = Math.floor(Math.random() * images.length)
  let randomSpin3 = Math.floor(Math.random() * images.length)
  let bet = document.getElementById("displayBet").value

  if (bet < minBet || bet > maxBet){
    displayMessage(`Bet must be between ${minBet} and ${maxBet}.`)
    return;
  }
  if (balance < 50){
    displayMessage("Oh No! Game Over!")
    return;
  }
  if (randomSpin1 === randomSpin2 && randomSpin2 === randomSpin3){
    displayMessage('You Win!')
    balance += bet * 10
  }else{
    displayMessage('You Lose!')
    balance -= bet
  }

  document.getElementById("balance").innerHTML = balance

  slotOne.innerHTML = `images${randomSpin1}`
  slotTwo.innerHTML = `images${randomSpin2}`
  slotThree.innerHTML = `images${randomSpin3}`
}
