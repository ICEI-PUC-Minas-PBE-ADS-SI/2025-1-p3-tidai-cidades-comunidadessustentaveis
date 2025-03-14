
# Metodologia

<span style="color:red">Pré-requisitos: <a href="02-Especificacao.md"> Especificação do projeto</a></span>

<p align="justify">O desenvolvimento do projeto segue a metodologia ágil Scrum, que permite organizar e distribuir as tarefas de forma iterativa e incremental. Essa abordagem facilita a adaptação às mudanças e melhora a colaboração entre os membros da equipe.</p>
<p align="justify">A equipe realiza reuniões para planejamento e acompanhamento do progresso, garantindo que as entregas sejam feitas dentro do prazo e com qualidade. O gerenciamento das atividades é feito por meio do GitHub Projects, onde são criados quadros de tarefas, sprints e backlog do produto.</p>
<p align="justify">A comunicação entre os membros é feita por meio de plataformas como Slack e GitHub Issues, permitindo a rápida identificação de problemas e a discussão de melhorias.</p>

## Relação de ambientes de trabalho

|AMBIENTE | PLATAFORMA | DESCRIÇÃO                 |
|--------------------|------------------------------------|----------------------------------------|
|Repositório do código - fonte | Github         |Controle de versão e armazenamento do código do projeto.              |
|Documentação do projeto     | Github               | Registra informações sobre o funcionamento do sistema e seu desenvolvimento. |
|Protótipo do projeto      | Figma              | Utilizado para criar e validar a interface antes da implementação. |
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

Discuta como a configuração do projeto foi feita na ferramenta de versionamento escolhida. Exponha como a gestão de tags, merges, commits e branches é realizada. Discuta também como a gestão de issues foi feita.

> **Links úteis**:
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e GitHub](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
> - [Comparando fluxos de trabalho](https://www.atlassian.com/br/git/tutorials/comparing-workflows)
> - [Understanding the GitHub flow](https://guides.github.com/introduction/flow/)
> - [The gitflow workflow - in less than 5 mins](https://www.youtube.com/watch?v=1SXpE08hvGs)

## Planejamento do projeto

###  Divisão de papéis

> Apresente a divisão de papéis entre os membros do grupo em cada Sprint. O desejável é que, em cada Sprint, o aluno assuma papéis diferentes na equipe. Siga o modelo do exemplo abaixo:

#### Sprint 1
- _Scrum master_: André Lucas
- Protótipos: Nathalya Dias
- Testes: Cristhian Dias
- Documentação: Alan Lacerda e Victor Jorge

#### Sprint 2
- _Scrum master_: AlunaY
- Desenvolvedor _front-end_: AlunoX
- Desenvolvedor _back-end_: AlunoK
- Testes: AlunaZ

###  Quadro de tarefas

> Apresente a divisão de tarefas entre os membros do grupo e o acompanhamento da execução, conforme o exemplo abaixo.

#### Sprint 1

Atualizado em: 21/04/2024

| Responsável   | Tarefa/Requisito | Iniciado em    | Prazo      | Status | Terminado em    |
| :----         |    :----         |      :----:    | :----:     | :----: | :----:          |
| Alan Lacerda       | Documentação do contexto | 01/02/2024     | 07/02/2024 | ✔️    | 05/02/2024      |
| André Lucas        | Protótipo   | 03/02/2024     | 10/02/2024 | 📝    |                 |
| Cristhian Dias        | Casos de uso  | 01/01/2024     | 07/01/2005 | ⌛     |                 |
| Victor Jorge       | Documentação de especificações  |    01/01/2024        | 12/02/2005 | ❌    |       |
| Nathalya Dias      | Protótipo  |    01/01/2024        | 12/02/2005 | ❌    |       |

#### Sprint 2

Atualizado em: 21/04/2024

| Responsável   | Tarefa/Requisito | Iniciado em    | Prazo      | Status | Terminado em    |
| :----         |    :----         |      :----:    | :----:     | :----: | :----:          |
| AlunaX        | Página inicial   | 01/02/2024     | 07/03/2024 | ✔️    | 05/02/2024      |
| AlunaZ        | CSS unificado    | 03/02/2024     | 10/03/2024 | 📝    |                 |
| AlunoY        | Página de login  | 01/02/2024     | 07/03/2024 | ⌛     |                 |
| AlunoK        | Script de login  |  01/01/2024    | 12/03/2024 | ❌    |       |


Legenda:
- ✔️: terminado
- 📝: em execução
- ⌛: atrasado
- ❌: não iniciado


> **Links úteis**:
> - [11 passos essenciais para implantar Scrum no seu projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)
> - [Os papéis do Scrum e a verdade sobre cargos nessa técnica](https://www.atlassian.com/br/agile/scrum/roles)

### Processo

<p align="justify">O processo de desenvolvimento é baseado no Scrum, permitindo uma abordagem iterativa para a construção do sistema. O fluxo de trabalho segue as seguintes etapas:</p>
 

### Ferramentas

Liste todas as ferramentas que foram empregadas no projeto, justificando a escolha delas, sempre que possível.

Exemplo: os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito é apresentada na tabela que se segue.

| Ambiente                            | Plataforma                         | Link de acesso                         |
|-------------------------------------|------------------------------------|----------------------------------------|
| Repositório de código fonte         | GitHub                             | http://....                            |
| Documentos do projeto               | GitHub                             | http://....                            |
| Projeto de interface                | Figma                              | http://....                            |
| Gerenciamento do projeto            | GitHub Projects                    | http://....                            |
| Hospedagem                          | Vercel                             | http://....                            |
 
