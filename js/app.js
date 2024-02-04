let elementQuantity;
let maximumWeight;
let minimumCalories;

let element;
let weight;
let calories;

let totalWeight = 0;
let totalCalories = 0;

let optimalElements = [];

let flag = false;


while (flag === false) {
    maximumWeight = parseInt(prompt("Please enter the maximum weight: "));
    minimumCalories = parseInt(prompt("Please enter the minimum calories: "));
    elementQuantity = parseInt(prompt("Please enter the quantity of elements: "));

    if (maximumWeight >= 0 && minimumCalories >= 0 && elementQuantity >= 0) {
        flag = true;
        
        for (let i = 0; i < elementQuantity; i++) {
            element = prompt("Enter the element, please");
            weight = parseFloat(prompt("Enter the weight, please"));
            calories = parseFloat(prompt("Enter the calories, please"));

            if (weight >= 0 && calories >= 0) {
                if (totalWeight + weight <= maximumWeight) {
                    totalWeight += weight;
                    totalCalories += calories;
                    optimalElements.push({ element, weight, calories });
                }else{
                    console.log("There are not optimal elements");
                }
            } else {
                alert("Please enter a valid value in all the fields");
            }
        }

        console.log("Optimal elements: ");
        for (let item of optimalElements) {
            console.log(`Element: ${item.element}, Weight: ${item.weight}, Calories: ${item.calories}`);
        }
        console.log("Total Weight: "+ totalWeight);
        console.log("Total Calories: "+ totalCalories);
        
    } else {
        alert("Please enter a valid value");
        flag = false;
    }
    
}