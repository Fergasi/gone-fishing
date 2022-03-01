const prompt = require('prompt-sync')({sigint: true});

// let caughtFish = [];
// let totalCatchWeight = 0;
// let totalCatchValue = 0;
// let time = 0;
// let Hour = 6;
// let Min = 00;
// const fish = generateRandomFish();

function generateRandomFish(){

    let name = generateRandomFishName();
    let weight = generateRandomFishWeight();
    let value = generateRandomFishValue();

    return {
        name,
        weight,
        value
    }
}

function generateRandomFishName(){
    
    let fishAdj1 = ['spotted', 'striped', 'southern', 'mako', 'northern', 'pacific', 'atlantic', 'arctic', 'warmwater', 'speckled', 'cape'];
    let fishAdj2 = ['black', 'bluefin', 'red', 'white', 'great', 'king', 'dogtooth', 'giant', 'yellowfin', 'golden', 'silver', 'yellow', 'blue'];
    let fishType = ['seabass', 'perch', 'kingfish', 'mackeral', 'salmon', 'tuna', 'barracuda', 'marlin', 'sailfish', 'queenfish', 'bonito', 'sardine', 'dorado', 'shark', 'snapper', 'sturgeon'];

    return (fishAdj1[Math.floor(Math.random() * fishAdj1.length)] + ' ' + fishAdj2[Math.floor(Math.random() * fishAdj2.length)] + ' ' + fishType[Math.floor(Math.random() * fishType.length)])
}

function generateRandomFishWeight(){
    return ((Math.random() * 10).toFixed(2) + ' lbs')
}

function generateRandomFishValue(){
    return ('$' + (Math.random() * 20).toFixed(2))
}

// while (true) {

//     console.log("Welcome to Fishing Simulator! Try to maximize the value of your caught fish. You can fish for six hours (till 12:00pm) and can catch at most 10 lbs of fish. \br \br ==========================================")

//     let answer = prompt('');

   

// }