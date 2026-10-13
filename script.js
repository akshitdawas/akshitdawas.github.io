// ==========================================
// WEEK 3 - JAVASCRIPT FUNDAMENTALS
// Based on Week 1 HTML + Week 2 CSS
// ==========================================


// ==========================================
// DAY 1 - VARIABLES & DATA TYPES
// ==========================================

// Farmer profile data
// Variables is used to store data in memory
// In this example, we are using variables to store the farmer's name, crop yield, and whether the farmer is organic or not
const farmerName = "John Doe";
const cropYield = 1200;
const isOrganic = true;

// Crop details object
//in this example, we are using an object to store the crop type and season
const cropDetails = { // Object is used to store multiple values in a single variable
    type: "Wheat",
    season: "Winter"
};

//accessing object properties
console.log(cropDetails.type); // this line is used to access the value of the object property and print it in the console

//updating the value of the object property
cropDetails.type = "Rice"; // this line is used to update the value of the object property




// Array manipulation
//in this example, we are using an array to store a list of crops
let crops = ["Wheat", "Rice", "Sugarcane"];
//new crop added to the array at the end of the array
crops.push("Maize"); // this line is used to add a new value to the array
console.log(crops); // this line is used to print the updated array in the console
//output: [ 'Wheat', 'Rice', 'Sugarcane', 'Maize' ]

//deleting a crop from the array at the end of the array
crops.pop(); // this line is used to remove the last value from the array
console.log(crops); // this line is used to print the updated array in the console
//output: [ 'Wheat', 'Rice', 'Sugarcane' ]




// var, let and const
//in this example, we are using var, let and const to declare variables and demonstrate their differences
var farmerAge = 35; //not used in modern JavaScript
let farmerRegion = "North"; // let is used to declare a variable that can be reassigned
const farmerType = "Farmer"; // const is used to declare a variable that cannot be reassigned

console.log(farmerAge);// use to print the value of the variable
console.log(farmerRegion);
console.log(farmerType);


// Object manipulation 
// in this example, we are changing the values of the object properties and then printing the updated object to the console
cropDetails.type = "Rice";// change the value of the object property 
cropDetails.season = "Summer";// change the value of the object property

console.log(cropDetails);// print the updated object //output: { type: 'Rice', season: 'Summer' }


// Array manipulation
//in this example, we are adding a new value to the array using the push() method and then printing the updated array to the console
crops.push("Maize");// add a new value to the array 

console.log(crops);// print the updated array //output: [ 'Wheat', 'Rice', 'Sugarcane', 'Maize' ]


// ==========================================
// DAY 2 - FUNCTIONS & SCOPE
// ==========================================

// Calculate crop yield
// this code is used to calculate the total yield of a crop based on the area and yield per acre
// in this example, the function takes two parameters: area and yieldPerAcre, and returns the total yield
function calculateYield(area, yieldPerAcre) { // function is used to define a block of code that can be reused
    return area * yieldPerAcre; // return is used to return a value from the function but it does not print the value in the console 
}

const totalYield = calculateYield(50, 24);// call the function and store the result in a variable
console.log(`Total Yield: ${totalYield}`); // print the result in the console and this line is used to access the value of the variable and print it in the console
//output: Total Yield: 1200



// Function for displaying farmer information
// this code is used to display the farmer information in a formatted string
// in this example, the function takes three parameters: name, crop, and region, and returns a formatted string with the farmer's information
function getFarmerInfo(name, crop, region) { // function is used to define a block of code that can be reused
    return `Farmer: ${name}, Crop: ${crop}, Region: ${region}`;// return is used to return a value from the function but it does not print the value in the console
}

console.log( // Call the function and print the result in the console
    getFarmerInfo( // this line is used to access the value of the variable and print it in the console
        farmerName,
        cropDetails.type,
        farmerRegion
    )
);


// Nested function - scope
// this code is used to demonstrate the concept of scope in JavaScript
// in this example, the inner function has access to the variables of the outer function
function farmerReport() { // function is used to define a block of code that can be reused
    const reportTitle = "Farmer Crop Report";
    function showReport() { // inner function is used to define a block of code that can be reused
        return `${reportTitle} - ${farmerName}`; //in this line, we are accessing the variable reportTitle from the outer function and the variable farmerName from the global scope
    }
    console.log(showReport());// call the inner function and print the result in the console
}
farmerReport();// call the outer function and print the result in the console
//output: Farmer Crop Report - John Doe




// Arrow function
//in this example, we are using an arrow function to calculate the area of a farm based on the length and width
const calculateArea = (length, width) => { // arrow function is used to define a block of code that can be reused
    return length * width;
};
console.log(`Farm Area: ${calculateArea(10, 20)}`); // call the arrow function and print the result in the console




// Short arrow function
//in this example, we are using a short arrow function to add two crop names and return a formatted string
const addCrops = (crop1, crop2) => `${crop1} and ${crop2}`;// short arrow function is used to define a block of code that can be reused and return a value in a single line
console.log(addCrops("Wheat", "Rice"));// call the short arrow function and print the result in the console


// ==========================================
// DAY 3 - DOM MANIPULATION
// ==========================================

// Select crop information element
// in this example, we are using the getElementById() method to select the crop information element from the DOM and store it in a variable
const cropElement = document.getElementById("cropInfo");
console.log(cropElement); // print the selected element in the console



// Update crop information
// in this example, we are updating the text content of the crop information element using the textContent property
if (cropElement) {// check if the element exists before updating
    cropElement.textContent = "Wheat - Winter Season"; // update the text content of the element from "Wheat - Winter Season" to "Updated Crop Info"
}
console.log(cropElement.textContent); // print the updated text content in the console


// Select update button
// in this example, we are using the getElementById() method to select the update button element from the DOM and store it in a variable
const button = document.getElementById("updateButton");// select the button element from the DOM and store it in a variable

// Add click event
if (button && cropElement) {// check if the button and cropElement exist before adding the event listener

    button.addEventListener("click", () => { // add a click event listener to the button element

        cropElement.textContent = "Updated Crop Info";// update the text content of the crop information element when the button is clicked

    });

}


// Select element using querySelector
const farmerNameElement = document.querySelector("#farmerName");


// Update farmer name
if (farmerNameElement) {

    farmerNameElement.textContent = farmerName;

}



// ==========================================
// DAY 4 - EVENTS & ASYNC PROGRAMMING
// ==========================================


// Form submission event
// in this example, we are using the addEventListener() method to add a submit event listener to the form element and update the text content of the crop information element when the button is clicked
const form = document.querySelector("form"); // select the form element from the DOM and store it in a variable

if (form) { // check if the form element exists before adding the event listener

    form.addEventListener("submit", (event) => { // add a submit event listener to the form element

        event.preventDefault(); // prevent the default form submission

        console.log("Crop registration form submitted");

    });

}


// Promise example
// in this example, we are using a Promise to simulate the asynchronous operation of loading crop data
const cropPromise = new Promise((resolve, reject) => { // Promise is an object that represents the eventual completion or failure of an asynchronous operation so it is used to handle asynchronous operations in JavaScript 

    const cropAvailable = true; // this line is used to check if the crop is available or not

    if (cropAvailable) { // check if the crop is available or not and then resolve the promise
        resolve("Crop data loaded successfully"); // resolve is used to indicate that the asynchronous operation was successful
    } else { // if the crop is not avail able, reject the promise
        reject("Crop data could not be loaded"); // reject is used to indicate that the asynchronous operation failed
    }

});


cropPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });


// ==========================================
// ASYNC / AWAIT
// ==========================================


// Fetch crop data
// in this example, we are using async/await to fetch crop data from the /api/crops endpoint and print the data to the console
async function fetchCropData() {

    try {

        const response = await fetch("/api/crops"); // fetch is used to make an HTTP request to the /api/crops endpoint and await is used to wait for the response

        const data = await response.json();  // this line is used to parse the response from the server and convert it into a JavaScript object and then store it in the data variable

        console.log(data); // this line is used to print the data to the console

    } catch (error) {

        console.log("Error fetching crop data:", error);

    }

}


// Call function
fetchCropData();


// ==========================================
// DAY 5 - INTERACTIVE CROP DASHBOARD
// ==========================================


// Crop dashboard data
const cropData = [
    {
        name: "Wheat",
        season: "Winter",
        yield: 2200
    },
    {
        name: "Rice",
        season: "Summer",
        yield: 1800
    },
    {
        name: "Sugarcane",
        season: "Autumn",
        yield: 2500
    }
];


// Display crop data in console
cropData.forEach((crop) => {

    console.log(
        `${crop.name} - ${crop.season} - ${crop.yield} kg/acre`
    );

});


// ==========================================
// END OF WEEK 3 JAVASCRIPT
// ==========================================
