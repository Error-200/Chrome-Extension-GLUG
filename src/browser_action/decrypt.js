var toString = $('.code').html()
var OGarray = toString.split('');
var genNum
var counter = 0
var cutOffAt = 55
var obfuscated = 1

function getRandom(len) {
  return new Array(len + 1).join('2');

}

function Gen() {
  var length = toString.length;
  console.log(length)
  genNum = getRandom(length);
  console.log(genNum)

  $('.letters').html(genNum);
  console.log(genNum)
}

function parser(NUarray) {
  $.each(NUarray, function(index, value) {
    if (value == 0) {
      NUarray[index] = OGarray[index]
    } else if (value == OGarray[index]) {
      NUarray[index] = OGarray[index]
    } else if (isNaN(value)) {
      NUarray[index] = OGarray[index]
    } else {
      change = Math.round(Math.random() * 9);
      NUarray[index] = change
    }
  });
  if (NUarray.toString() == OGarray.toString()) {
    obfuscated = 0
    window.clearInterval(interval)
  }
  if (counter == 50) {
    obfuscated = 0
    window.clearInterval(interval)
    NUarray = OGarray

  }
  counter += 1
  return NUarray.join("")

}

function Genletters(stringToChange) {
  var string = stringToChange.toString().split('')
  return genNum = parser(string)
}

function runThis() {
  Genletters(genNum)
  console.log(genNum)
  $('.code').html(genNum)
}
Gen();
var interval = setInterval(function() {
  runThis();
}, 100);
