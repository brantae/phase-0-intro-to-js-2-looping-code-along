 const names = ["Guadalupe", "Ollie", "Aki"];
 const event = "surprise";

function writeCards(names, event) {
    let newNames = [];
    
    for (let i = 0; i < names.length; i++) {
        newNames.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;
  }

  return newNames;
}

// writeCards(newNames);

function countDown() {
    let i = 10;
    while (i >= 0) {
        console.log(i--);
    }
    debugger;
}
countDown();