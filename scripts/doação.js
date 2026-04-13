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
    if(idade < 16 ) erros.push("Deve-se ter idade superior a 16 anos");
    if(telefone.lenght < 8 ) return alert("Telefone Inválido");
    if(motivo.lenght < 10 ) return alert("Caracteres Insuficientes");

    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome: " + nome;
});