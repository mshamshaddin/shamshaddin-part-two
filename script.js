let userName = prompt("Welcome to GC mini golf! What is your name?");
let holes = prompt("Hi, " + userName + "! Would you like to play 3 or 6 holes?");
let threePutts =[];
let total = 0;
let totalPar = 0;

if (holes == 3) {
    console.log("Condition is true, starting loop:");

    for (let i = 1; i <= 3; i++) {
        console.log(`Iteration ${i}`);
        threePutts[i] = parseInt(prompt("How many putts for hole " + i +"?"));
        total += Number(threePutts[i]);
        console.log(`The updated total is ${total} putts`); 
    }

    totalPar = total - 9; 

    let message = totalPar > 0
    ? `Nice try, ${userName}. Your total par was +${totalPar}`
    : `Great job, ${userName}! Your total par was ${totalPar}`;
    console.log(message);


} else if (holes == 6){

    for (let i = 1; i <= 6; i++) {
        console.log(`Iteration ${i}`);
        threePutts[i] = parseInt(prompt("How many putts for hole " + i +"?"));
        total += Number(threePutts[i]);
        console.log(`The total is ${total} putts`);    
    }

    totalPar = total - 18; 
    let message = totalPar > 0
    ? "Nice try, " + userName + ". Your total par was +" + totalPar
    : `Great job, ${userName}! Your total par was ${totalPar}`;
    console.log(message);

} else{
    console.log("Condition is false, loop will not run.");
}





