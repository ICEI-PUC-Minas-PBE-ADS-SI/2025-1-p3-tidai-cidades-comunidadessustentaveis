# Registro de testes de usabilidade

<span style="color:red">Pré-requisitos: <a href="04-Projeto-interface.md"> Projeto de interface</a></span>, <a href="09-Plano-testes-usabilidade.md"> Plano de testes de usabilidade</a>

<p align="justify">Após a realização dos testes de usabilidade, este relatório apresenta os resultados e as análises referentes à interação dos usuários com a aplicação desenvolvida. O registro dos testes de usabilidade compila as evidências coletadas durante a execução dos cenários previamente definidos no Plano de Testes, bem como os relatos e percepções dos participantes.</p>

<p align="justify">Este documento tem como finalidade documentar o desempenho da aplicação diante dos usuários-alvo, avaliando aspectos como a taxa de sucesso na execução das tarefas, a satisfação subjetiva dos participantes e o tempo necessário para conclusão dos cenários. As informações aqui contidas servem para subsidiar melhorias na interface e funcionalidade do sistema, visando garantir uma melhor experiência ao usuário final.</p>

<p align="justify">Foram adotados todos os cuidados necessários para respeitar a privacidade dos voluntários, conforme as diretrizes da Lei Geral de Proteção de Dados (LGPD), garantindo que nenhum dado pessoal sensível tenha sido coletado ou divulgado.</p>

## Resultados dos Testes de Cenários

**Cenário 1:** Você é um morador da cidade e deseja reportar um buraco na rua em frente à sua casa. Acesse a plataforma, faça login e registre uma denúncia com foto e localização.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 1min 34s                        |
| 2       | SIM             | 4                    | 2min 27s                        |
| 3       | SIM             | 5                    | 1min 51s                        |
|  |  |  |  |
| **Média**     | 100%           | 4,67                | 1min 57s                    |
| **Tempo para conclusão pelo especialista** | SIM | 4 | 	0min 45s |


Comentários dos usuários: “Achei bem fácil de usar, consegui fazer tudo sem dificuldade.”

“O sistema é claro, mas achei estranho porque tentei adicionar mais de uma foto do buraco e não consegui.”

“Gostei da forma como a localização funciona, é rápida.”



**Cenário 2:** Você é uma estudante que precisa denunciar a falta de iluminação pública em uma rua próxima à universidade. Use o sistema para cadastrar o problema e verificar se há alguma denúncia semelhante já registrada.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 1min 43s                          |
| 2       | SIM             | 4                    | 2min 09s                        |
| 3       | SIM             | 3                    | 1min 52s                        |
|  |  |  |  |
| **Média**     | 100%           | 4                | 1min 55s                           |
| **Tempo para conclusão pelo especialista** | SIM | 4 | 0min 54s |

Comentários dos usuários: “Foi tranquilo cadastrar a denúncia.”

“O mapa ajudou bastante, mas eu quase não percebi que dava pra ver denúncias parecidas. Isso podia estar mais claro.”

“O processo faz sentido, mas demorei um pouco pra achar onde ver se já tinha denúncia feita.”


**Cenário 3:** Você é um comerciante e notou um vazamento de água em frente ao seu estabelecimento. Registre o problema e acompanhe o status da solicitação após o envio.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 1min 39s                    |
| 2       | SIM             | 5                    | 2min 28s                       |
| 3       | SIM             | 5                    | 	2min 06s                         |
|  |  |  |  |
| **Média**     | 100%           | 5                | 2min 04s                       |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 0min 41s segundos |

Comentários dos usuários: “Foi simples, gostei de já ver o status da minha denúncia logo depois que mandei.”

“Curti que não precisei ficar procurando pra saber se foi registrado, já aparece ali mesmo.”

“Achei funcional, mas poderia ter um aviso de confirmação mais destacado.”


**Cenário 4:** Você é um funcionário da prefeitura responsável pelo atendimento das denúncias. Acesse o painel administrativo, visualize as denúncias pendentes e altere o status de uma delas para “em andamento”.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 2min 12s                           |
| 2       | SIM             | 5                    | 1min 24s                           |
| 3       | SIM             | 3                    | 2min 49s                         |
|  |  |  |  |
| **Média**     | 100%           | 4,33                | 2min 08s                         |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 0min 48s |

Comentários dos usuários: “Gostei porque é bem simples e tranquilo de usar, não tem segredo.”

“Demorei pra encontrar o botão de trocar o status, ele fica meio escondido.”

“Depois que achei o botão, foi de boa, mas podia estar mais visível.”



## Avaliação 

Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta um desempenho satisfatório quanto à taxa de sucesso na interação dos usuários, uma vez que os cenários propostos foram concluídos com êxito.

Além disso, a aplicação também alcançou um elevado nível de satisfação subjetiva dos usuários durante a realização dos cenários propostos. Isso é evidenciado pelas médias das avaliações em cada cenário, que variaram entre 4 (bom) e 5 (excelente).

Em relação ao tempo de conclusão de cada tarefa/cenário, observou-se uma discrepância significativa entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Essa diferença, até certo ponto, é esperada, dado que o desenvolvedor já possui conhecimento prévio de toda a interface da aplicação, do posicionamento dos elementos, da lógica de organização das páginas, etc.

No entanto, considerando que a diferença foi expressiva (por exemplo, 113 segundos — média dos usuários — contra 25 segundos — especialista — no cenário três), e levando em conta os comentários feitos por alguns usuários, foram identificadas oportunidades para melhorias na usabilidade da aplicação.

> **Links úteis**:
> - [Ferramentas de testes de usabilidade](https://www.usability.gov/how-to-and-tools/resources/templates.html)
