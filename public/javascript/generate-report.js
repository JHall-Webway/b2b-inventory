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
    tableEl.classList.add('table-warning');
    tableEl.classList.add('table-hover');

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

    //create table body
    let tbodyEl = document.createElement('tbody');

    for (i=0 ; i<prodNames.length; i++) {
        let trEl = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');

        td1.innerHTML = prodNames[i];
        td2.innerHTML = stock[i];
        td3.innerHTML = orders[i];
        td4.innerHTML = stock[i] - orders[i];
        
        trEl.appendChild(td1);
        trEl.appendChild(td2);
        trEl.appendChild(td3);
        trEl.appendChild(td4);

        tbodyEl.appendChild(trEl);
    }

    // append table body to table
    tableEl.appendChild(tbodyEl);
    // add table to DOM
    reportHolder.appendChild(tableEl);
}




document.getElementById('report').addEventListener('click', grabProducts);