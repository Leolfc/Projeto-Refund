Projeto Refund

Uma aplicação web simples para registrar e acompanhar solicitações de reembolso de despesas.

Este projeto foi desenvolvido com HTML, CSS e JavaScript puro e tem como objetivo demonstrar como criar uma interface leve e responsiva para cadastrar despesas, exibir uma lista das solicitações e calcular o total acumulado.

---

## Demo rápido

- Abra `index.html` no seu navegador (duplo clique ou via Live Server).
- Preencha o formulário com o nome da despesa, selecione uma categoria e informe o valor (o campo formata automaticamente para BRL).
- Clique em "Adicionar despesa" e veja a despesa aparecer na lista à direita com o total atualizado.

---

## Funcionalidades

- Cadastro de despesas com:
  - Nome da despesa
  - Categoria (Alimentação, Hospedagem, Serviços, Transporte e Outros)
  - Valor formatado em Reais (BRL)
- Listagem dinâmica das despesas cadastradas
- Atualização automática do total de despesas exibido
- Contador da quantidade de solicitações
- Layout responsivo para diferentes larguras de tela

---

## Estrutura do projeto

- `index.html` — estrutura da página e formulário
- `styles.css` — estilos e regras de responsividade
- `script.js` — lógica de formatação, criação de itens e cálculo dos totais
- `img/` — ícones das categorias e ícone de remoção

---

## Como executar e desenvolver localmente

Opções simples:

- Abrir `index.html` diretamente no navegador.
- Ou usar uma extensão como Live Server no VS Code para ter recarregamento automático.

Requisitos:

- Qualquer navegador moderno (Chrome, Edge, Firefox, Safari).

---

## Trechos importantes (como o projeto funciona)

- Formatação do valor: o campo de valor (id `amount`) recebe apenas caracteres numéricos, transforma em centavos e aplica Intl.NumberFormat para exibir em BRL.
- Ao submeter o formulário, é criado um objeto de despesa com id, nome, categoria, valor e data de criação; em seguida chama-se a função `expenseAdd` para criar um elemento `li` e inseri-lo na lista.
- `updateTotals()` percorre os itens da lista, extrai o valor de cada um, soma e formata o total exibido no cabeçalho.

---

## Observações e bugs conhecidos

- A interface ainda não persiste dados (ex.: `localStorage`). Ao recarregar a página, as despesas são perdidas.
- O botão de remover está presente no HTML gerado, mas a ação para remover um item da lista não foi implementada no `script.js`.
- Há um pequeno typo no `script.js` na função `updateTotals`: a chamada `aletr("Não foi possivel atualizar os totais!");` deve ser `alert(...)`.

Esses pontos estão listados como possíveis melhorias na seção abaixo.

---

## Possíveis melhorias / Roadmap

- Persistência: salvar despesas no `localStorage` para manter os dados entre recargas.
- Edição: permitir que o usuário edite uma despesa já cadastrada.

---

## Contribuindo

Pull requests são bem-vindos. Para contribuições:

1. Faça um fork do repositório.
2. Crie uma branch com sua funcionalidade: `git checkout -b feat/minha-funcionalidade`.
3. Envie as mudanças e abra um PR descrevendo as alterações.

---

## Autor

Projeto criado para fins de estudo.