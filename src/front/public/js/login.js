document.addEventListener("DOMContentLoaded", function () {
    const indicator = document.getElementById("indicator");
    const mensagemDiv = document.getElementById("mensagem"); // Referência à div de mensagem

    // Animação das abas
    window.showLogin = function () {
        document.getElementById("formLogin").classList.add("active");
        document.getElementById("formCadastro").classList.remove("active");
        document.getElementById("btnLogin").classList.add("active");
        document.getElementById("btnCadastro").classList.remove("active");
        indicator.style.left = "0%";
        limparMensagem();
    };

    window.showCadastro = function () {
        document.getElementById("formLogin").classList.remove("active");
        document.getElementById("formCadastro").classList.add("active");
        document.getElementById("btnLogin").classList.remove("active");
        document.getElementById("btnCadastro").classList.add("active");
        indicator.style.left = "50%";
        limparMensagem();
    };

    // Máscaras (mantido como estava)
    const cpfInput = document.getElementById("cpf");
    const telInput = document.getElementById("telefone");

    if (cpfInput) {
        IMask(cpfInput, {
            mask: '000.000.000-00'
        });
    }

    if (telInput) {
        IMask(telInput, {
            mask: '(00) 00000-0000'
        });
    }

    // Login (mantido como estava, focando apenas no cadastro para esta tarefa)
    document.getElementById("formLogin").addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("login-email").value.trim();
        const senha = document.getElementById("login-senha").value.trim();

        if (email === "admin@gmail.com" && senha === "pucminas") {
            mostrarMensagem("Login de administrador bem-sucedido!", "sucesso");
            setTimeout(() => window.location.href = "dashboard_admin.html", 1000);
            return;
        }

        const dados = localStorage.getItem("usuario_" + email);
        if (!dados) {
            mostrarMensagem("Usuário não encontrado. Cadastre-se primeiro.");
            return;
        }

        const usuario = JSON.parse(dados);
        if (usuario.senha !== senha) {
            mostrarMensagem("Senha incorreta!");
            return;
        }

        mostrarMensagem("Login de usuário realizado com sucesso!", "sucesso");
        localStorage.setItem("usuarioLogado", email);

        const destino = localStorage.getItem("destinoAposLogin");
        setTimeout(() => {
            if (destino) {
                localStorage.removeItem("destinoAposLogin");
                window.location.href = destino;
            } else {
                window.location.href = "dashboard_usuario.html";
            }
        }, 1000);
    });

    // Cadastro (Lógica alterada para enviar para a API)
    document.getElementById("formCadastro").addEventListener("submit", async function (e) {
        e.preventDefault(); // Impede o envio padrão do formulário

        limparMensagem(); // Limpa mensagens anteriores

        // Captura os valores dos campos, agora usando os IDs corretos para email e senha
        const nome = document.getElementById("nome").value.trim();
        const sobrenome = document.getElementById("sobrenome").value.trim();
        const cpf = document.getElementById("cpf").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const email = document.getElementById("cadastro-email").value.trim(); // Usando o novo ID
        const senha = document.getElementById("cadastro-senha").value.trim(); // Usando o novo ID

        // Verifica se o e-mail é o do administrador
        if (email === "admin@gmail.com") {
            mostrarMensagem("Este e-mail é reservado para o administrador.");
            return;
        }

        const usuarioData = {
            nome,
            sobrenome,
            cpf,
            telefone,
            email,
            senha
        };

        try {
            const response = await fetch('http://localhost:3000/api/usuario/cadastro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuarioData)
            });

            const result = await response.json(); // Tenta parsear a resposta, seja sucesso ou erro

            if (response.ok) { // Se o status da resposta for 2xx (sucesso)
                mostrarMensagem(result.mensagem || "Cadastro realizado com sucesso!", "sucesso");
                setTimeout(() => showLogin(), 1200); // Redireciona para o login após sucesso
            } else { // Se o status for de erro (ex: 400, 500)
                mostrarMensagem(result.error || "Erro ao cadastrar usuário. Tente novamente.");
            }
        } catch (error) {
            // Captura erros de rede (servidor offline, CORS, etc.)
            console.error('Erro na requisição fetch para cadastro:', error);
            mostrarMensagem("Não foi possível conectar ao servidor. Verifique se ele está em execução.", "erro");
        }
    });

    // Mostrar mensagem de erro ou sucesso
    window.mostrarMensagem = function (texto, tipo = "erro") {
        mensagemDiv.textContent = texto;
        mensagemDiv.className = "mensagem " + tipo;
        mensagemDiv.style.display = "block";
    };

    // Limpar mensagens ao trocar de aba
    function limparMensagem() {
        mensagemDiv.textContent = "";
        mensagemDiv.className = "mensagem";
        mensagemDiv.style.display = "none";
    }
});
