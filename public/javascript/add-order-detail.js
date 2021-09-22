const lineForm = document.getElementById('details');
const postArray = [];
const custId = document.getElementById('cust-id').innerHTML;
const orderId = document.getElementById('order-id').innerHTML;
const warningDivEl = document.getElementById('warning');
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
    var orderDetailObj ={};
    const postArray = [];
    const selectElArray = document.getElementsByTagName('select');
    const inputElArray = document.getElementsByTagName('input');
    const filtSelectEl = [];
    const filtInputEl = [];

    for (i=0; i<selectElArray.length; i++) {
        filtSelectEl.push(selectElArray[i].value);
        filtInputEl.push(inputElArray[i].value);
    }

    // product ID array
    console.log(filtSelectEl);
    // product QTY array
    console.log(filtInputEl);
    // customer ID
    console.log(filtCustId);
    // order ID
    console.log(filtOrderId);

    if (filtInputEl.includes('') == true) {
        console.log("THERE IS A NULL");
        warningDivEl.innerHTML = "Please ensure all qunatites have a value"
    } else {
        for (i=0; i<selectElArray.length; i++) {
            orderDetailObj = {
                order_id: parseInt(filtOrderId),
                customer_id: parseInt(filtCustId),
                product_id: parseInt(filtSelectEl[i]),
                quantity: parseInt(filtInputEl[i])
            }
            postArray.push(orderDetailObj);
        }
        
        bulkPost(postArray);
    }


}

async function bulkPost(postArray) {
    const response = await fetch(`/api/orderDetails/bulk`, {
        method: 'post',
        body: JSON.stringify(postArray),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.ok) {
        document.location.replace('/dashboard')
    } else {
        alert(response.statusText);
    }
}


document.getElementById('add-line').addEventListener('click', grabProducts );
document.getElementById('submit-detail').addEventListener('click', postDetails );