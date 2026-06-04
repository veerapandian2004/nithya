const productTitle = document.getElementById("product-title");
const userAmount = document.getElementById("user-amount");
const addButton = document.getElementById("add-expenses");
const expenditureValue = document.getElementById("expenditure-value");
const list = document.getElementById("list");
let totalExpense = 0;

addButton.addEventListener("click", function () {


    if (productTitle.value === "" || userAmount.value === "") {
        alert("Please enter all fields");
        return;
    }

    let title = productTitle.value;
    let amount = Number(userAmount.value);

    totalExpense = totalExpense + amount;
    expenditureValue.innerText = totalExpense;


    let expenseItem = document.createElement("div");

    
    expenseItem.classList.add("sublist-content");

    expenseItem.innerHTML = `
        <p class="product">${title}</p>
        <p class="amount">$${amount}</p>
    `;

    let editButton = document.createElement("button");

    editButton.innerText = "Edit";

    editButton.classList.add("edit");

    editButton.addEventListener("click", function () {

        productTitle.value = title;
        userAmount.value = amount;
    
        totalExpense = totalExpense - amount;

        expenditureValue.innerText = totalExpense;

        expenseItem.remove();
    });

    let deleteButton = document.createElement("button");

    deleteButton.innerText = "Delete";

    deleteButton.classList.add("delete");

    deleteButton.addEventListener("click", function () {

        totalExpense = totalExpense - amount;

        expenditureValue.innerText = totalExpense;

        expenseItem.remove();
    });

    expenseItem.appendChild(editButton);
    expenseItem.appendChild(deleteButton);
    
    list.appendChild(expenseItem);

        productTitle.value = "";
    userAmount.value = "";
});