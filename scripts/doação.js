document.getElementById("formDoacao").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let idade = document.getElementById("idade").value;
    let peso = document.getElementById("peso").value;
    
    let tipoSanguineo = document.querySelector('input[name="tipoSanguineo"]:checked');

    let telefone = document.getElementById("telefone").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;
    

    if(nome.length < 10 ) return alert("Nome Inválido");
    if(idade < 16 ) return alert("Idade deve ser superior a 16 anos");
    if(peso < 50) return alert("Peso deve ser superior a 50kg");

    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome: " + nome;
});