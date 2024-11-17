const addButton = document.getElementById('addButton');

addButton.onclick = () => {
    const name = document.getElementById('nameInput').value.trim();
    const age = +document.getElementById('ageInput').value;

    if (!name || isNaN(age)) {
        alert('Пожалуйста, заполните оба поля корректно.');
        return;
    }

    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<span>${name}</span><span>Age: ${age}</span>`;

    if (age <= 25) {
        document.getElementById('under25').append(card);
    } else if (age <= 50) {
        document.getElementById('under50').append(card);
    } else {
        document.getElementById('others').append(card);
    }

    document.getElementById('nameInput').value = '';
    document.getElementById('ageInput').value = '';
};
