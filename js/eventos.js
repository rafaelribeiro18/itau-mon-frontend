function validaLogin() {
    var user = localStorage.getItem("userLogged");
    if (!user) {
        window.location = "index.html";
    }
}

function logout() {
    localStorage.removeItem("userLogged");
    window.location = "index.html";
}

function voltar() {
    window.location = "dashmenu.html";
}

function gerarRelatorioEventos(){
    var dataini = document.getElementById("dtinicio").value;
    var datafim = document.getElementById("dtfinal").value;

    var dataMsg = {
        dt1: dataini, 
        dt2: datafim
    }

    var cabecalho = {
        method:'POST',
        body: JSON.stringify(dataMsg),
        headers: {
            'Content-type':'application/json'
        }
    }

    fetch("http://localhost:8080/evento/data", cabecalho)
        .then(res => res.json()) //Extrai os dados do retorno para JSON
        .then(result => preencheEventos(result));
}

function preencheEventos(dados) {
    var tabela = '<table class="table table-sm text-light"> <tr><th>Data</th> <th>Alarme</th> <th>Equipamento</th></tr>';
    for (i = 0; i < dados.length; i++) {
        tabela = tabela + ` <tr> 
                                <td>${new Date(dados[i].dataevt).toLocaleString("pt-BR")}</td>
                                <td>${dados[i].alarme.nome} </td>
                                <td>${dados[i].equipamento.hostname} </td> 
                            </tr>`        
    }

    tabela = tabela + "</table>"
    document.getElementById("tabela").innerHTML = tabela;
}
