document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const queryForm = document.getElementById('queryForm');
    const queryList = document.getElementById('queryList');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for contacting us. We will get back to you soon.');
        contactForm.reset();
    });

    queryForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const clientName = document.getElementById('clientName').value;
        const clientQuery = document.getElementById('clientQuery').value;

        const queryItem = document.createElement('div');
        queryItem.className = 'query-item';

        const queryTitle = document.createElement('h3');
        queryTitle.textContent = clientName;

        const queryText = document.createElement('p');
        queryText.textContent = clientQuery;

        queryItem.appendChild(queryTitle);
        queryItem.appendChild(queryText);

        queryList.appendChild(queryItem);

        queryForm.reset();
    });
});
