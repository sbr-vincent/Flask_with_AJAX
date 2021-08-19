
function getUsers(){
    fetch('http://localhost:5000/users')
        .then(res =>  res.json())
        .then(data => {
            var users = document.getElementById('users');
            for( let i = 0; i < data.length; i++){
                let row = document.createElement('tr');

                let name = document.createElement('td');
                name.innerHTML = data[i].name;
                row.appendChild(name);
                
                let email = document.createElement('td');
                email.innerHTML = data[i].email;
                row.appendChild(email);
                users.appendChild(row);
            }
        })

}

function addUsers() {
    var form = document.getElementById('userForm');
    form.onsubmit = function(e){
        e.preventDefault();

        var newForm = new FormData(form);

        fetch("http://localhost:5000/create/user", {method: 'POST', body : newForm})
            .then(response => response.json())
            .then(data => console.log(data))

        window.location.reload('/')
    }

}
getUsers();
addUsers();



