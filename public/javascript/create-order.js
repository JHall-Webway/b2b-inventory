async function createNewOrder(event) {
    event.preventDefault();
  
    const cust_id = document.getElementById('customers').value;
    const dueDate = document.getElementById('due').value;

    console.log(cust_id);
    console.log(dueDate);
    if (!cust_id || !dueDate) {
        return;
    } else {
        const response = await fetch(`/api/orders`, {
            method: 'POST',
            body: JSON.stringify({
              customer_id: cust_id,
              due_date: dueDate
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
  
  document.querySelector('.new-order-form').addEventListener('submit', createNewOrder);