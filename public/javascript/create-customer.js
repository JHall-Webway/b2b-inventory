async function newFormHandler(event) {
  event.preventDefault();

  const cust_name = document.getElementById('cust_name').value;
  if (!cust_name) {
      return;
  } else {
      const response = await fetch(`/api/customers`, {
          method: 'POST',
          body: JSON.stringify({
            customer_name: cust_name
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

document.querySelector('.new-cust-form').addEventListener('submit', newFormHandler);