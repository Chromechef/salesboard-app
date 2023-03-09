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

const buttonStar = document.querySelector("#button-star");
const buttonFire = document.querySelector("#button-fire");
const buttons = document.querySelector(".button-container");
const liveSales = document.querySelector(".live-sales-field");
const liveAchieve = document.querySelector("#live-achieve-counter");
const emojiField = document.querySelector('.emoji-field');
const achieveField = document.querySelector('#achievements-field')
const totalRevenue = document.querySelector('.dollar-field')
const totalCommision = document.querySelector('#commision-field')

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

let liveSaleCount = 0;
let liveAchiveCount = 0;
let currentTotalRev = 0;
let currentTotalCom = 0;


let clickedButton = ''
buttons.addEventListener("click", (event) => {
  clickedButton = event.target.innerHTML
  console.log(clickedButton)
  incrementStarSalesArray()
})
function incrementStarSalesArray() {
  const filteredArray = soldProducts.filter(function (item) {
    return item.emoji === clickedButton
  })
  if (filteredArray.length > 0) {
    const index = soldProducts.indexOf(filteredArray[0])
    const filteredData = filteredArray[0]
    liveSaleCount++
    liveSales.innerHTML = `Live Sales:  ${liveSaleCount}`;
    emojiField.innerHTML += filteredData.emoji
    currentTotalRev += filteredData.revenue
    currentTotalCom += filteredData.commision
    totalRevenue.innerHTML = '$' + currentTotalRev;
    totalCommision.innerHTML = '$' + currentTotalCom;
  }
  incrementLiveAchive()
}

function incrementLiveAchive() {

  if (liveSaleCount === 1) {

    achieveField.innerHTML += '🔔'
    liveAchiveCount++
  }
  if (currentTotalRev >= 2500 && liveAchiveCount === 1) {
    liveAchiveCount++
    achieveField.innerHTML += '💰'
  }
  if (liveSaleCount === 15) {
    liveAchiveCount++
    achieveField.innerHTML += '🏆'
  }
  liveAchieve.innerHTML = `Live Achievements:  ${liveAchiveCount}`;
}


//EVENT LISTENERS
// buttonStar.addEventListener("click", incrementStarSales);
// buttonFire.addEventListener("click", incrementFireSales);


//COUNTER FUNCTIONS
// function incrementStarSales() {
//   liveSaleCount++;
//   liveSales.innerHTML = "Live Sales:" + "  " + liveSaleCount;
//   emojiField.innerHTML += soldProducts[0].emoji;
//   currentTotalRev += soldProducts[0].revenue;
//   currentTotalCom += soldProducts[0].commision;
//   totalRevenue.innerHTML = '$' + currentTotalRev;
//   totalCommision.innerHTML = '$' + currentTotalCom;
//   if (liveSaleCount === 1 || liveSaleCount === 15) {
//     incrementLiveAchive();
//   }
// }


// function incrementFireSales() {
//   liveSaleCount++;
//   liveSales.innerHTML = "Live Sales:" + "  " + liveSaleCount;
//   emojiField.innerHTML += soldProducts[1].emoji
//   currentTotalRev += soldProducts[1].revenue;
//   currentTotalCom += soldProducts[1].commision;
//   totalRevenue.innerHTML = '$' + currentTotalRev;
//   totalCommision.innerHTML = '$' + currentTotalCom;

//   if (liveSaleCount === 1 || liveSaleCount === 15) {
//     incrementLiveAchive();
//   }
// }
//CONDITIONS

// ADD ELEMENT TO ARRAY
