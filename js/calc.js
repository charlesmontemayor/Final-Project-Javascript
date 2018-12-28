function getReceipt() {
  var text1 = "Your Order: ";
  var runningTotal = 0;
  var sizeTotal = 0;
  var sizeArray = document.getElementsByClassName('size');
  for (var i = 0; i < sizeArray.length; i++) {
    if (sizeArray[i].checked) {
      var selectedSize = sizeArray[i].value;
      text1 = text1+selectedSize+"<br>";
    }
  }
  if (selectedSize === "Personal Pizza") {
    sizeTotal = 6;
  } else if (selectedSize === "Medium Pizza") {
    sizeTotal = 10;
  } else if (selectedSize === "Large Pizza") {
    sizeTotal = 14;
  } else if (selectedSize === "Extra Large Pizza") {
    sizeTotal = 16;
  }
  runningTotal = sizeTotal;
  console.log(selectedSize+" = $"+sizeTotal+".00");
  console.log("size text1: "+text1);
  console.log("subtotal: "+runningTotal+".00");
  getMeat(runningTotal,text1);
}

function getMeat(runningTotal,text1) {
  var meatTotal = 0;
  var selectedMeat = [];
  var meatArray = document.getElementsByClassName('meat');
  for (var j = 0; j < meatArray.length; j++) {
    if (meatArray[j].checked) {
      selectedMeat.push(meatArray[j].value);
      console.log("selected meat item: ("+meatArray[j].value+")");
      text1 = text1+meatArray[j].value+"<br>";
    }
  }
  var meatCount = selectedMeat.length;
  if (meatCount > 1) {
    meatTotal = (meatCount - 1);
  } else {
    meatTotal = 0;
  }
  runningTotal = (runningTotal + meatTotal);
  console.log("total selected meat items: "+meatCount);
  console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
  console.log("meat text1: "+text1);
  console.log("subtotal: "+"$"+runningTotal+".00");
  getCheese(runningTotal,text1);
}

function getCheese(runningTotal,text1) {
  var cheeseTotal = 0;
  var cheeseArray = document.getElementsByClassName('cheese');
  for (var k = 0; k < cheeseArray.length; k++) {
    if (cheeseArray[k].checked) {
      var selectedCheese = cheeseArray[k].value;
      text1 = text1+selectedCheese+"<br>";
    }
  }
  if (selectedCheese === "No Cheese") {
    cheeseTotal = 0;
  } else if (selectedCheese === "Regular Cheese") {
    cheeseTotal = 0;
  } else if (selectedCheese === "Extra Cheese") {
    cheeseTotal = 3;
  }
  runningTotal = (runningTotal + cheeseTotal);
  console.log(selectedCheese+" = "+cheeseTotal+".00");
  console.log("cheese text1: "+text1);
  console.log("subtotal: "+runningTotal+".00");
  getCrust(runningTotal,text1);
}

function getCrust(runningTotal,text1) {
  var crustTotal = 0;
  var crustArray = document.getElementsByClassName('crust');
  for (var l = 0; l < crustArray.length; l++) {
    if (crustArray[l].checked) {
      var selectedCrust = crustArray[l].value;
      text1 = text1+selectedCrust+"<br>";
    }
  }
  if (selectedCrust === "Plain Crust") {
    crustTotal = 0;
  } else if (selectedCrust === "Garlic Butter Crust") {
    crustTotal = 0;
  } else if (selectedCrust === "Cheese Stuffed Crust") {
    crustTotal = 3;
  } else if (selectedCrust === "Spicy Crust") {
    crustTotal = 0;
  } else if (selectedCrust === "House Special Crust") {
    crustTotal = 0;
  };
  runningTotal = (runningTotal + crustTotal)
  console.log(selectedCrust+" = "+crustTotal+".00");
  console.log("crust text1: "+text1);
  console.log("subtotal: "+runningTotal+".00");
  getSauce(runningTotal,text1);
}

function getSauce(runningTotal,text1) {
  var sauceTotal = 0;
  var sauceArray = document.getElementsByClassName('sauce');
  for (var m = 0; m < sauceArray.length; m++) {
    if (sauceArray[m].checked) {
      var selectedSauce = sauceArray[m].value;
      text1 = text1+selectedSauce+"<br>";
    }
  }
  runningTotal = (runningTotal + sauceTotal)
  console.log(selectedSauce+" = "+sauceTotal+".00");
  console.log("sauce text1 ="+text1);
  console.log("subtotal: "+runningTotal+".00");
  getVeggies(runningTotal,text1);
}

function getVeggies(runningTotal,text1) {
  var veggiesTotal = 0;
  var selectedVeggies = [];
  var veggiesArray = document.getElementsByClassName('vegetables');
  for (var n = 0; n < veggiesArray.length; n++) {
    if (veggiesArray[n].checked) {
      selectedVeggies.push(veggiesArray[n].value);
      console.log("selected vegetables: ("+veggiesArray[n].value+")");
      text1 = text1+veggiesArray[n].value+"<br>";
    }
  }
  var veggiesCount = selectedVeggies.length;
  if (veggiesCount > 1) {
    veggiesTotal = (veggiesCount - 1);
  } else {
    veggiesTotal = 0;
  }
  runningTotal = (runningTotal + veggiesTotal);
  console.log("total selected vegetables: "+veggiesCount);
  console.log(veggiesCount+" veggies - 1 free veggies ="+"&"+veggiesTotal+".00");
  console.log("veggies text1: "+text1);
  console.log("subtotal: "+"$"+runningTotal+".00");
}
