const productCard= document.querySelector('.product-card');
const changeColorCardButton = document.querySelector('#change-color-card-button');
 console.log('hi');

changeColorCardButton.addEventListener('click', () => {
 productCard.style.backgroundColor = 'red';
})