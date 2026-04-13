document.getElementById("formDoacao").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let CPF = document.getElementById("CPF").value;
    let idade = document.getElementById("idade").value;
    let cidade = document.getElementById("cidade").value;
    
    let tipoSanguineo = document.querySelector('input[name="tipoSanguineo"]:checked');

    if(nome.length < 3 ) return alert("Nome Inválido");
    if(idade.value < 18 ) return alert("Idade Inválida");
    if(telefone.lenght < 8 ) return alert("Telefone Inválido");
    if(motivo.lenght < 10 ) return alert("Caracteres Insuficientes");

    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome: " + nome;
});