document.addEventListener('DOMContentLoaded', () => {
    const productTableBody = document.querySelector('#productTable tbody');

    // Generate 100 product entries
    for (let i = 1; i <= 100; i++) {
        const productRow = document.createElement('tr');

        productRow.innerHTML = `
            <td>${i}</td>
            <td>Product ${i}</td>
            <td>Category ${Math.ceil(i / 10)}</td>
            <td>$${(Math.random() * 100).toFixed(2)}</td>
            <td>This is a brief description of Product ${i}.</td>
        `;

        productTableBody.appendChild(productRow);
    }
});
