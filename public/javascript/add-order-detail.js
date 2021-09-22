const lineForm = document.getElementById('details');
const postArray = [];
const custId = document.getElementById('cust-id').innerHTML;
const orderId = document.getElementById('order-id').innerHTML;
var filtCustId = custId.replace(/\D/g, "");
var filtOrderId = orderId.replace(/\D/g, "");

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

    var labelEl = document.createElement('label');
    labelEl.setAttribute('for', 'select-prod');
    labelEl.innerHTML = "Select product";

    var lineEl = document.createElement('select');
    lineEl.classList.add('prod-select');
    lineEl.setAttribute('id', 'select-prod');

    var inputQtyEl = document.createElement('input');
    inputQtyEl.setAttribute('type', 'number');
    inputQtyEl.setAttribute('min', '1');
    inputQtyEl.setAttribute('max', '1000');
    inputQtyEl.classList.add('qty-input');

    prodObj.forEach(prod => {
        var dropDownEl = document.createElement('option');
        dropDownEl.setAttribute('value', `${prod.id}`);
        dropDownEl.text = `${prod.product_name}`
        lineEl.appendChild(dropDownEl);
    })

    formGroup.appendChild(labelEl);
    formGroup.appendChild(lineEl);
    formGroup.appendChild(inputQtyEl);
    lineForm.appendChild(formGroup);
}

function postDetails() {
    const selectElArray = document.getElementsByTagName('select');
    const inputElArray = document.getElementsByTagName('input');
    const filtSelectEl = [];
    const filtInputEl = [];

    for (i=0; i<selectElArray.length; i++) {
        filtSelectEl.push(selectElArray[i].value);
        filtInputEl.push(inputElArray[i].value);
    }

    console.log(filtSelectEl);
    console.log(filtInputEl);



    console.log(filtCustId);
    console.log(filtOrderId);


}



document.getElementById('add-line').addEventListener('click', grabProducts );
document.getElementById('submit-detail').addEventListener('click', postDetails );