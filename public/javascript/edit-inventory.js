async function editInventoryHandler(event) {
    event.preventDefault();

    const product_id = document.getElementById('product').value;
    const qty = document.getElementById('qty').value;

    console.log(product);
    console.log(qty);
    if (!product || !qty) {
        return;
    } else {
        const response = await fetch(`/api/products/${product_id}`, {
            method: 'PUT',
            body: JSON.stringify({
                quantity: qty
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        //   content.id will give us the ID of the order JUST CREATED
        //   const content = await response.json();
        //   order_id = content.id;


        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

async function deleteInventoryHandler(event) {
    event.preventDefault();

    const product_id = document.getElementById('product').value;

    const response = await fetch(`/api/products/${product_id}`, {
        method: 'DELETE'
    });

    //   content.id will give us the ID of the order JUST CREATED
    //   const content = await response.json();
    //   order_id = content.id;


    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-inventory-form').addEventListener('submit', editInventoryHandler);
document.querySelector('.delete').addEventListener('click', deleteInventoryHandler);
