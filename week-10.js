let myForm = document.createElement('form')
let myNameLabel = document.createElement('label')
let myNameInput = document.createElement('input')
let myAddressInput =document.createElement('input')
let myAddressLabel =document.createElement('label')
myNameLabel.innerHTML = 'Name'
myAddressLabel.innerHTML ='Address'
myForm.append(myNameLabel);
myForm.append(myNameInput);


document.body.append(myForm);

let myEmailLabel = document.createElement('label')
let myEmailInput = document.createElement('input')


myEmailLabel.innerHTML ='Email'
myForm.append(myEmailLabel);
myForm.append(myEmailInput);

myForm.append(myAddressLabel);
myForm.append(myAddressInput);


mySubmitButton = document.createElement ('button')
mySubmitButton.innerHTML = 'Submit'

myForm.append(mySubmitButton);

myForm.style.backgroundColor = 'rgb(255,122,89)'
myForm.style.color = 'black'
myForm.style.display = 'flex'
myForm.style.flexDirection = 'column'
myForm.style.maxWidth = '250px'

let myTable = document.createElement('table')
let myTableRow = document.createElement('tr')
let myTableDataName= document.createElement('td')
let myTableDataEmail = document.createElement('td')
let myTDAddress = document.createElement('td')

myTDAddress.innerHTML = 'Address'
myTableDataEmail.innerHTML = 'Email'
myTableDataName.innerHTML ='Name'


myTable.append(myTableRow)
myTableRow.append(myTableDataName)
myTableRow.append(myTableDataEmail)
myTableRow.append(myTDAddress)


myTable.style.border = '1px double black'

document.body.append(myTable)
console.log(myTable)

// const clickMe = document.getElementById('clickMe')
// clickMe.addEventListener('click',() =>{
//     console.log('clickerr')
// })
// mySubmitButton.Id = 'mySubmitButton'
let textExample = document.querySelector("#textExample")
const mySubmitButtons = document.getElementById('mySubmitButton')
mySubmitButton.addEventListener('click',(e) =>{
    e.preventDefault();
    console.log(textExample.value)
})