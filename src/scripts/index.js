// Adicionar um contato à tabela
function adicionarContato(nome, telefone) {
	const newRow = document.createElement("tr");
	newRow.innerHTML = `
        <td>${nome}</td>
        <td>${telefone}</td>
    `;
	document.querySelector("table").appendChild(newRow);
}

// Limpar os campos do formulário
function limparCampos() {
	document.getElementById("nameInput").value = "";
	document.getElementById("phoneInput").value = "";
}

// Função principal
function cadastrarContato() {
	const nome = document.getElementById("nameInput").value.trim();
	const telefone = document.getElementById("phoneInput").value.trim();

	if (nome === "" || telefone === "") {
		alert("Por favor, preencha todos os campos.");
		return false; // Impede o envio do formulário
	}

	adicionarContato(nome, telefone);
	limparCampos();

	return false; // Impede o envio do formulário
}
