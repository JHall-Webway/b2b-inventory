


async function grabProducts() {
    const invQtyArray = [];
    const invNameArray = [];
    const orderArray = [];

    const response = await fetch(`/api/products/prod-and-detail`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.ok) {
        const data = await response.json();
        data.forEach(product => {
            invNameArray.push(product.product_name);
            invQtyArray.push(product.quantity);
        })
        data.forEach(product => {
            let orderQtyHolder = 0;
            product.orders.forEach(order => {
                // orderQtyHolder.push(order.orderdetail.quantity);   
                orderQtyHolder = orderQtyHolder + order.orderdetail.quantity 
            })
            orderArray.push(orderQtyHolder)
        });

        //holds the name of the product
        console.log(invNameArray);
        //holds the inventory of the product
        console.log(invQtyArray);
        //holds the TOTAL orders on a product (matching index)
        console.log(orderArray);
    } else {
        alert(response.statusText);

    }
}




document.getElementById('report').addEventListener('click', grabProducts);