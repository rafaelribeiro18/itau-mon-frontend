function autenticar(event) {
    event.preventDefault(); //Evita o comportamento padrão, neste caso de enviar o formulario com os dados
    var user = document.getElementById("txtUser");
    var passwd = document.getElementById("txtSenha");
    
    var loginMsg = {
        email: user.value,
        racf: user.value,
        senha: passwd.value
    }

    var cabecalho = {
        method:'POST',
        body: JSON.stringify(loginMsg),
        headers: {
            'Content-type':'application/json'
        }
    }

    fetch("http://localhost:8080/login", cabecalho) //Envia para o backend a mensagem para login
        .then(res => tratarResposta(res)); // Quando fetch receber a resposta "res" do backend "então" chama a função "tratarResposta"

}

function tratarResposta(res) {
    if (res.status==200) {
        res.json().then(res => fazerLogin(res));
    }else{
        document.getElementById("msgError").innerHTML = "Usuário e/ou Senha inválido(a)!";
    }   
}

function fazerLogin(user) {
    localStorage.setItem("userLogged", JSON.stringify(user));
    window.location = "dashmenu.html";
}
