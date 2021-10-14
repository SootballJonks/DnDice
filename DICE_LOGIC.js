module.exports = {
  diceRoll: (arr) => {
    const howMany = parseInt(arr[0].value); //how many dice to roll
    const sides = parseInt(arr[1].value); //sides of dice
    const exploding =arr[2].value; //true/false exploding dice
    
    if (!howMany || !sides) {
      return(`❌️ Please enter numbers only!`);
    };

    //Lists the results for each roll
    let output = [];
    let outputExpl = [];
  
    //Total result at the end
    let total = 0;
  
    //Regular dice roll logic
    for (let j = 0; j < howMany; j++) {
      let dice = Math.ceil(Math.random() * sides);
      output.push(dice);
    }
  
    //-------Exploding dice roll logic-------
    const explRoll = () => {
      let dice = Math.ceil(Math.random() * sides);
      outputExpl.push(dice);
    }
  
    for (let k = 0; k  < output.length; k++) {
        if (exploding === "true") {
          if (output[k] === sides) { 
            explRoll();
          }
        }
        total = total + output[k];
    }
    for (let l = 0; l < outputExpl.length; l++) {
      let value = outputExpl[l];
      if (value === sides) {
        do {
          value = explRoll();
        } while (value === sides);
      }
    };
    //-------------------------------------
  
    if (outputExpl.length > 0) {
      let totalExpl = 0;
      const reducer = (x, y) => x + y;
      totalExpl = outputExpl.reduce(reducer);
      return (`
      🎲️ Rolled ${howMany} d${sides}!
      
      dice: ${output.join(", ")} 
      Total: ${total}

      Exploding rolls: ${outputExpl.join(", ")}
      New Total: ${total + totalExpl}
      `); 
    } else {
      return (`
      🎲️ Rolled ${howMany} d${sides}!
      
      dice: ${output.join(", ")} 
      Total: ${total}
      `)
    }
  }
}



