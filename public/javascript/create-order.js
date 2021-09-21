async function newFormHandler(event) {
    event.preventDefault();
  
    const customer = document.querySelector('#customers').value.trim();
    const dueDate = document.querySelector('#due').value.trim();
    
    if (!customer && dueDate) {
        return;
    } else {
        const response = await fetch(`/api/orders`, {
            method: 'POST',
            body: JSON.stringify({
                customer: customer_id,
                user_id,
                dueDate: due_date
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          });
        
          if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert(response.statusText);
          }
    }
  }
  
  document.querySelector('.form-group').addEventListener('submit', newFormHandler);