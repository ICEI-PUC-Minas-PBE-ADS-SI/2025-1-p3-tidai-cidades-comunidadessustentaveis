# Registro de testes de software

<span style="color:red">Pré-requisitos: <a href="04-Projeto-interface.md"> Projeto de interface</a></span>, <a href="07-Plano-testes-software.md"> Plano de testes de software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

<p align="justify">Este relatório apresenta as evidências dos testes de software realizados no sistema de gestão de denúncias de problemas de infraestrutura urbana, conforme os casos definidos no Plano de Testes. Os testes foram conduzidos pela equipe de desenvolvimento, com o objetivo de verificar o cumprimento dos critérios de êxito estabelecidos para cada funcionalidade da aplicação.</p>

<p align="justify">Para cada caso de teste, foi realizado o registro das evidências por meio de capturas de tela e vídeos no formato screencast, demonstrando o comportamento da aplicação diante das ações executadas. Essas evidências comprovam se o sistema atendeu ou não aos requisitos esperados.</p>

Entre os casos testados, destacam-se:
- Registro de denúncias pelos cidadãos, que apresentou funcionamento adequado e conforme o esperado.

- Autenticação de usuários, com sucesso no login tanto de cidadãos quanto de administradores.

- Visualização e alteração de status das denúncias pelo administrador, funcionalidade que foi parcialmente validada, pois se constatou que o administrador ainda não consegue visualizar os detalhes completos de cada denúncia
  
<br>

| **Caso de teste**                        | **Requisito associado**                                        | **Registro de evidência**                                                                                                                                       |
|------------------------------------------|----------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CT-001 – Cadastrar um perfil                | RF-005 – Gerenciar conta                                     | [https://youtu.be/vCxXKlzkUQ4](https://youtu.be/vCxXKlzkUQ4)                                                                                                     |
| CT-002 – Realizar um login                   | RF-009 – Efetuar login                          | [https://drive.google.com/file/d/1PGFMYzSzoD-hVETIhpKAzrfhwQGwyBQh/view?usp=drive_link](https://drive.google.com/file/d/1PGFMYzSzoD-hVETIhpKAzrfhwQGwyBQh)       |
| CT-003 – Registrar uma denúncia              | RF-007 – Gerenciar denúncia                                    | [https://drive.google.com/file/d/1I8RShWj9uEZ-eiX3LIPj3wdb-bHPThCd/view?usp=drive_link](https://drive.google.com/file/d/1I8RShWj9uEZ-eiX3LIPj3wdb-bHPThCd)       |
| CT-004 – Verificar status da denúncia    | RF-014 – Visualizar denúncia                              | [https://youtu.be/LbsNp_8xKgc](https://youtu.be/LbsNp_8xKgc)                                                                                                     |
| CT-005 – Localizar denúncias no mapa     | RF-013 – Exibir mapa                                       | [https://youtu.be/J8476zGskwA](https://youtu.be/J8476zGskwA)                                                                                                     |
| CT-006 – Página do administrador                | RF-003 – Gerenciar Tipo de Denúncia              | [https://youtu.be/sbgDfLusr64](https://youtu.be/sbgDfLusr64)                                                                                                     |


## Avaliação
<p align="justify">A partir dos testes realizados na aplicação, foi possível identificar diversos pontos que podem ser aprimorados, especialmente no aspecto visual da interface. A experiência do usuário ainda pode ser otimizada para torná-la mais intuitiva, facilitando a navegação e o uso dos recursos disponíveis. Apesar disso, a funcionalidade de registro de denúncias apresentou um bom desempenho, atendendo aos requisitos propostos de forma satisfatória.</p>

<p align="justify">Um ponto de atenção identificado foi a área administrativa da aplicação. Atualmente, o administrador consegue apenas alterar o status das denúncias, sem acesso detalhado às informações completas de cada uma. Essa limitação compromete a eficiência da análise e do acompanhamento das ocorrências reportadas pelos cidadãos.</p>

<p align="justify">Com base nessa análise, o grupo definiu como prioridade para a próxima iteração o aprimoramento do painel do administrador. Serão implementadas melhorias que permitam a visualização completa das denúncias, além de ajustes no layout e na organização dos dados, proporcionando uma interface mais funcional e eficiente para os gestores.</p>

<p align="justify">Em resumo, os testes apontaram que a aplicação está caminhando bem em relação às funcionalidades voltadas para o cidadão, enquanto a área administrativa requer mais atenção no momento. As melhorias identificadas já estão sendo planejadas para as próximas versões do sistema.</p>
