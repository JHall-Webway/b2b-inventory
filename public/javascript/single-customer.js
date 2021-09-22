async function deleteOrderHandler(event) {
    event.preventDefault();
    const order_id = document.getElementById('order').value;
    
    const response = await fetch(`/api/orders/${order_id}`, {
        method: 'DELETE'
    });
    
    console.log(response);
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.delete').addEventListener('click', deleteOrderHandler);