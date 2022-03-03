const prompt = require('prompt-sync')({sigint: true});
const chalk = require('chalk');

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
    
    let fishAdj1 = ['Californian', 'South African', 'Chilean', 'Great', 'King', 'Southern', 'Northern', 'Pacific', 'Atlantic', 'Arctic', 'Giant', 'Cape'];
    let fishAdj2 = ['Black', 'Bluefin', 'Red', 'White', 'Spotted', 'Striped', 'Dogtooth', 'Speckled', 'Golden', 'Silver', 'Yellow', 'Blue'];
    let fishType = ['Seabass', 'Perch', 'Kingfish', 'Mackeral', 'Salmon', 'Tuna', 'Barracuda', 'Marlin', 'Sailfish', 'Queenfish', 'Bonito', 'Dorado', 'Snapper', 'Sturgeon'];

    return (fishAdj1[Math.floor(Math.random() * fishAdj1.length)]) + ' ' + (fishAdj2[Math.floor(Math.random() * fishAdj2.length)]) + ' ' + (fishType[Math.floor(Math.random() * fishType.length)])
}

function generateRandomFishWeight(){

    if (totalCatchWeight > 9){
        return Number((Math.random() * 5).toFixed(2))
    } else 
    if (totalCatchWeight > 8){
        return Number((Math.random() * 6).toFixed(2))
    } else 
    if (totalCatchWeight > 7){
        return Number((Math.random() * 7).toFixed(2))
    } else 
    if (totalCatchWeight > 6){
        return Number((Math.random() * 8).toFixed(2))
    } else
    
    return Number((Math.random() * 9).toFixed(2)) 
}

function generateRandomFishValue(){

    if (totalCatchWeight > 9){
        return Number((Math.random() * 8).toFixed(2))
    } else 
    if (totalCatchWeight > 8){
        return Number((Math.random() * 12).toFixed(2))
    } else 
    if (totalCatchWeight > 7){
        return Number((Math.random() * 16).toFixed(2))
    } else 
    if (totalCatchWeight > 6){
        return Number((Math.random() * 18).toFixed(2))
    } else

    return Number((Math.random() * 20).toFixed(2))
}

let catchNum = 0;
let caughtFish = [];
let totalCatchWeight = 0;
let totalCatchValue = 0;
let time = 0;
let hour = 0;
let min = 0;

console.log(' ')
console.log(chalk.bgBlue.bold("    Welcome to The Fishing Simulator!    "));
console.log(' ');
console.log("The goal is to try and maximize the value of your catch. The rules are: you can only fish for " + chalk.underline('six hours') + ", and can catch at most " + chalk.underline('10 lbs') + " of fish.")
console.log(' ');
console.log(prompt('Ready? Lets go! Hit ' + chalk.green('[enter]') + ' to head out fishing...' ));
console.log(' ');
console.log('---------------------------------------');
console.log(' ');
console.log('The Time is ' + chalk.cyan('5:00') +' am. Your boat has just arrived at the fishing spot...');
console.log(' ');
console.log(' ');
console.log('You have the option to chum the water before you begin fishing, this will take 30 mins but will increase your chances of catching more frequently.');
console.log(' ');
let chumAnswer = prompt('Would you like to chum the water? Type' +chalk.green(' [yes]') + ' or' + chalk.red(' [no]') + ': ' ); 
console.log(' ');
console.log('---------------------------------------');
console.log(' ');

if (chumAnswer === 'yes'){
    time += Number(30);
    console.log("The time is now " + chalk.cyan('5:30') + ' am.');
    console.log(' '); 
    console.log('The water is chummed and ready!');
    console.log(' ');} 

console.log(prompt('Hit ' + chalk.green('[enter]') + ' again to start casting...' ))

while (time < 360) {

    console.log('---------------------------------------')
    console.log(' ')

    if (chumAnswer === 'yes'){
        time += Number(15 + Math.floor(Math.random() * 30));
    } else {
        time += Number(15 + Math.floor(Math.random() * 60));
    }

    hour = 5 + Math.floor(time/60);
    min = time % 60;

    if (min < 10) {min = "0" + min;};

    console.log("The time is now " + chalk.cyan(hour + ':' + min) + ' am.');
    console.log(' ');
    console.log("So far you've caught:")
    console.log(chalk.blue(catchNum) + ' fish, with a total weight of ' + chalk.blue(totalCatchWeight.toFixed(2)) + ' lbs, worth a total value of $' + chalk.green(totalCatchValue.toFixed(2)));
    console.log(' ');

    let randomFish = generateRandomFish()

    if (randomFish.value > 0.5 && randomFish.value < 1 && totalCatchWeight < 10){
        randomFish.name = 'Golden Doubloon';
        randomFish.value = Number(randomFish.value * 100);
        randomFish.weight = Number(Math.random() * (10 - totalCatchWeight));
    }

    if (randomFish.value < 0.5){
        randomFish.name = 'Leather Boot'; 
        randomFish.value = 0;
        randomFish.weight = 0;
    }

    console.log('You just caught a ' + chalk.magenta(randomFish.name) + ' weighing ' + chalk.yellow(randomFish.weight.toFixed(2)) + 'lbs, worth a value of $' + chalk.yellow(randomFish.value.toFixed(2)))

    if (totalCatchWeight + randomFish.weight > 10) {

        console.log(' ');
        console.log(chalk.red('* ') + 'This fish would put your total catch over ' + chalk.underline('10 lbs') + ', unfortunatley you will have to release it...');
        console.log(' ');
        console.log(prompt('Press ' + chalk.green('[enter]') + ' to continue fishing ' ));
        console.log(' ');
    } else {

    console.log(' ')
    catchReleasePrompt = prompt('Your action: [c]atch or [r]elease? ' )
    console.log(' ')

    if (catchReleasePrompt === 'c'){

        caughtFish.push(randomFish);

        totalCatchWeight += Number(randomFish.weight.toFixed(2));
        totalCatchValue += Number(randomFish.value.toFixed(2));
        catchNum = caughtFish.length;

    }
    }

}
console.log('-----------------------------------------------')
console.log(' ')
console.log(chalk.cyan.bold("** Time's up! Lets see what you reeled in! **"))
console.log(' ');
console.log('You caught ' + chalk.blue(catchNum) + ' fish, with a total weight of ' + chalk.blue(totalCatchWeight.toFixed(2)) + ' lbs, worth a total value of $' + chalk.green(totalCatchValue.toFixed(2)));
console.log(' ');
console.log('You can see a breakdown of your catch here:');
console.log(' ');

for (i = 0; i < caughtFish.length; i++){
console.log((i+1) + '. ' + chalk.magenta(caughtFish[i].name) + ', Weight: ' + chalk.yellow(caughtFish[i].weight.toFixed(2)) + 'lbs, Value: $' + chalk.yellow(caughtFish[i].value.toFixed(2) ));
}

console.log(' ');

if (totalCatchValue > 50){
console.log(`${chalk.bold("Congratulations!")} You my friend... have just${chalk.bold(' SECURED THE BAG!')} Dont foget to come back again soon!`)}

else {console.log(chalk.bold("Well done! ") + "Get yo' money, and keep on fishing!")}

console.log(' ');
console.log('Skipper Fergus signing out...')
console.log('-----------------------------------------------')
