const prompt = require('prompt-sync')({sigint: true});

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
    
    let fishAdj1 = ['californian', 'south african', 'chilean', 'spotted', 'striped', 'southern', 'northern', 'pacific', 'atlantic', 'arctic', 'warmwater', 'speckled', 'cape'];
    let fishAdj2 = ['black', 'bluefin', 'red', 'white', 'great', 'king', 'dogtooth', 'giant', 'yellowfin', 'golden', 'silver', 'yellow', 'blue'];
    let fishType = ['seabass', 'perch', 'kingfish', 'mackeral', 'salmon', 'tuna', 'barracuda', 'marlin', 'sailfish', 'queenfish', 'bonito', 'sardine', 'dorado', 'snapper', 'sturgeon'];

    return (fishAdj1[Math.floor(Math.random() * fishAdj1.length)]) + ' ' + (fishAdj2[Math.floor(Math.random() * fishAdj2.length)]) + ' ' + (fishType[Math.floor(Math.random() * fishType.length)])
}

function generateRandomFishWeight(){
    return Number((Math.random() * 10).toFixed(2)) 
}

function generateRandomFishValue(){
    return Number((Math.random() * 20).toFixed(2))
}

let catchNum = 0;
let caughtFish = [];
let totalCatchWeight = 0;
let totalCatchValue = 0;
let time = 0;
let hour = 0;
let min = 00;

console.log("Welcome to The Fishing Simulator! The goal is to try and maximize the value of your catch. You can fish for six hours, and can catch at most 10 lbs of fish.");
console.log(' ');
console.log('The Time is 5:00am. Your boat has just arrived at the fishing spot...');
console.log(' ');
// console.log('You have the option to chum the water before you begin fishing, this will take 30 mins but will increase your chances of catching more frequently');
// console.log(' ');
// let chumAnswer = prompt('Would you like to chum the water? [yes] or [no]')(); 

while (time < 360) {

console.log('---------------------------------------')
console.log(' ')

time += 60;
hour = 5 + Math.floor(time/60);
min = time % 60;
if (min < 10) {min = "0" + min;};

console.log(`The time is ${hour}:${min}am`);
console.log(' ');
console.log("So far you've caught:")
console.log(catchNum + ' fish, with a total weight of ' + totalCatchWeight.toFixed(2) + ' lbs, and a total value of $' + totalCatchValue.toFixed(2));
console.log(' ');

let randomFish = generateRandomFish()

console.log('You just caught a ' + randomFish.name + ' weighing ' + randomFish.weight + 'lbs, with a value of $' + randomFish.value)

catchReleasePrompt = prompt('Your action: [c]atch or [r]elease?' )

if (catchReleasePrompt === 'c'){

    caughtFish.push(randomFish);

    totalCatchWeight += Number(randomFish.weight);
    totalCatchValue += Number(randomFish.value);
    catchNum = caughtFish.length;

}

}