

const verifyCardmodule = require("./verifycard");

function placeorder(){

    verifyCardmodule.verifyCard(deductAmount);


}

function deductAmount(){

    console.log("Amount Deducted");

};

placeorder();
