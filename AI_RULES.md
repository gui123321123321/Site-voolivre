# AI_RULES.md — Site Voo / Voa Rio!

Este documento define as regras de trabalho para qualquer IA ou pessoa que altere o código do projeto **Site Voo / Voa Rio!**. Leia-o antes de inspecionar, sugerir ou modificar arquivos.

## 1. Objetivo e princípios do projeto

O objetivo é construir um site profissional para divulgar experiências de voo livre no Rio de Janeiro, com aparência consistente, conteúdo confiável, boa conversão e manutenção simples.

Princípios obrigatórios:

- Priorizar qualidade visual, clareza, confiança e experiência real de uso — não apenas fazer a página funcionar.
- Projetar primeiro para dispositivos móveis e depois validar telas maiores.
- Preservar o que já funciona. Não reescrever partes estáveis sem uma razão técnica concreta.
- Não inventar serviços, preços, duração, disponibilidade, locais, trajetos, garantias, avaliações ou promessas comerciais.
- Não afirmar que um arquivo foi editado, testado, publicado ou verificado sem que isso realmente tenha acontecido.
- Explicar problemas técnicos reais e sugerir soluções melhores quando uma ideia puder prejudicar acessibilidade, UX, manutenção ou funcionamento.

## 2. Repositórios e segurança das alterações

O projeto possui uma versão de teste e uma versão original:

- **Repositório de teste:** `gui123321123321/Site-voolivre`
- **Site de teste:** `https://gui123321123321.github.io/Site-voolivre/en/index.html`
- **Repositório original:** `voa-rio/voa-rio.github.io`

Regras:

1. Trabalhe primeiro no repositório de teste.
2. Não altere, publique ou faça commit no repositório original sem autorização explícita.
3. Antes de editar, confirme qual repositório, branch e versão estão sendo usados.
4. Não suponha que arquivos da versão de teste e da original sejam idênticos.
5. Preserve as cópias de segurança que o usuário mantém. Uma cópia de segurança não autoriza mudanças descuidadas.
6. Se não houver acesso direto ao repositório, seja transparente e forneça o arquivo completo ou instruções precisas, sem fingir que fez a alteração remota.

## 3. Inspeção obrigatória antes de editar

Antes de fazer uma alteração:

1. Leia o arquivo relevante por inteiro, quando disponível.
2. Inspecione os arquivos relacionados e as dependências: CSS, JavaScript, imagens, links, IDs, classes e funções chamadas.
3. Identifique onde cada seletor, ID, função e recurso é utilizado.
4. Entenda o comportamento atual e o problema concreto que precisa ser corrigido.
5. Planeje uma alteração focada, com o menor impacto possível.
6. Se faltar informação necessária, não invente: procure no projeto ou peça esclarecimento.

Não reconstrua um arquivo complexo a partir de um fragmento quando o arquivo original estiver disponível para consulta. Não substitua um arquivo inteiro sem conferir seu conteúdo e as dependências relevantes.

## 4. Arquitetura dos arquivos

A arquitetura de referência do projeto é:

- `index.html` na raiz: página principal em português brasileiro (PT-BR) e referência estrutural das páginas traduzidas.
- `style.css` na raiz: folha de estilos compartilhada pelas páginas que utilizam o layout principal.
- `js/idioma.js`: lógica central do seletor e do comportamento de idiomas.
- `en/index.html`: página principal em inglês, localizada na pasta `en/` e ligada ao CSS compartilhado da raiz.
- `asa-delta.html` e `parapente.html`: páginas específicas que devem preservar suas funcionalidades e manter consistência visual com o restante do site.

Regras de organização:

- Evite duplicar CSS ou JavaScript por idioma quando a responsabilidade já pertence a um arquivo compartilhado.
- Não mova, renomeie ou exclua arquivos, imagens, funções ou pastas sem procurar todas as referências e justificar a necessidade.
- Não crie um segundo sistema de idiomas em paralelo ao `js/idioma.js` sem autorização e justificativa técnica.
- Evite estilos e scripts inline quando o projeto já possui arquivos externos destinados a essas funções.
- Respeite a organização existente. Não imponha uma arquitetura nova apenas por preferência pessoal.

## 5. Regras de HTML

- Preserve a estrutura semântica, a ordem das seções, as classes, os IDs, os atributos técnicos, os links, as imagens e os pontos de integração com CSS e JavaScript, salvo quando a tarefa exigir uma mudança específica.
- Use elementos HTML semânticos e uma hierarquia coerente de títulos.
- Não remova um elemento apenas porque parece repetido: verifique primeiro sua função e seu contexto.
- Evite criar elementos duplicados para o mesmo objetivo, especialmente botões, chamadas para ação, rodapés e controles de idioma.
- Mantenha atributos de acessibilidade relevantes, como `alt`, rótulos, estados e atributos ARIA quando apropriados.
- Não altere nomes de classes, IDs ou atributos usados por scripts sem atualizar e testar todas as referências correspondentes.

## 6. CSS compartilhado e consistência visual

O arquivo `style.css`, na raiz, é a fonte compartilhada de estilos para as páginas que o utilizam.

Regras obrigatórias:

- A página `en/index.html` deve carregar o CSS compartilhado usando `../style.css`.
- Não adicione blocos `<style>` específicos à página traduzida em inglês. Corrija diferenças de aparência no CSS compartilhado ou na estrutura, conforme a causa real.
- Não crie um CSS separado para inglês apenas para compensar diferenças de layout causadas pela tradução.
- Antes de alterar um seletor, procure onde ele é usado e avalie o efeito sobre todas as páginas relacionadas.
- Evite regras duplicadas, seletores excessivamente específicos, valores fixos frágeis e uso desnecessário de `!important`.
- Prefira soluções responsivas e componentes reutilizáveis a ajustes isolados que só funcionam em uma largura de tela.
- Não altere cores, tipografia, fundos, margens ou alinhamentos de forma ampla sem verificar o impacto no restante do site.
- Não resolva um defeito visual de uma página criando outro defeito em páginas que compartilham o mesmo CSS.

### Caminhos relativos de `en/index.html`

Como o arquivo fica dentro da pasta `en/`, use caminhos relativos à sua localização:

- CSS compartilhado: `../style.css`
- JavaScript de idiomas: `../js/idioma.js`
- Imagens e outros arquivos localizados na raiz: `../nome-do-arquivo.ext`
- Páginas HTML localizadas na raiz: `../asa-delta.html`, `../parapente.html` e equivalentes.

Confirme a localização real de cada arquivo e use o nome e a extensão exatos. O GitHub Pages pode diferenciar letras maiúsculas e minúsculas em caminhos.

## 7. Traduções e páginas em outros idiomas

A versão em português mais recente deve ser usada como referência estrutural para as páginas traduzidas, desde que esteja disponível e seja a versão correta.

Ao traduzir:

1. Traduza o texto visível, mantendo sentido, intenção comercial e tom natural.
2. Preserve a ordem das seções, a estrutura, classes, IDs, imagens, atributos técnicos, funções, comentários e organização do HTML, salvo quando um ajuste de caminho for necessário.
3. Não remova nem simplifique funcionalidades durante a tradução.
4. Ajuste links relativos para que funcionem a partir da pasta do idioma.
5. Revise botões, menus, textos alternativos, mensagens de WhatsApp, títulos e demais textos apresentados ao usuário.
6. Confira se a tradução não altera inadvertidamente o idioma de destino, os links ou os estados do seletor.
7. Não suponha que existam idiomas além dos presentes no projeto. Preserve os idiomas já implementados e confirme seus caminhos antes de editar.

As diferenças de comprimento entre idiomas podem mudar a altura dos elementos. O layout deve acomodar essas diferenças naturalmente, sem alinhamentos improvisados exclusivos para uma tradução.

## 8. Problemas visuais já identificados

Durante o desenvolvimento, foram identificadas diferenças entre a página em português e a página em inglês. Elas devem ser consideradas ao revisar o layout:

- A parte inicial/cabeçalho em português apareceu mais escura do que a correspondente em inglês.
- O cabeçalho e a seção inicial em inglês ficaram mais centralizados, enquanto em português o conteúdo aparecia mais deslocado para um lado.
- O espaçamento do cabeçalho e das primeiras seções precisa ser comparado entre os idiomas.
- A página em inglês chegou a apresentar apenas os textos, sem a aparência esperada, indicando possível falha no carregamento do CSS ou uso de caminho relativo incorreto.

Ao corrigir esses problemas:

- Verifique primeiro se `../style.css` está sendo carregado corretamente.
- Compare a estrutura HTML e os nomes de classes com a página em português.
- Confira o caminho de imagens, fontes, scripts e outros recursos.
- Compare fundo, contraste, largura do conteúdo, margens, alinhamento, espaçamento, botões e comportamento em telas pequenas.
- Não faça correções por tentativa e erro sem identificar a causa provável.
- Não considere o problema resolvido apenas porque a página passou a exibir estilos: valide também a equivalência visual.

## 9. Seletor de idioma e persistência

O arquivo `js/idioma.js` é o ponto central para a manutenção do comportamento de idiomas.

Comportamento esperado:

- O usuário consegue selecionar qualquer idioma já implementado e retornar ao português a qualquer momento.
- O idioma selecionado continua consistente ao navegar entre a página principal, `asa-delta.html`, `parapente.html` e as versões traduzidas correspondentes, conforme a arquitetura existente.
- O seletor mostra apenas o idioma realmente selecionado; dois idiomas não podem aparecer marcados simultaneamente.
- A navegação entre páginas não deve apagar ou sobrescrever a escolha sem motivo.
- Os links do seletor devem levar a páginas existentes e equivalentes, com caminhos corretos.
- Quando aplicável, a mensagem pré-preenchida do WhatsApp deve acompanhar o idioma escolhido.

Problemas identificados anteriormente:

- Após selecionar outro idioma, houve casos em que o usuário não conseguia voltar ao português.
- Depois de uma alteração no JavaScript, o idioma atual e o português apareceram marcados ao mesmo tempo.

Ao corrigir esses problemas:

1. Inspecione o `js/idioma.js` completo e os elementos HTML usados pelo seletor.
2. Identifique como a escolha é guardada e recuperada e como o idioma atual é determinado em cada página.
3. Evite listeners duplicados, inicializações repetidas e lógicas concorrentes.
4. Não marque o português como selecionado por padrão se outro idioma válido já estiver ativo.
5. Garanta que a comparação dos códigos de idioma e dos caminhos seja consistente.
6. Teste a troca de idioma nos dois sentidos, a navegação entre páginas e o retorno ao português.
7. Verifique a mensagem de WhatsApp no idioma correto, se esse comportamento estiver implementado.
8. Não modifique HTML ou CSS funcional sem necessidade quando a correção puder ser feita de forma isolada no JavaScript.

Não considere o seletor corrigido até testar tanto a seleção visual quanto o destino real dos links.

## 10. Páginas específicas e WhatsApp

### `asa-delta.html` e `parapente.html`

- Preserve o conteúdo, os links e as funcionalidades existentes.
- Mantenha a aparência coerente com os botões e componentes equivalentes da página principal.
- Evite adicionar estilos inline ou duplicar regras compartilhadas sem necessidade.
- Verifique caminhos de CSS, scripts, imagens e links de navegação.

### Botões e mensagens de WhatsApp

- Preserve os botões flutuantes e suas funcionalidades.
- Evite dois botões que realizem a mesma ação quando um único botão claro for suficiente.
- O botão flutuante deve manter estilo consistente entre as páginas; evite fundo branco com texto branco ou outras combinações de baixo contraste.
- Não mantenha um botão flutuante e outro botão redundante no final da página sem uma razão clara de UX.
- Confira o destino e a mensagem pré-preenchida do WhatsApp após alterações de idioma ou de URL.
- Codifique corretamente os parâmetros da mensagem e não altere o contato de destino sem confirmação.
- Não invente números de telefone, mensagens comerciais, preços ou condições.

## 11. UX/UI, responsividade e acessibilidade

O site deve parecer um produto profissional e confiável, não apenas um protótipo funcional.

Priorize:

- Hierarquia visual clara e conteúdo fácil de entender.
- Tipografia legível, espaçamento consistente e alinhamento deliberado.
- Contraste adequado e chamadas para ação fáceis de localizar.
- Layouts responsivos que funcionem em celulares, tablets e desktops.
- Alvos de toque confortáveis e ausência de rolagem horizontal indesejada.
- Estados de foco visíveis, navegação por teclado e rótulos compreensíveis.
- Texto alternativo apropriado para imagens informativas.
- Componentes previsíveis, consistentes e fáceis de manter.
- Desempenho adequado, evitando bibliotecas, efeitos e animações desnecessários.

Antes de concluir uma mudança visual, compare pelo menos as larguras mobile e desktop disponíveis. Verifique se textos maiores, traduções, botões e menus não se sobrepõem, não ficam cortados e não provocam deslocamentos inesperados.

Não use centralização, espaçamento, alturas fixas ou posicionamento absoluto como remendo quando uma solução flexível resolver melhor o problema. Não sacrifique legibilidade, acessibilidade ou desempenho por um efeito decorativo.

## 12. JavaScript e preservação de funcionalidades

- Antes de alterar uma função, identifique todos os locais que a chamam e os elementos dos quais ela depende.
- Preserve o comportamento existente, salvo quando a tarefa exigir uma correção específica.
- Evite variáveis globais desnecessárias, listeners duplicados, código repetido e dependências sem benefício claro.
- Não transforme controles funcionais em elementos meramente decorativos.
- Confira o seletor de idioma, menus, FAQ, botões, links, mensagens de WhatsApp e outras interações afetadas.
- Não introduza tokens, senhas, chaves privadas ou credenciais no código público.
- Se adicionar uma dependência, explique por que ela é necessária e avalie seu impacto em desempenho, segurança e manutenção.

## 13. Conteúdo, imagens e links

- Não invente informações operacionais ou comerciais. Se um dado não estiver disponível, preserve o que já existe ou solicite confirmação.
- Não substitua imagens aprovadas por imagens genéricas sem motivo concreto.
- Confirme que cada imagem, fonte, script e arquivo referenciado existe no caminho indicado.
- Verifique todos os links internos relevantes depois de modificar a estrutura ou os caminhos.
- Não altere destinos de links externos sem conferir que o novo destino é válido.
- Preserve o tom, a identidade e as informações já aprovadas para a marca.
- Ao identificar texto repetido, confirme se é duplicação indesejada antes de removê-lo. Uma duplicação no rodapé principal já foi corrigida mantendo a primeira ocorrência de “Voa Rio! / O Rio aos seus pés...” e removendo apenas a repetição final; não use essa referência como autorização para remover outros conteúdos sem inspeção.

## 14. Processo de trabalho para cada tarefa

Siga esta sequência:

1. **Inspecionar:** ler os arquivos envolvidos e entender a implementação atual.
2. **Diagnosticar:** identificar a causa do problema, em vez de tratar apenas o sintoma.
3. **Planejar:** definir quais arquivos precisam mudar e por quê.
4. **Editar:** realizar alterações focadas, organizadas e compatíveis com a arquitetura.
5. **Revisar:** procurar erros de sintaxe, links quebrados, duplicações, caminhos incorretos e efeitos colaterais.
6. **Testar:** verificar as páginas e funcionalidades afetadas, dentro das ferramentas disponíveis.
7. **Relatar:** informar o que foi alterado, o que foi testado e o que ainda não pôde ser verificado.

Se uma ideia proposta tiver riscos técnicos ou de UX, explique-os com clareza e recomende uma alternativa melhor. Não concorde automaticamente com uma solução que possa prejudicar o produto.

## 15. Checklist de verificação

Use este checklist conforme a alteração realizada:

- [ ] O arquivo foi editado no repositório e na branch corretos.
- [ ] O CSS compartilhado está sendo carregado pelo caminho correto.
- [ ] As páginas traduzidas não receberam blocos `<style>` específicos.
- [ ] Os caminhos relativos de CSS, JavaScript, imagens e links estão corretos.
- [ ] Os nomes de arquivos respeitam maiúsculas e minúsculas.
- [ ] O layout permanece consistente em mobile e desktop.
- [ ] As versões em português e inglês mantêm estrutura e apresentação equivalentes.
- [ ] Cabeçalho, seção inicial, cores, alinhamentos e espaçamentos foram comparados quando relevantes.
- [ ] É possível trocar de idioma e voltar ao português.
- [ ] Apenas um idioma aparece selecionado por vez.
- [ ] O idioma permanece consistente ao navegar pelas páginas relevantes.
- [ ] Botões e links de WhatsApp funcionam e não estão duplicados sem necessidade.
- [ ] A mensagem de WhatsApp usa o idioma correto quando aplicável.
- [ ] FAQ e outras funcionalidades afetadas continuam funcionando.
- [ ] Não foram introduzidas informações comerciais inventadas.
- [ ] O repositório original não foi alterado sem autorização explícita.
- [ ] O relatório final distingue testes executados de verificações que não foram possíveis.

## 16. Entrega de arquivos e comunicação

- Quando o usuário pedir um arquivo completo para substituir outro, forneça o conteúdo integral, não apenas um fragmento ou uma lista de alterações.
- Informe o caminho exato do arquivo, por exemplo `en/index.html`, `style.css` ou `js/idioma.js`.
- Não entregue um arquivo compactado quando o usuário solicitar arquivos individuais.
- Não afirme que o arquivo foi enviado ao GitHub se apenas criou um arquivo local, nem afirme que foi criado localmente se isso não ocorreu.
- Se não puder editar diretamente o repositório, explique a limitação e forneça o arquivo completo ou instruções claras para aplicá-lo.
- Ao finalizar, resuma os arquivos modificados, as decisões técnicas importantes e os testes realmente executados.
- Seja direto, claro e honesto sobre limitações ou tarefas pendentes.

## 17. Regra principal

**Não quebre o que já funciona para corrigir outra coisa.** Entenda a implementação antes de alterar, preserve a arquitetura e as funcionalidades existentes, corrija a causa real do problema e valide os efeitos da mudança. O objetivo é um site consistente, confiável, acessível, responsivo e visualmente excelente.
