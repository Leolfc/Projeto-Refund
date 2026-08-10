//Seleciona os elementos do formulario
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const expense = document.getElementById("expense");
const category = document.getElementById("category");
//CAPTURA O EVENTO DE INPUT PARA FORMATAR O VALOR

//Seleciona os elementos da lista
const expenseList = document.querySelector("ul");

amount.oninput = () => {
  //Obten o valor atual do input e remove os carasteres não numéricos.
  let value = amount.value.replace(/\D/g, "");

  //Transforma o valor em centavos
  value = Number(value) / 100;

  //Atualiza o valor do input.
  amount.value = formatCurrencyBRL(value);
};

function formatCurrencyBRL(value) {
  value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return value;
}

//Captura o valor de submit do fomrulario para obter os valores.
form.onsubmit = (event) => {
  //Previne o comportamento padrão de recarregar a página
  event.preventDefault();

  //Cria um objetos com os detalhes na nova despesa
  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    create_at: new Date(),
  };
  //Chama a função que irá adicionar o item na lista.
  expenseAdd(newExpense);
};

function expenseAdd(newExpense) {
  try {
    //Cria o elemento deli para para adicionar o item(li)na lista(ul).
    const expenseItem = document.createElement("li");
    expenseItem.classList.add("expense");
    //Cria o icone da categoria
    const expenseIcon = document.createElement("img");
    expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`);
    expenseIcon.setAttribute("alt", newExpense.category_name);

    //Cria a info da despesa
    const expenseInfo = document.createElement("div");
    expenseInfo.classList.add("expense-info");

    //Cria o nome da despesa
    const expenseName = document.createComment("strong");
    expenseName.textContent = newExpense.expense;

    //Cria acategoria da despesa
    const expenseCategory = document.createElement("span");
    expenseCategory.textContent = newExpense.category_name;

    //Adiciona nome e categoria na div das informações da despesa.
    expenseInfo.append(expenseName, expenseCategory);

  //Cria o valor da despesa 
const expenseAmount = document.createElement("span");
expenseAmount.classList.add("expense-amount");
expenseAmount.innerHTML = `<span>R$</span>${newExpense.amount.toUpperCase().replace("R$", "")}`

    //Adiciona as informações no item
    expenseItem.append(expenseIcon, expenseInfo, expenseAmount);

    //Adiciona o item na lista
    expenseList.append(expenseItem);
  } catch (error) {
    alert("Não foi possivel atualizar a lista de despesas!");
  }
}
