const GREEN_COLOR_HASH = '#00FF00'
const BLUE_COLOR_HASH = '#0000FF'
const RED_COLOR_HASH = '#fe0000'
const PURPLE_COLOR_HASH = '#aa00a7'


//Покраска 1 карточки
const productCard = document.querySelector('.product_card');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card-button');
changeColorFirstCardButton.addEventListener('click', () => { productCard.style.backgroundColor = BLUE_COLOR_HASH});

//Покраска всех карточек
const productCards = document.querySelectorAll('.product_card');
const changeColorForCardsButton = document.querySelector('#change-color-for-cards-list-button');
changeColorForCardsButton.addEventListener('click', () => { productCards.forEach((card) => card.style.backgroundColor = GREEN_COLOR_HASH)});

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
    repaintingTheButtonColor.style.backgroundColor = RED_COLOR_HASH;
  }
  else {
    repaintingTheButtonColor.style.backgroundColor = BLUE_COLOR_HASH;
  }
  console.log('interesting');
});

