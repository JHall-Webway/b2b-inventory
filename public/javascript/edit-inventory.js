async function editInventoryHandler(event) {
    event.preventDefault();
  
    const product = document.getElementById('product').value;
    const qty = document.getElementById('qty').value;

    console.log(product);
    console.log(qty);
    if (!product || !qty) {
        return;
    } else {
        const response = await fetch(`/api/products`, {
            method: 'POST',
            body: JSON.stringify({
              product_name: product,
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
            document.location.replace('/dashboard/edit-inventory');
          } else {
            alert(response.statusText);
          }
    }
  }
  
  document.querySelector('.edit-inventory-form').addEventListener('submit', editInventoryHandler);
