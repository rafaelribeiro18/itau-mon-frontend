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

function gerarRelatorioAlarmes(){
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

    fetch("http://localhost:8080/alarme/data", cabecalho)
        .then(res => res.json()) //Extrai os dados do retorno para JSON
        .then(result => preencheAlarmes(result));
}

function preencheAlarmes(dados) {
    var tabela = '<table class="table table-sm"> <tr><th>Alarme</th> <th>Quantidade Periodo</th></tr>';
    for (i = 0; i < dados.length; i++) {
        tabela = tabela + ` <tr> 
                                <td>${dados[i].alarme.nome} </td>
                            </tr>`        
    }

    tabela = tabela + "</table>"
    document.getElementById("tabela").innerHTML = tabela;
}
