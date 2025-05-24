# Plano de testes de software
<span style="color:red">Pré-requisitos: <a href="02-Especificacao.md"> Especificação do projeto</a></span>, <a href="04-Projeto-interface.md"> Projeto de interface</a>

<p align="justify">O plano de testes de software da aplicação foi desenvolvido com base na especificação funcional do sistema e tem como objetivo validar o correto funcionamento das funcionalidades principais, garantindo que os requisitos estabelecidos estejam sendo atendidos de forma eficaz. Os testes foram realizados com versões parciais e posteriormente com a versão completa da aplicação.</p>

<p align="justify">A seguir, são apresentados os cenários de teste definidos para avaliar o desempenho e a usabilidade da plataforma. Os cenários foram escolhidos com base nas funcionalidades essenciais do sistema, tais como o envio de denúncias pelos cidadãos, o acompanhamento do status da solicitação, e o gerenciamento das ocorrências pelas prefeituras e entidades responsáveis.</p>

| **Caso de teste**  | **CT-001 – Cadastrar perfil**  |
|:---: |:---: |
| Requisito associado | RF-001 - Cadastrar usuários |
| Objetivo do teste | Verificar se o usuário consegue se cadastrar na aplicação. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site <br> - Clicar em "Entrar" <br> - Clicar em "Cadastro" <br> - Preencher os campos obrigatórios (Nome, sobrenome, CPF, telefone, E-mail, senha) <br> - Concordar com os termos e políticas <br> - Clicar no botão "Cadastre-se"|
| Critério de êxito | - O cadastro foi realizado com sucesso. |
| Responsável pela elaboração do caso de teste | Alan Lacerda Arantes |

<br>

| **Caso de teste**  | **CT-002 – Efetuar login**  |
|:---: |:---: |
| Requisito associado | RF-002 - Realizar login e autenticação |
| Objetivo do teste | Verificar se o usuário consegue realizar login. |
| Passos | - Acessar o navegador <br> - Informar o endereço do site <br> - Clicar no botão "Entrar" <br> - Preencher o campo de e-mail <br> - Preencher o campo de senha <br> - Clicar em "Entrar" |
| Critério de êxito | - O login foi realizado com sucesso. |
| Responsável pela elaboração do caso de teste | Cristhian Dias Braga |

<br>

| **Caso de teste**  | **CT-003 – Registrar denúncia**  |
|:---: |:---: |
| Requisito associado | RF-003 - Registrar denúncias |
| Objetivo do teste | Verificar se o usuário consegue registrar uma denúncia na aplicação. |
| Passos | - Acessar o site <br> - Realizar o login <br> - Preencher o formulário de denúncia<br> - Informar o Título do problema <br> - Selecionar o tipo do problema <br> - Informar o endereço <br> - Descrever com detalhes o problema <br> - Selecionar foto, caso queira <br> - Clicar no botão "Reportar Problema"|
| Critério de êxito | - A denúncia foi realizada com sucesso. |
| Responsável pela elaboração do caso de teste | Cristhian Dias Braga |

<br>

| **Caso de teste**  | **CT-004 – Verificar status da denúncia**  |
|:---: |:---: |
| Requisito associado | RF-005 - Exibir status da denúncia |
| Objetivo do teste | Verificar se o usuário consegue vizualizar o status da denúncia na aplicação. |
| Passos | - Acessar a página <br> - Clicar no botão "Verificar status da denúncia"|
| Critério de êxito | - O status da denúncia foi exibido com sucesso. |
| Responsável pela elaboração do caso de teste | Victor Jorge Alves Souza |

<br>

| **Caso de teste**  | **CT-005 – Localizar denúncias no mapa**  |
|:---: |:---: |
| Requisito associado | RF-005 - Exibir mapa interativo |
| Objetivo do teste | Verificar se o usuário consegue se cadastrar na aplicação. |
| Passos | - Acessar o site <br> - Clicar em "Mapa" no topo <br> - Clicar nos botões de filtro (Todos, buraco, iluminação, esgoto) |
| Critério de êxito | - O mapa interativo está funcionando com sucesso. |
| Responsável pela elaboração do caso de teste | Victor Jorge Alves Souza |

<br>

| **Caso de teste**  | **CT-006 – Página do administrador**  |
|:---: |:---: |
| Requisito associado | RF-011 - Fornecer uma página para o administrador |
| Objetivo do teste | Verificar se o administrador consegue vizualizar e atualizar as denúncias na aplicação. |
| Passos | - Acessar a página <br> - Realizar login de administrador <br> - Alterar status da denúncia|
| Critério de êxito | - O status da denúncia foi atualizado com sucesso. |
| Responsável pela elaboração do caso de teste | Alan Lacerda Arantes |
