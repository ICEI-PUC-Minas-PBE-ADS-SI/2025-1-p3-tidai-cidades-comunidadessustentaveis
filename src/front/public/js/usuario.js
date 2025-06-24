const form = document.getElementById("formUsuario");
const lista = document.getElementById("listaUsuario");
const denunciaMensagemDiv = document.getElementById('denunciaMensagem');

function mostrarMensagemDenuncia(texto, tipo = "erro") {
    denunciaMensagemDiv.textContent = texto;
    denunciaMensagemDiv.className = "mensagem " + tipo; 
    denunciaMensagemDiv.style.display = "block";
}

function limparMensagemDenuncia() {
    denunciaMensagemDiv.textContent = "";
    denunciaMensagemDiv.className = "mensagem";
    denunciaMensagemDiv.style.display = "none";
}

let ocorrencias = JSON.parse(localStorage.getItem("ocorrencias")) || [];

form.addEventListener("submit", async function (e) { 
    e.preventDefault(); 

    limparMensagemDenuncia(); 

    const titulo = document.getElementById("titulo").value.trim();
    const categoria = document.getElementById("categoria").value;
    const endereco = document.getElementById("endereco").value.trim();
    const descricao = document.getElementById("descricao").value.trim();
    const fotosInput = document.getElementById("foto").files;
    const fotos = []; 

    const dataRegistro = new Date().toISOString(); 
    const status = "pendente"; 
    const criadoPor = localStorage.getItem("usuarioLogado") || "anonimo"; 

    const denunciaData = {
        titulo,
        categoria,
        endereco,
        descricao,
        fotos, 
        dataRegistro,
        status,
        criadoPor
    };

    try {
        const response = await fetch('http://localhost:3000/api/denuncia/cadastrodenuncia', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(denunciaData) 
        });

        const result = await response.json(); 

        if (response.ok) { 
            mostrarMensagemDenuncia(result.mensagem || "Denúncia registrada com sucesso!", "sucesso");
            form.reset(); 
        } else { 
            mostrarMensagemDenuncia(result.error || "Erro ao registrar denúncia. Tente novamente.");
            console.error('Erro na resposta da API de denúncia:', response.status, result);
        }
    } catch (error) {
        // Captura erros de rede ou outros problemas na requisição
        console.error('Erro na requisição fetch para denúncia:', error);
        mostrarMensagemDenuncia("Não foi possível conectar ao servidor. Verifique se ele está em execução.", "erro");
    }
});

function renderizarOcorrencias() {
    lista.innerHTML = "";
    const usuarioEmail = localStorage.getItem("usuarioLogado") || "anonimo";
    const minhas = ocorrencias.filter(o => o.criadoPor === usuarioEmail);

    if (minhas.length === 0) {
        lista.innerHTML = "<p>Você ainda não reportou nenhum problema.</p>";
        return;
    }

    minhas.forEach((item) => {
        const li = document.createElement("li");
        li.className = "ocorrencia-item";
        li.innerHTML = `
            <div class="titulo">${item.titulo}</div>
            <div class="endereco">${item.endereco}</div>
            <div class="data">${item.data}</div>
            <span class="status ${item.status}">${formatarStatus(item.status)}</span>
        `;
        lista.appendChild(li);
    });
}

function formatarStatus(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).replace("-", " ");
}

renderizarOcorrencias(); 