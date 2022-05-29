//* variables/
const bulbasaur = 11;
const caterpie = 6;
const weedle = 6;
const totalCandies = bulbasaur + caterpie + weedle

console.log(totalCandies)


function fTC (temperature) {
    let convertedToCelsius = (temperature - 32) * 5/9
    return convertedToCelsius
}
function canCharmanderBattle(currentTemp) {
    let convertedTemp = fTC(currentTemp)
    if (convertedTemp > 0) {
        console.log('Charmander can battle')
    } else {
        console.log('Charmander cannot battle')
    }
}
canCharmanderBattle(32)

function underGroundPokemonLeague(partySize){
    for(let i = 1; i<=partySize; i++){
        console.log('Pichachu I choose you')
    }
}
underGroundPokemonLeague(6)