# Especificação do projeto

## Definição do problema

<p align="justify">O principal problema abordado por este projeto é a falha na comunicação entre os moradores urbanos e os responsáveis pela manutenção da infraestrutura. Essa deficiência resulta em atrasos, ineficiências e até mesmo na ausência de ação na resolução de problemas comuns, tais como vazamentos de água, ruas esburacadas, falhas na iluminação pública e problemas de saneamento básico.</p>

## Solução

<p align="justify">A solução proposta é o desenvolvimento de um aplicativo que permita aos cidadãos reportar qualquer tipo de problema relacionado à infraestrutura urbana. Dessa forma, busca-se evitar que essas questões se prolonguem, minimizando impactos negativos na convivência urbana e garantindo uma resposta mais ágil e eficiente por parte das autoridades responsáveis.</p>

## Ferramentas e Técnicas

- **Diagrama de Personas:** Representação dos perfis dos usuários-alvo da plataforma.

- **Histórias de Usuários:** Levantamento das necessidades e expectativas dos usuários com base em suas rotinas e desafios.

- **Requisitos Funcionais e Não Funcionais:** Definição detalhada das funcionalidades essenciais e dos aspectos técnicos que a solução deve atender.

- **Diagrama de Caso de Uso:** Modelagem dos principais fluxos de interação dos usuários com o sistema.

## Personas

## 1 - Pedro Paulo, 47 anos- Pedreiro
.No caminho do trabalho faz um desvio graças a uma queda de uma árvore.
.Já pediu para que a árvore fosse cortada, mas não obteve resposta.
.Está a procura de algum lugar onde possa relatar isso.

## 2 - Mariana Medeiros, 20 anos- Estudante 
.Na volta da faculdade passa por uma rua extremamente escura por falta de postes na rua.
.Já tentou proucurar algum responsável pela instalação desses postes, mas sem suceeso.
.Está procurando algo simples fácil e de forma digital para relatar.

## 3 - Anderson Arantes, 36 anos - Dono de empresa
.Percebeu um grande aumento nas contas de água por conta de um vazamento na rua.
.Não sabe a quem recorrer para que cessem esse vazamento.
.E realizar a regularização das contas.

## Histórias de usuários

Com base na análise das personas, foram identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

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


## Restrições

O projeto está restrito aos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|001| O projeto deverá ser entregue até o final do semestre |
|002| O custo total do projeto não deve exceder o orçamento definido       |

## Diagrama de casos de uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos. Ele utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. O diagrama contempla a fronteira do sistema e o detalhamento dos requisitos funcionais, com a indicação dos atores, casos de uso e seus relacionamentos.

> **Link do diagrama**: https://postimg.cc/PNzxvmgF
