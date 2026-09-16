const GREENCOLORHASH = '#00FF00'
const BLUECOLORHASH = '#0000FF'
const REDCOLORHASH = '#fe0000'
const PURPLECOLORHASH = '#aa00a7'


//Покраска 1 карточки
const productCard = document.querySelector('.product_card');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card-button');
changeColorFirstCardButton.addEventListener('click', () => { productCard.style.backgroundColor = BLUECOLORHASH});

//Покраска всех карточек
const productCards = document.querySelectorAll('.product_card');
const changeColorForCardsButton = document.querySelector('#change-color-for-cards-list-button');
changeColorForCardsButton.addEventListener('click', () => { productCards.forEach((card) => card.style.backgroundColor = GREENCOLORHASH)});

//Открытие гугла
const openGoogleButton=document.querySelector('#open-google')
openGoogleButton.addEventListener('click', openGoogle);
 //задача с выводом лога в консоль и оповещением
function openGoogle () {
  const answer = confirm('вы действительно хотите пройти по ссылке?')
  if (answer == true) {
    window.open('https://www.google.com/')
  } else {
    return;
  }
}
//выведение консоль лог
const outputConsoleLogButton = document.querySelector('#output-console-log');
outputConsoleLogButton.addEventListener('click' , () => outputConsoleLog ('Выбери свой продукт'));
function outputConsoleLog(message) {
    alert(message)
    console.log(message)
}
 //Перекрашивание карточки с одного цвета на другой
 const repaintingTheButtonColor = document.querySelector('#repainting-the-button-Color')
repaintingTheButtonColor.addEventListener('click', () => {

  if (repaintingTheButtonColor.style.backgroundColor === 'rgb(0, 0, 255)') {
    repaintingTheButtonColor.style.backgroundColor = REDCOLORHASH;
  }
  else {
    repaintingTheButtonColor.style.backgroundColor = BLUECOLORHASH;
  }
  console.log('interesting');
});

