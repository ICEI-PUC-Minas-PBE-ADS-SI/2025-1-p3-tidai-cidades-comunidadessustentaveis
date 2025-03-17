# Especificação do projeto

## Definição do problema

<p align="justify">O principal problema abordado por este projeto é a falha na comunicação entre os moradores urbanos e os responsáveis pela manutenção da infraestrutura. Essa deficiência resulta em atrasos, ineficiências e até mesmo na ausência de ação na resolução de problemas comuns, tais como vazamentos de água, ruas esburacadas, falhas na iluminação pública e problemas de saneamento básico.</p>

## Solução

<p align="justify">A solução proposta é o desenvolvimento de um aplicativo que permita aos cidadãos reportar qualquer tipo de problema relacionado à infraestrutura urbana. Dessa forma, busca-se evitar que essas questões se prolonguem, minimizando impactos negativos na convivência urbana e garantindo uma resposta mais ágil e eficiente por parte das autoridades responsáveis.</p>

## Ferramentas e Tecnicas

- **Diagrama de Personas:** Representação dos perfis dos usuários-alvo da plataforma.

- **Histórias de Usuários:** Levantamento das necessidades e expectativas dos usuários com base em suas rotinas e desafios.

- **Requisitos Funcionais e Não Funcionais:** Definição detalhada das funcionalidades essenciais e dos aspectos técnicos que a solução deve atender.

- **Diagrama de Caso de Uso:** Modelagem dos principais fluxos de interação dos usuários com o sistema.

## Personas

## 1 - Pedro Paulo, 47 anos- Pedreiro
.No caminho do trabalho faz um desfio graças a uma queda de uma arvore
.ja pediu para que essa arvore seja cortada mas não obeteve resposta
.esta a procura de algum lugar onde possa relatar isso.

## 2 - Mariana Medeiros, 20 anos- Estudante 
.Na volta da faculdade passa por uma rua estremamente escura por falta de postes na rua
.Ja tentou proucurar algum responsavel para intalação desses postes mas sem suceeso
.Esta procurando algo simples facil e de forma digital

## 3 - Anderson Arantes, 36 anos - Dono de empresa
.Percebeu um grande almento nas contas de agua por culpa de um vazamento na rua
.Não sabe a quem recorer para que cessem esse vazamento
.E regularizar as contas 

## Histórias de usuários

Com base na análise das personas, foram identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuários que são relevantes para o projeto da sua solução. As histórias de usuários consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuários por contexto, para facilitar consultas recorrentes a esta parte do documento.

> **Links úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (user stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 common user story mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas a seguir apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade dos requisitos, aplique uma técnica de priorização e detalhe como essa técnica foi aplicada.

### Requisitos funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Cadastrar usuários | ALTA | 
|RF-002| Realizar login e autenticação   | ALTA |
|RF-003| Registrar denúncias   | ALTA |
|RF-004| Enviar imagens   | MÉDIA |
|RF-005| Exibir mapa interativo   | MÉDIA |
|RF-006| Filtrar denúncias  | MÉDIA |
|RF-007| Fornecer status das demandas pelo governo   | ALTA |
|RF-008| Garantir uma interface intuitiva  | MÉDIA |
|RF-009| Confirmar denúncia  | MÉDIA |


### Requisitos não funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em dispositivos móveis | MÉDIA | 
|RNF-002| O sistema deve processar as requisições do usuário em no máximo 3 segundo |  BAIXA | 
|RNF-003| O sistema deve ser de fácil usabilidade |  BAIXA | 
|RNF-004| O sistema deve carregar as denúcnias rapidamente |  MÉDIA | 
|RNF-005| Os dados do usuário devem ser protegidos, especialmente e-mails e senhas |  ALTA | 
|RNF-006| O sistema deve estar acessível 24/7/2025 |  ALTA | 
|RNF-007| O sistema deve funcionar nos principais navegadores e dispositivos móveis |  MÉDIA | 
|RNF-008| O banco de dados deve ser otimizado para suportar grandes quantidades de dados |  ALTA | 

Com base nas histórias de usuários, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos não funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).

Lembre-se de que cada requisito deve corresponder a uma e somente uma característica-alvo da sua solução. Além disso, certifique-se de que todos os aspectos capturados nas histórias de usuários foram cobertos.

> **Links úteis**:
> - [O que são requisitos funcionais e requisitos não funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [Entenda o que são requisitos de software, a diferença entre requisito funcional e não funcional, e como identificar e documentar cada um deles](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Restrições

O projeto está restrito aos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|001| O projeto deverá ser entregue até o final do semestre |
|002| O custo total do projeto não deve exceder o orçamento definido       |

## Diagrama de casos de uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos. Ele utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. O diagrama contempla a fronteira do sistema e o detalhamento dos requisitos funcionais, com a indicação dos atores, casos de uso e seus relacionamentos.

As referências abaixo irão auxiliá-lo na geração do artefato “diagrama de casos de uso”.

> **Links úteis**:
> - [Criando casos de uso](https://www.ibm.com/docs/pt-br/engineering-lifecycle-management-suite/design-rhapsody/10.0?topic=cases-creating-use)
> - [Como criar diagrama de caso de uso: tutorial passo a passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)
