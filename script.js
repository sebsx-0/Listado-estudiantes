document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'Prof.Josefina' && password === 'SecundariaSPA') {
        window.location.href = "file:///C:/Users/USER/Downloads/Programming/spreadsheet.html";
    } else {
        alert('Usuario o contraseña incorrecta');
    }
});