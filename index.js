// When the button of productA or productB is clicked it triggers multiple
// actions:
// 1.emoji property is added to the live sales board
// 2. Revenue property is added to id="revinue-field"
// 3.commision is added to id="commision-field"
// 4. Achivements conditions: when first sale is made a 🔔 is added, when revenue is more than 2500$ 💰 is added
// when 15 sale is made 🏆 will be added
// Every sale or achivement is also added to the counter

//Things to build:
// Counter Function when product button is clicked
// Function that Array that adds emoji property on a button click

let liveSaleCount = 0;
let liveAchiveCount = 0;
const buttonStar = document.querySelector("#button-star");
const buttonFire = document.querySelector("#button-fire");
const liveSales = document.querySelector(".live-sales-field");
const liveAchieve = document.querySelector("#live-achieve-counter");
const emojiField = document.querySelector('.emoji-field');
let totalRevenue = document.querySelector('.dollar-field')
let totalCommision = document.querySelector('#commision-field')
const achieveField = document.querySelector('#achievements-field')

let currentTotalRev = 0;
let currentTotalCom = 0;

const soldProducts = [
  {
    type: 'star',
    emoji: "⭐",
    revenue: 200,
    commision: 50,
  },
  {
    type: 'fire',
    emoji: "🔥",
    revenue: 300,
    commision: 75,
  }

]




//EVENT LISTENERS
buttonStar.addEventListener("click", incrementStarSales);
buttonFire.addEventListener("click", incrementFireSales);

//COUNTER FUNCTIONS
function incrementStarSales() {
  liveSaleCount++;
  liveSales.innerHTML = "Live Sales:" + "  " + liveSaleCount;
  emojiField.innerHTML += soldProducts[0].emoji;
  currentTotalRev += soldProducts[0].revenue;
  currentTotalCom += soldProducts[0].commision;
  totalRevenue.innerHTML = '$' + currentTotalRev;
  totalCommision.innerHTML = '$' + currentTotalCom;
  if (liveSaleCount === 1 || liveSaleCount === 15) {
    incrementLiveAchive();
  }
}


function incrementFireSales() {
  liveSaleCount++;
  liveSales.innerHTML = "Live Sales:" + "  " + liveSaleCount;
  emojiField.innerHTML += soldProducts[1].emoji
  currentTotalRev += soldProducts[1].revenue;
  currentTotalCom += soldProducts[1].commision;
  totalRevenue.innerHTML = '$' + currentTotalRev;
  totalCommision.innerHTML = '$' + currentTotalCom;

  if (liveSaleCount === 1 || liveSaleCount === 15) {
    incrementLiveAchive();
  }



}
function incrementLiveAchive() {
  liveAchiveCount++;
  liveAchieve.innerHTML = "Live Achievements: " + "  " + liveAchiveCount;
  if (liveSaleCount === 1) {
    achieveField.innerHTML += '🔔'
  }
  else if (liveSaleCount === 15) {
    achieveField.innerHTML += '💰'
  }
}


//CONDITIONS

// ADD ELEMENT TO ARRAY
