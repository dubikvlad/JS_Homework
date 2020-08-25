var button = document.getElementsByTagName('button');
var allUsers = document.getElementById('users');
var userData = document.getElementById('user-info');
var usersInStorage

button.onclick = function createUserList() {
    if (localStorage.getItem('users')) {
        usersInStorage = JSON.parse(localStorage.getItem('users'));
        newUserList();
    } else {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://reqres.in/api/users?page=2', true);
    xhr.send();
    xhr.onload = function () {
        var status = +String(this.status)[0];
        if (status === 2 && JSON.parse(this.response).data) {
            var newUsers = JSON.parse(this.response).data;
            localStorage.setItem('users', JSON.stringify(newUsers));
            usersInStorage = newUsers;
                newUserList();
            }
            else{
                var error = document.createElement('p');
                error.innerText = "Something went wrong";
                error.style.color = 'green';
                error.style.fontSize = '40px';
                error.style.textTransform = 'uppercase';
                document.getElementsByTagName("body")[0].replaceChild(error, allUsers);
            }
        }

}

function newUserList() {

}

