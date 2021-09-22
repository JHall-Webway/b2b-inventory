const reportHolder = document.getElementById('rep-table');

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

        generateReport(invNameArray, invQtyArray, orderArray);
    } else {
        alert(response.statusText);

    }
}

function generateReport(prodNames, stock, orders) {
    reportHolder.innerHTML = "";
    let tableEl = document.createElement('table');
    tableEl.classList.add('table');

    let theadEl = document.createElement('thead');

    let thProd = document.createElement('th');
    thProd.innerHTML = "Product";

    let thStock = document.createElement('th');
    thStock.innerHTML = "Current Stock";

    let thDemand = document.createElement('th');
    thDemand.innerHTML = "Total Demand";

    let thDelta = document.createElement('th');
    thDelta.innerHTML = "Delta";

    // add headers to table header
    theadEl.appendChild(thProd);
    theadEl.appendChild(thStock);
    theadEl.appendChild(thDemand);
    theadEl.appendChild(thDelta);
    // add table header to table
    tableEl.appendChild(theadEl);


    // add table to DOM
    reportHolder.appendChild(tableEl);
}




document.getElementById('report').addEventListener('click', grabProducts);