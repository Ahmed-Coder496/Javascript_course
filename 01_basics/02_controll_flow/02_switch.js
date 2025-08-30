"use_strict"

// Switch Case 

let weatherTemperature = 35

switch (weatherTemperature) {
    case 15:
        console.log(`The weather is cold!`);
        break;
    case 25:
        console.log(`The weather is warm.`);
        break;
    case 35:
        console.log(`The weather is hot.`);        // => The weather is hot.
        break;
    case 45:
        console.log(`The weather is extremely hot!`);
        break;
    default:
        console.log(`The weather is very cold!`);
        break;
}