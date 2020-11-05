function validaLogin() {
    var user = localStorage.getItem("userLogged");
    if (!user) {
        window.location = "index.html";
    }

    var user = JSON.parse(user);

    document.getElementById("imgUser").innerHTML = `<img src="${user.linkFoto}">`;
    document.getElementById("user").innerHTML = `${user.nome} (${user.racf})`;
}

function logout() {
    localStorage.removeItem("userLogged");
    window.location = "index.html";
}