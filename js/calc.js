function getReceipt() {
  var runningTotal = 0;
  var sizeTotal = 0;
  var sizeArray = document.getElementsByClassName('size');
  for (var i = 0; i < sizeArray.length; i++) {
    if (sizeArray[i].checked) {
      var selectedSize = sizeArray[i].value;
      document.getElementById('sizeSelection').innerHTML = selectedSize;
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
  document.getElementById('sizePrice').innerHTML = "$ "+[sizeTotal]+".00";
  runningTotal = sizeTotal;
  getMeat(runningTotal);
}

function getMeat(runningTotal) {
  var meatTotal = 0;
  var selectedMeat = [];
  var meatArray = document.getElementsByClassName('meat');
  for (var j = 0; j < meatArray.length; j++) {
    if (meatArray[j].checked) {
      selectedMeat.push(meatArray[j].value);
      console.log("selected meat item: ("+meatArray[j].value+")");
      document.getElementById('meatSelection').innerHTML = selectedMeat;
    }
  }
  var meatCount = selectedMeat.length;
  if (meatCount > 1) {
    meatTotal = (meatCount - 1);
  } else {
    meatTotal = 0;
  }
  document.getElementById('meatPrice').innerHTML = "$ "+[meatTotal]+".00";
  runningTotal = (runningTotal + meatTotal);
  getCheese(runningTotal);
}

function getCheese(runningTotal) {
  var cheeseTotal = 0;
  var cheeseArray = document.getElementsByClassName('cheese');
  for (var k = 0; k < cheeseArray.length; k++) {
    if (cheeseArray[k].checked) {
      var selectedCheese = cheeseArray[k].value;
      document.getElementById('cheeseSelection').innerHTML = selectedCheese;
    }
  }
  if (selectedCheese === "No Cheese") {
    cheeseTotal = 0;
  } else if (selectedCheese === "Regular Cheese") {
    cheeseTotal = 0;
  } else if (selectedCheese === "Extra Cheese") {
    cheeseTotal = 3;
  }
  document.getElementById('cheesePrice').innerHTML = "$ "+[cheeseTotal]+".00";
  runningTotal = (runningTotal + cheeseTotal);
  getCrust(runningTotal);
}

function getCrust(runningTotal) {
  var crustTotal = 0;
  var crustArray = document.getElementsByClassName('crust');
  for (var l = 0; l < crustArray.length; l++) {
    if (crustArray[l].checked) {
      var selectedCrust = crustArray[l].value;
      document.getElementById('crustSelection').innerHTML = selectedCrust;
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
  }
  document.getElementById('crustPrice').innerHTML = "$ "+[crustTotal]+".00";
  runningTotal = (runningTotal + crustTotal)
  getSauce(runningTotal);
}

function getSauce(runningTotal) {
  var sauceTotal = 0;
  var sauceArray = document.getElementsByClassName('sauce');
  for (var m = 0; m < sauceArray.length; m++) {
    if (sauceArray[m].checked) {
      var selectedSauce = sauceArray[m].value;
      document.getElementById('sauceSelection').innerHTML = selectedSauce;
    }
  }
  document.getElementById('saucePrice').innerHTML = "$ "+[sauceTotal]+".00";
  runningTotal = (runningTotal + sauceTotal)
  getVeggies(runningTotal);
}

function getVeggies(runningTotal) {
  var veggiesTotal = 0;
  var selectedVeggies = [];
  var veggiesArray = document.getElementsByClassName('vegetables');
  for (var n = 0; n < veggiesArray.length; n++) {
    if (veggiesArray[n].checked) {
      selectedVeggies.push(veggiesArray[n].value);
      document.getElementById('veggiesSelection').innerHTML = selectedVeggies;
    }
  }
  var veggiesCount = selectedVeggies.length;
  if (veggiesCount > 1) {
    veggiesTotal = (veggiesCount - 1);
  } else {
    veggiesTotal = 0;
  }
  document.getElementById('veggiesPrice').innerHTML = "$ "+[veggiesTotal]+".00";
  runningTotal = (runningTotal + veggiesTotal);
  getTotal(runningTotal);
}

function getTotal(runningTotal) {
  var showTotal = runningTotal;
  document.getElementById('showTotal').innerHTML = "$ "+[showTotal]+".00";
}
