import { WeatherCard } from './weatherCard.js';

let weatherCards = [];

function init(){
    const card1 = new WeatherCard('Stockholm', 59.33, 18.06);
    const card2 = new WeatherCard('Malmö', 59.33, 18.06);
    weatherCards.push(card1, card2);
    console.log(weatherCards);
    
}

window.onload = init;