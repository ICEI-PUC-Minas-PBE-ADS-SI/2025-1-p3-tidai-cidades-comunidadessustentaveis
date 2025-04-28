
# Metodologia

<span style="color:red">Pré-requisitos: <a href="02-Especificacao.md"> Especificação do projeto</a></span>

<p align="justify">O desenvolvimento do projeto segue a metodologia ágil Scrum, que permite organizar e distribuir as tarefas de forma iterativa e incremental. Essa abordagem facilita a adaptação às mudanças e melhora a colaboração entre os membros da equipe.</p>
<p align="justify">A equipe realiza reuniões para planejamento e acompanhamento do progresso, garantindo que as entregas sejam feitas dentro do prazo e com qualidade. O gerenciamento das atividades é feito por meio do GitHub Projects, onde são criados quadros de tarefas, sprints e backlog do produto.</p>

## Relação de ambientes de trabalho

|AMBIENTE | PLATAFORMA | DESCRIÇÃO                 |
|--------------------|------------------------------------|----------------------------------------|
|Repositório do código - fonte | Github         |Controle de versão e armazenamento do código do projeto.              |
|Documentação do projeto     | Github               | Registra informações sobre o funcionamento do sistema e seu desenvolvimento. |
|Protótipo do projeto      | Canvas            | Utilizado para criar e validar a interface antes da implementação. |
|Desenvolvimento da interface      | Visual Studio Code                | Utilizado para codificação do sistema em HTML, CSS e JavaScript. |
|Banco de dados       | MongoDB              | Armazena as informações sobre os problemas de infraestrutura urbana cadastrados pelos usuários. |


## Controle de versão

A ferramenta de controle de versão adotada no projeto foi o [Git](https://git-scm.com/), sendo que o [GitHub](https://github.com) foi utilizado para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `unstable`: versão já testada do software, porém instável
- `testing`: versão em testes do software
- `dev`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para etiquetas:

- `documentation`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

## Planejamento do projeto

###  Divisão de papéis

#### Sprint 1
- _Scrum master_: André Lucas
- Protótipos: Nathalya Dias
- Testes: Cristhian Dias
- Documentação: Alan Lacerda, Cristhian Dias e Victor Jorge

#### Sprint 2
- _Scrum master_: Alan Lacerda
- Desenvolvedor _front-end_: André Lucas e Nathalya Dias
- Desenvolvedor _back-end_: Cristhian Dias
- Testes: Victor

###  Quadro de tarefas

#### Sprint 1

Atualizado em: 17/03/2025

| Responsável   | Tarefa/Requisito | Iniciado em    | Prazo      | Status | Terminado em    |
| :----         |    :----         |      :----:    | :----:     | :----: | :----:          |
| Alan Lacerda       | Documentação do contexto | 08/03/2025     | 17/03/2025 | ✔️    | 11/03/2025      |
| Alan Lacerda       | Documentação da metodologia | 12/03/2025     | 17/03/2025 | ✔️    | 16/03/2025      | 
| Cristhian Dias        | Documentação de especificações  | 10/03/2025     | 17/03/2025 | ✔️     |         17/03/2025        |
| Victor Jorge       | Documentação de especificações  |    10/03/2025        | 17/03/2025 | ✔️    |     17/03/2025  |
| Nathalya Dias      | Protótipo  |    24/02/2025        | 17/04/2025 | ✔️    |  24/02/2025     |
| André Lucas        | Protótipo   | 24/02/2025     | 17/04/2025 | ✔️    |    24/02/2025           | 

#### Sprint 2

Atualizado em: 25/04/2025

| Responsável   | Tarefa/Requisito  | Iniciado em    | Prazo      | Status | Terminado em |
| :----         |    :----          |      :----:    | :----:     | :----: | :----:       |
| Nathalya Dias | Página de login   | 16/03/2025     | 25/04/2025 |   ✔️  | 07/04/2025    |
| Nathalya Dias | Script de login   |  19/03/2025    | 25/04/2025 |  ✔️   |  07/04/2025   |
| Alan Lacerda  | Página de cadastro|  21/03/2025    | 25/04/2025 |  ✔️   |  13/04/2025   |
| André Ravacini| Página inicial    | 19/03/2025     | 25/04/2025 | ✔️    | 01/04/2024    |
| André Ravacini| CSS unificado     | 24/03/2025     | 25/04/2025 | ✔️    | 01/04/2025    |
| Cristhian Dias| Banco de dados    |  24/03/2025    | 25/04/2025 |  ✔️   |  20/04/2025   |
| Victor Jorge  | Página de denúncia|  24/03/2025    | 25/04/2025 |  ✔️   |  18/04/2025   |

Legenda:
- ✔️: terminado
- 📝: em execução
- ⌛: atrasado
- ❌: não iniciado

### Processo

<p align="justify">O processo de desenvolvimento é baseado no Scrum, permitindo uma abordagem iterativa para a construção do sistema. O fluxo de trabalho segue as seguintes etapas:</p>

 - **GitHub (Documentação e Gerenciamento):** Utilizado para versionamento, controle de alterações e colaboração da equipe, garantindo organização e rastreabilidade do projeto.
 - **Canvas (Interface):** Escolhido para o desenvolvimento da interface devido à sua flexibilidade e capacidade de criar layouts interativos e responsivos, garantindo uma melhor experiência visual e usabilidade.
 - **VS code (Front-end):** Escolhido por sua leveza, suporte a múltiplas linguagens e integração com Git, facilitando o desenvolvimento e a manutenção do código.
 - **MongoDB (Banco de dados):** Optamos pelo MongoDB devido à sua flexibilidade e escalabilidade, permitindo o armazenamento eficiente de dados em formato JSON.

### Ferramentas



| Ambiente                            | Plataforma                         | Link de acesso                         |
|-------------------------------------|------------------------------------|----------------------------------------|
| Repositório do back-end         | GitHub                             |https://github.com/ICEI-PUC-Minas-PBE-ADS-SI/2025-1-p3-tidai-cidades-comunidadessustentaveis/tree/main/src/back                          |
| Repositório do front-end            | GitHub                           | https://github.com/ICEI-PUC-Minas-PBE-ADS-SI/2025-1-p3-tidai-cidades-comunidadessustentaveis/tree/main/src/front                            |
| Documentos do projeto               | GitHub                             | https://github.com/ICEI-PUC-Minas-PBE-ADS-SI/2025-1-p3-tidai-cidades-comunidadessustentaveis/tree/mai                        |
| Projeto de interface                | Canvas                             | https://www.canva.com/design/DAGhXuqY1m0/k-_0P_ylrLWH7eWcf_YAxA/edit?utm_content=DAGhXuqY1m0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton                            |
| Gerenciamento do projeto            | GitHub Projects                    | https://github.com/ICEI-PUC-Minas-PBE-ADS-SI/2025-1-p3-tidai-cidades-comunidadessustentaveis/tree/mai                         |
| Hospedagem                          | A defenir                           | http://....                            |
 
