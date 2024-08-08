// ---------------------LOGIN---------------------------------
function myFunction() {
    var name = document.getElementById('nInput').value;
    var email = document.getElementById('eInput').value;
    var password = document.getElementById('pInput').value;
    if (name === "" || email === "" || password === "") {
        loginButton.disabled = true;
    } else {
        loginButton.disabled = false;
    }
}
nInput.addEventListener('input', LoginButtonField);
eInput.addEventListener('input', LoginButtonField);
pInput.addEventListener('input', LoginButtonField);

function myFunction() {
    var name = nInput.value;
    var email = eInput.value;
    var password = pInput.value;

    if (name === "" || email === "" || password === "") {
        alert("You have not filled the form");
    } else {
        var userData = {
            Name: name,
            Email: email,
            Password: password
        };
    
    localStorage.setItem("userData", JSON.stringify(userData));
        window.location.href = "website.html";
}}
LoginButtonField();





