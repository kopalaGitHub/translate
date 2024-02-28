const georgia = ["მანქნა", "სახლი", "კაბა"];
const english = ["car", "home", "dress"];
const russia = ["машина", "дом", "платье"];

const geoToEng = "Georgia to English";
const engToGeo = "English to Georgia";
const geoToRuss = "Georgia to Russia";

function translateIt() {
  const input = document.getElementById("input");
  const value = input.value;
  let valueArray = value.split(" ");
  const outPut = document.getElementById("output");
  outPut.innerHTML = "";
  const showTranslate = document.getElementById("showTranslate").innerHTML;
  console.log(valueArray.length);
  for (let i = 0; i < valueArray.length; i++) {
    let wordToTranslate = valueArray[i];

    if (showTranslate == geoToEng) {
      if (georgia.includes(wordToTranslate)) {
        ifItIsInGeorgia(wordToTranslate);
        console.log("sad");
      } else {
        alert(
          "i can't translate it, but if you add word in my library, next time i will now it"
        );
      }
    } else if (showTranslate == engToGeo) {
      if (english.includes(wordToTranslate)) {
        ifItIsInEnglish(wordToTranslate);
      } else {
        alert(
          "i can't translate it, but if you add word in my library, next time i will now it"
        );
      }
    } else if (showTranslate == geoToRuss) {
      if (georgia.includes(wordToTranslate)) {
        ifItIsInGeoToRussia(wordToTranslate);
      } else {
        alert(
          "i can't translate it, but if you add word in my library, next time i will now it"
        );
      }
    }
  }
  //   if (georgia.includes(value) || english.includes(value)) {
  //     const indexOfword = georgia.indexOf(value);
  //     const getNewWord = english[indexOfword];
  //     console.log(getNewWord);
  //     const outPut = document.getElementById("output");
  //     outPut.innerHTML = getNewWord;
  //   }
}
function ifItIsInGeorgia(value) {
  if (georgia.includes(value)) {
    const indexOfword = georgia.indexOf(value);
    const getNewWord = english[indexOfword];
    console.log(getNewWord);
    const outPut = document.getElementById("output");
    outPut.innerHTML += getNewWord + " ";
  }
}
function ifItIsInEnglish(value) {
  if (english.includes(value)) {
    const indexOfword = english.indexOf(value);
    const getNewWord = georgia[indexOfword];
    console.log(getNewWord);
    const outPut = document.getElementById("output");
    outPut.innerHTML += getNewWord + " ";
  }
}
function ifItIsInGeoToRussia(value) {
  if (georgia.includes(value)) {
    const indexOfword = georgia.indexOf(value);
    const getNewWord = russia[indexOfword];
    console.log(getNewWord);
    const outPut = document.getElementById("output");
    outPut.innerHTML += getNewWord + " ";
  }
}

function georgiaToEnglish() {
  const showTranslate = document.getElementById("showTranslate");
  showTranslate.innerHTML = "Georgia to English";
}
function englishToGeorgia() {
  const showTranslate = document.getElementById("showTranslate");
  showTranslate.innerHTML = "English to Georgia";
}
function georgiaToRussia() {
  const showTranslate = document.getElementById("showTranslate");
  showTranslate.innerHTML = "Georgia to Russia";
}
function addWordButton() {
  const addDiv = document.getElementById("addDiv");
  const showTranslate = document.getElementById("showTranslate").innerHTML;
  let firstWord = document.getElementById("firstWord");
  let secondWord = document.getElementById("secondWord");
  addDiv.style.display = "flex";
  if (showTranslate == geoToEng) {
    firstWord.placeholder = "georgia";
    secondWord.placeholder = "english";
  } else if (showTranslate == engToGeo) {
    firstWord.placeholder = "english";
    secondWord.placeholder = "georgia";
  } else if (showTranslate == geoToRuss) {
    firstWord.placeholder = "georgia";
    secondWord.placeholder = "Russia";
  }
}
function addNewWord() {
  const addDiv = document.getElementById("addDiv");
  let firstWord = document.getElementById("firstWord").value;
  let secondWord = document.getElementById("secondWord").value;
  const showTranslate = document.getElementById("showTranslate").innerHTML;
  addDiv.style.display = "none";
  if (showTranslate == geoToEng) {
    georgia.push(firstWord);
    english.push(secondWord);
  } else if (showTranslate == engToGeo) {
    english.push(firstWord);
    georgia.push(secondWord);
  } else if (showTranslate == geoToRuss) {
    georgia.push(firstWord);
    russia.push(secondWord);
  }
}
