# Plano de testes de usabilidade

<span style="color:red">Pré-requisitos: <a href="04-Projeto-interface.md"> Projeto de interface</a></span>, <a href="07-Plano-testes-software.md"> Plano de testes de software</a>

## Objetivo
<p align="justify">O objetivo deste plano de testes de usabilidade é obter informações quanto à expectativa dos usuários em relação à funcionalidade da aplicação proposta, que visa facilitar a comunicação entre cidadãos e autoridades para reportar e resolver problemas de infraestrutura urbana.</p>
<p align="justify">Foram elaborados quatro cenários, cada um baseado nas histórias de usuário definidas na etapa de especificações do projeto. O objetivo é avaliar a facilidade de uso, eficiência e satisfação do usuário ao executar tarefas essenciais do sistema.</p>

## Critérios de Seleção dos Participantes
<p align="justify">Os participantes foram selecionados de acordo com os perfis definidos nas personas do projeto. Cada voluntário representa uma categoria realista de usuário do sistema:</p>

- Cidadãos com experiências distintas em relação aos problemas urbanos (Pedro, Mariana, Anderson);
- Funcionários públicos responsáveis pelo gerenciamento e resolução das denúncias (João e Lucas).

## Procedimentos dos Testes
- **Modo do teste:** Presencial
- **Método:** Observação direta, medição de tempo e coleta de impressões subjetivas ao final de cada tarefa
- **Condutor do teste:** Integrante da equipe de desenvolvimento, com roteiro padronizado
- **Tempo total estimado por sessão:** 20 a 30 minutos
- **Ambiente:** Sala silenciosa com computador ou smartphone com o sistema carregado

## Métricas Coletadas
Durante os testes de usabilidade, foram coletadas as seguintes métricas para cada participante:

- **Taxa de Sucesso:** Indica se o usuário conseguiu ou não concluir a tarefa proposta com êxito (sim ou não).
- **Satisfação Subjetiva:** Avaliação pessoal do usuário em relação à experiência ao realizar a tarefa, registrada em uma nota de 0 a 5, onde:
  
  - 0 = Péssimo
  - 1 = Ruim
  - 2 = Regular
  - 3 = Bom
  - 4 a 5 = Ótimo

- **Tempo para Conclusão da Tarefa:** Tempo, em segundos, que o usuário levou para completar o cenário proposto. Esses tempos poderão ser comparados aos de um especialista (por exemplo, um desenvolvedor do sistema) como referência.
- **Identificação Anônima do Usuário:** Cada participante será identificado apenas por um número ou código (ex: Usuário 01, Usuário 02), garantindo conformidade com a LGPD.

## Restrições e Privacidade
<p align="justify">De acordo com as diretrizes da Lei Geral de Proteção de Dados (LGPD), nenhuma informação pessoal dos usuários foi coletada, considerando que não houve assinatura de Termo de Consentimento Livre e Esclarecido.</p>

## Cenários de teste de usabilidade

| Nº do cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é um morador da cidade e deseja reportar um buraco na rua em frente à sua casa. Acesse a plataforma, faça login e registre uma denúncia com foto e localização. |
| 2             | Você é uma estudante que precisa denunciar a falta de iluminação pública em uma rua próxima à universidade. Use o sistema para cadastrar o problema e verificar se há alguma denúncia semelhante já registrada. |
| 3             | Você é um comerciante e notou um vazamento de água em frente ao seu estabelecimento. Registre o problema e acompanhe o status da solicitação após o envio. |
| 4             | Você é um funcionário da prefeitura responsável pelo atendimento das denúncias. Acesse o painel administrativo, visualize as denúncias pendentes e altere o status de uma delas para “em andamento”. |

## Ferramentas Utilizadas
- **Dispositivo de Teste:** Computador ou notebook com navegador atualizado.
- **Cronômetro** (físico ou digital) para medir o tempo de execução das tarefas.
- **Bloco de notas** físico ou aplicativo de anotações (como Notas do Windows) para registrar observações e dados das métricas.
- **Formulário digital** simples (Google Forms) para avaliação da satisfação subjetiva ao final das tarefas.
