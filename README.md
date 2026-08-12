Projeto Refund

Uma aplicação web simples para registrar e acompanhar solicitações de reembolso de despesas. O projeto foi desenvolvido com HTML, CSS e JavaScript puro, e permite adicionar despesas, visualizar o total e acompanhar a quantidade de solicitações.

## Sobre o projeto

O Refund é uma interface de solicitação de reembolso pensada para simular o processo de registro de despesas. O usuário informa o nome da despesa, seleciona a categoria e define o valor. A aplicação formata automaticamente o valor em reais e atualiza o total acumulado em tempo real.

## Funcionalidades

- Cadastro de despesas com:
  - Nome
  - Categoria (Alimentação, Hospedagem, Serviços, Transporte e Outros)
  - Valor formatado em BRL
- Visualização das despesas adicionadas em uma lista
- Atualização automática do total de despesas
- Contagem dinâmica da quantidade de solicitações cadastradas
- Interface responsiva para telas menores

## Tecnologias

- HTML
- CSS
- JavaScript

## Como usar

1. Abra o arquivo `index.html` no navegador.
2. Preencha o formulário com o nome da despesa, categoria e o valor.
3. Clique em "Adicionar despesa".
4. A despesa aparecerá na lista e o total será atualizado imediatamente.

## Estrutura do projeto

- `index.html` - marcação da interface e formulário
- `styles.css` - estilos visuais e responsividade
- `script.js` - lógica de formatação, cadastro de despesas e atualização de totais
- `img/` - ícones usados nas categorias e botão de remoção

## Possíveis melhorias

- Adicionar persistência local usando `localStorage`
- Implementar remoção de despesas individuais
- Adicionar edição das despesas cadastradas
- Validar entradas com mensagens de erro mais claras
- Incluir filtro por categoria ou período