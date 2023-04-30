//let ages = [3,9,23,64,2,8,28,93]
//console.log(ages) - [3,9,23,64,2,8,28,93]
// console.log(ages.length) - 8
//STEP 1:
//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
//•	Do not use numbers to reference the last element, find it programmatically, 
//•	ages[7] – ages[0] is not allowed!
console.log('Question 1')
let ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log(ages[ages.length - 1] - ages[0])
//1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
let addition = ages.push(75)
console.log(addition)
console.log(ages[ages.length - 1] - ages[0])
//1c.	Use a loop to iterate through the array and calculate the average age. 
function sumAges(ages) {
    let total = 0;
    for (let i = 0; i < ages.length; i++) {
        total = total + ages[i]
    }
    return total
}
console.log(sumAges(ages))
console.log(sumAges(ages) / ages.length)

//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
console.log('Question 2')
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
//2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 
let namesLengthAverage = names.map(function (element) {
    return element.length / names.length
})
console.log(namesLengthAverage)
//2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
let joinedNames = ""
    for(let i=0; i < names.length; i++){
        joinedNames += names[i] + "";
    }


console.log(joinedNames)
// console.log(concatenated())
//3.	How do you access the last element of any array?
// Array[array.length-1]
//4.	How do you access the first element of any array?
// array[0]
//5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
console.log('Question 5')
let nameLengths = []

    for(let i=0; i< names.length; i++){
        names[i].length
        nameLengths.push(names[i].length)
    }
   // let namesLength = names.map(function (element) {
   //     return element.length
  //  })
console.log(nameLengths)
//For example:

//let names = ["Kelly", "Sam", "Kate"]; 	//starting with this array
//let nameLengths = [5, 3, 4]; 			//create this new array


//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
console.log('Question 6')
function sumNameLengths(namesLengths) {
    let total = 0;
    for (let i = 0; i < namesLengths.length; i++) {
        total = total + namesLengths[i]
    }
    return total
}
console.log(sumNameLengths(nameLengths))
//7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
console.log('Question 7')
function combine(word, n) {
    let message = ''
    for(let i = 0; i < n; i++){
    message += word * i
    }
}
console.log(combine('Hello', 3))
//8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.
console.log('Question 8')
function createfullName(firstName, lastName) {
    let fullName = firstName + ' ' + lastName
    return fullName
}
console.log(createfullName('Noah', 'Carlson'))
//9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
console.log('Question 9')
let array1 = [55, 45, 2, 54, 4]
let array2 = [2, 6, 12]
function bigBoy(arr) {
    let amount = 0
    for (let i = 0; i < arr.length; i++){
        amount = amount + arr[i]
    }
    if (amount > 100) {
        return true
    } else
        return false
}
console.log(bigBoy(array1))
console.log(bigBoy(array2))
//10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
console.log('Question 10')
let numbers1 = [4, 11, 2, 23, 34, 2]
let numbers2 = [54, 1, 2, 1, 35]
function sumNumbers(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i]
    }
    return total / arr.length
}
console.log(sumNumbers(numbers1))
console.log(sumNumbers(numbers2))
//11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
console.log("Question 11")
function whichAverageIsLarger(numbers1, numbers2) {
    if (sumNumbers(numbers1) > sumNumbers(numbers2)) {
        return true;
    } else
        return false
}
console.log(whichAverageIsLarger(numbers1, numbers2));

//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
console.log("Question 12")
let isHotOutside = true
let moneyInPocket
function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside && moneyInPocket > 10.50) {
        return true
    } else {
        return false
    }
}
console.log(willBuyDrink(isHotOutside, 11))
console.log(willBuyDrink(isHotOutside, 10))
console.log(willBuyDrink(!isHotOutside, 11))
//13.	Create a function of your own that solves a problem.   In comments, write what the function does and why you created it.
console.log("Question 13")
let niceOutside = true
let cash 
function goingGolfing(niceOutside, cash){
    if(niceOutside && cash > 90){
        return true
    } else if (!niceOutside && cash > 90){
        return true
    } else {
        return false
    }

    }
console.log(goingGolfing(niceOutside, 75))
console.log(goingGolfing(!niceOutside, 750))
console.log(goingGolfing(niceOutside, 750))
console.log(goingGolfing(!niceOutside, 75))
// This function helps to find out if someone can go golfing or not. This is more for a person who is really dedicated to going golfing.
// In this Instance the person will go golfing regardless if it is nice out, but they will not go if they do not have enough money.