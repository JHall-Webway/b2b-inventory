const lineForm = document.getElementById('details');

async function grabProducts() {
    const response = await fetch(`/api/products`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.ok) {
        const data = await response.json();
        createline(data);
    } else {
        alert(response.statusText);
    }
}

function createline(prodObj) {
    var formGroup = document.createElement('div');
    formGroup.classList.add('form-group');

    var lineEl = document.createElement('select');
    lineEl.classList.add('prod-select');

    prodObj.forEach(prod => {
        var dropDownEl = document.createElement('option');
        dropDownEl.setAttribute('id', `${prod.id}`);
        dropDownEl.text = `${prod.product_name}`
        lineEl.appendChild(dropDownEl);
    })
    
    lineForm.appendChild(lineEl);
}



document.getElementById('add-line').addEventListener('click', grabProducts );