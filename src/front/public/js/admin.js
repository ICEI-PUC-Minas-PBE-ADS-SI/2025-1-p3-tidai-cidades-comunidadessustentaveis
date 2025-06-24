// admin.js

// Recupera ocorrências do localStorage ou inicializa vazio
let ocorrencias = JSON.parse(localStorage.getItem("ocorrencias")) || [];
let usuarios = Object.keys(localStorage).filter(k => k.startsWith("usuario_")).length;

// Referência da lista de ocorrências no DOM
const lista = document.getElementById("listaOcorrencias");

function atualizarEstatisticas() {
  const total = ocorrencias.length;
  const resolvidas = ocorrencias.filter(o => o.status === "resolvido").length;
  const pendentes = ocorrencias.filter(o => o.status === "pendente").length;
  const andamento = ocorrencias.filter(o => o.status === "em-andamento").length;

  document.querySelector(".cards .card:nth-child(1) strong").textContent = total;
  document.querySelector(".cards .card:nth-child(2) strong").textContent = resolvidas;
  document.querySelector(".cards .card:nth-child(3) strong").textContent = pendentes;
  document.querySelector(".cards .card:nth-child(4) strong").textContent = usuarios;

  const totalBarra = document.querySelector(".graficos .caixa:nth-child(1) strong");
  const resolvidosBarra = document.querySelector(".graficos .caixa:nth-child(2) strong");
  const pendentesBarra = document.querySelector(".graficos .caixa:nth-child(3) strong");
  const andamentoBarra = document.querySelector(".graficos .caixa:nth-child(4) strong");

  totalBarra.textContent = total;
  resolvidosBarra.textContent = resolvidas;
  pendentesBarra.textContent = pendentes;
  andamentoBarra.textContent = andamento;

  document.querySelector(".graficos .caixa:nth-child(1) .preenchido").style.width = "100%";
  document.querySelector(".graficos .caixa:nth-child(2) .preenchido").style.width = `${(resolvidas/total)*100 || 0}%`;
  document.querySelector(".graficos .caixa:nth-child(3) .preenchido").style.width = `${(pendentes/total)*100 || 0}%`;
  document.querySelector(".graficos .caixa:nth-child(4) .preenchido").style.width = `${(andamento/total)*100 || 0}%`;
}

// Renderizar todas as ocorrências salvas
function renderizarOcorrencias() {
  lista.innerHTML = "";

  if (ocorrencias.length === 0) {
    lista.innerHTML = "<p>Nenhuma ocorrência registrada ainda.</p>";
    return;
  }

  ocorrencias.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "ocorrencia-item";

    li.innerHTML = `
      <div class="titulo">${item.titulo}</div>
      <div class="endereco">${item.endereco}</div>
      <div class="data">${item.data}</div>
      <label>Status:
        <select class="status-edicao" data-index="${index}">
          <option value="pendente" ${item.status === "pendente" ? "selected" : ""}>Pendente</option>
          <option value="em-andamento" ${item.status === "em-andamento" ? "selected" : ""}>Em Andamento</option>
          <option value="resolvido" ${item.status === "resolvido" ? "selected" : ""}>Resolvido</option>
        </select>
      </label>
      <span class="status ${item.status}">${formatarStatus(item.status)}</span>
    `;

    lista.appendChild(li);
  });

  atualizarEstatisticas();
}

// Atualizar status ao alterar o <select>
lista.addEventListener("change", function (e) {
  if (e.target.classList.contains("status-edicao")) {
    const index = e.target.getAttribute("data-index");
    ocorrencias[index].status = e.target.value;
    localStorage.setItem("ocorrencias", JSON.stringify(ocorrencias));
    renderizarOcorrencias();
  }
});

// Formata string de status
function formatarStatus(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).replace("-", " ");
}

// Inicializa a lista e estatísticas ao carregar
renderizarOcorrencias();