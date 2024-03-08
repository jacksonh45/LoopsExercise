for (i = 1; i <= 7; i ++){
    console.log(i);
}

console.log(`=======================`);

for (i =5; i <= 25; i = i + 4){
    console.log(i);
}

console.log(`=======================`);

const wizards = [`Harry Potter`, `Hermione Granger`, `Ron Weasly`]
for (wizard of wizards){
    console.log(wizard);
}

console.log(`=======================`);

let harryPotterMovies = 0

while  (harryPotterMovies != 8){
harryPotterMovies = harryPotterMovies + 1
console.log(harryPotterMovies);
}

const hogwartsHouses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]
for (houses of hogwartsHouses){
  for (char of houses){
    console.log(char);
  }
}

const quote = ["Yer", "A", "Wizard", "Harry"]
let quote2 = ""
for(char of quote) {
  quote2 += char + " "
}
console.log(quote2)

for(i=1; i<=25; i++) {
    if (i % 3 == 0 && i % 5 ==0) {
        console.log("Expecto Patronum")
    } else 
      if (i % 3 == 0) {
        console.log("Expecto")
    } else
       if (i % 5 == 0) {
        console.log("Patronum")
    } else {
        console.log(i)
    }
}