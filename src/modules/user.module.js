// crud methods
async function createUser() {
    await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: "Marcel",
            age: 22,
        })
    }).then(response => response.json()).then(() => {
        readUsers();
    });
}

async function readUsers() {
    await fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(data => {
            renderTable(data.users);
        })
        .catch(error => console.error('Error:', error));
}

document.addEventListener('DOMContentLoaded', function (){
    readUsers();
});

// private functions
function renderTable(users) {
    const body = document.getElementById('userTableBody');
    let output = '';

    users.forEach((user) => {
        output += `<tr>
                <th scope="row">${user.id}</th>
                <td>${user.name}</td>
                <td>${user.age}</td>
                <td>${user.date}</td>
            </tr>`
    });

    body.innerHTML = output;
}