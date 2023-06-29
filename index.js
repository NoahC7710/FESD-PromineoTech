
let outputTable = document.getElementById("outputTable")
let apiURL = "https://64974aee83d4c69925a38fb9.mockapi.io/api/players/players";
let formData = [];



// fetch api
fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        formData = data;
        console.log(formData);
    }).then(() => {
        addDataToTable(formData)
    })
    .catch(error => console.error(error));
// add to api
function postData(data) {
    fetch(apiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => {
        if (res.ok) { 
        console.log('here')
        setTimeout(() => window.location.reload(), 5000);
        return res.json;
        // setTimeout(() => window.location.reload(), 10000);
    }
}).catch(error=> {
    console.log(error)
})
    //setTimeout(() => window.location.reload(), 10000);
}

// add data
function addDataToTable(data) {
    for (let i = 0; i < data.length; i++) {

        let row = outputTable.insertRow(i + 1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);

        cell1.innerHTML = data[i].id;
        cell2.innerHTML = data[i].firstName;
        cell3.innerHTML = data[i].lastName;
        cell4.innerHTML = data[i].playerPosition;

    }



}
function submitForm() {
        let firstName = document.getElementById('firstName').value
        let lastName = document.getElementById('lastName').value
        let playerPosition = document.getElementById('playerPosition').value

        let newPlayer = {
            "firstName": firstName,
            "lastName": lastName,
            "playerPosition": playerPosition
        }

        postData(newPlayer);
        console.log('got here')
    }

document.getElementById("formButton").addEventListener("click", function () {
    submitForm();
});
// Delete
const deleteButton = document.getElementById("deleteButton")

const deletePlayer = async () => {

        let deleteId = document.getElementById('deletePlayerById').value
        const res = await fetch(apiURL + `/${deleteId}`, {
            method: 'DELETE',
        }).then(res => {
            if (res.ok) {
            return res.json;
        }

        })
        setTimeout(() => window.location.reload(), 100);
}

deleteButton.addEventListener("click", function (){
    deletePlayer();
})









// .then(response => response.json())
//         .then(data => {
//             console.log('Success:', data);
//         })
// }