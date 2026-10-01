const formulario = document.querySelector(".formulario");

if (formulario) {
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.querySelector("#nome");
        const email = document.querySelector("#email");
        const telefone = document.querySelector("#telefone");
        const cpf = document.querySelector("#cpf");
        const data = document.querySelector("#data");
        const cep = document.querySelector("#cep");
        const rua = document.querySelector("#rua");
        const numero = document.querySelector("#numero");
        const cidade = document.querySelector("#cidade");
        const estado = document.querySelector("#estado");
        const doacao = document.querySelector("#doacao");
        const voluntariado = document.querySelector("#voluntariado");
        const contatoEmail = document.querySelector("#contato-email");
        const contatoTelefone = document.querySelector("#contato-telefone");

        const dadosCadastro = {
            nome: nome.value,
            email: email.value,
            telefone: telefone.value,
            cpf: cpf.value,
            data: data.value,
            cep: cep.value,
            rua: rua.value,
            numero: numero.value,
            cidade: cidade.value,
            estado: estado.value,
            doacao: doacao.checked,
            voluntariado: voluntariado.checked,
            contatoEmail: contatoEmail.checked,
            contatoTelefone: contatoTelefone.checked
        };

        const dadosJSON = JSON.stringify(dadosCadastro);

        localStorage.setItem("cadastro", dadosJSON);
    });
}

const cadastroSalvo = localStorage.getItem("cadastro");

if (cadastroSalvo) {
    const dadosRecuperados = JSON.parse(cadastroSalvo);

    document.querySelector("#nome").value = dadosRecuperados.nome;
    document.querySelector("#email").value = dadosRecuperados.email;
    document.querySelector("#telefone").value = dadosRecuperados.telefone;
    document.querySelector("#cpf").value = dadosRecuperados.cpf;
    document.querySelector("#data").value = dadosRecuperados.data;
    document.querySelector("#cep").value = dadosRecuperados.cep;
    document.querySelector("#rua").value = dadosRecuperados.rua;
    document.querySelector("#numero").value = dadosRecuperados.numero;
    document.querySelector("#cidade").value = dadosRecuperados.cidade;
    document.querySelector("#estado").value = dadosRecuperados.estado;

    document.querySelector("#doacao").checked = dadosRecuperados.doacao;
    document.querySelector("#voluntariado").checked = dadosRecuperados.voluntariado;
    document.querySelector("#contato-email").checked = dadosRecuperados.contatoEmail;
    document.querySelector("#contato-telefone").checked = dadosRecuperados.contatoTelefone;
}