<<<<<<< HEAD
async function newFormHandler(event) {
    event.preventDefault();
  
    const customer = document.querySelector('#customers').value.trim();
    const dueDate = document.querySelector('#due').value.trim();
    
    if (!customer && dueDate) {
=======
async function createNewOrder(event) {
    event.preventDefault();
  
    const cust_id = document.getElementById('customers').value;
    const dueDate = document.getElementById('due').value;

    console.log(cust_id);
    console.log(dueDate);
    if (!cust_id || !dueDate) {
>>>>>>> develop
        return;
    } else {
        const response = await fetch(`/api/orders`, {
            method: 'POST',
            body: JSON.stringify({
<<<<<<< HEAD
                customer: customer_id,
                user_id,
                dueDate: due_date
=======
              customer_id: cust_id,
              due_date: dueDate
>>>>>>> develop
            }),
            headers: {
              'Content-Type': 'application/json'
            }
<<<<<<< HEAD
          });
=======
          })
          
        //   content.id will give us the ID of the order JUST CREATED
        //   const content = await response.json();
        //   order_id = content.id;
          
>>>>>>> develop
        
          if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert(response.statusText);
          }
    }
  }
  
<<<<<<< HEAD
  document.querySelector('.form-group').addEventListener('submit', newFormHandler);
=======
  document.querySelector('.new-order-form').addEventListener('submit', createNewOrder);
>>>>>>> develop
