var bmi = function (tmpWeight, tmpHeight) {
  var feetToInches = tmpHeight * 12;
  alert(feetToInches);
  var areYouObese = (tmpWeight) / (feetToInches ** 2) * 703;
  alert(areYouObese);
};

var celToFer = function(tmpTemp) {
	toFer = tmpTemp * 1.8 + 32;
  return toFer;
}

var galToLiters = function(tmpGal) {
	var liters = tmpGal * 3.78541;
  return liters;
}

var tbspToGram = function(tmpTbsp) {
	var grams = tmpTbsp * 14.18;
  return grams;
}
