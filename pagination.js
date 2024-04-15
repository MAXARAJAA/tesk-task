import customers from "./data.js";

function showPage(pageNumber) {
  const pageSize = 8;
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const tableBody = document.querySelector("#customerTable tbody");

  tableBody.innerHTML = "";

  for (let i = startIndex; i < endIndex && i < customers.length; i++) {
    const customer = customers[i];
    const row = `
      <tr>
        <td>${customer.name}</td>
        <td>${customer.company}</td>
        <td>${customer.phone}</td>
        <td>${customer.email}</td>
        <td>${customer.country}</td>
        <td>${customer.status}</td>
      </tr>
    `;
    tableBody.innerHTML += row;
  }
}

function createPagination() {
  const totalCustomers = customers.length;
  const pageSize = 8;
  const totalPages = Math.ceil(totalCustomers / pageSize);
  const paginationContainer = document.getElementById("pagination");

  paginationContainer.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = i;
    link.addEventListener("click", event => {
      event.preventDefault();
      showPage(i);
    });
    paginationContainer.appendChild(link);
  }
}

showPage(1);

createPagination();
