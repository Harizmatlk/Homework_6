//Покраска 1 карточки
const ProductCard=document.querySelector('.product_card');
const ChangeColorFirstCardButton = document.querySelector('#change-color-first-card-button');

ChangeColorFirstCardButton.addEventListener('click', () => {
    ProductCard.style.backgroundColor = blueColorHash;
})

//Покраска всех карточек
const productCards=document.querySelectorAll('.product_card');
const ChangeColorForCardsButton = document.querySelector('#change-color-for-cards-list-button');
const greenColorHash = '#00FF00'
const blueColorHash = '#0000FF'
ChangeColorForCardsButton.addEventListener('click', () => {
 productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
 });

console.log(productCards)

[1,2,3,4,5];

//Открытие гугла
const OpenGoogleButton=document.querySelector('#Open-Google')

OpenGoogleButton.addEventListener('click', () => {
    window.open('https://www.google.com/')
});
