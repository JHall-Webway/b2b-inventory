async function newFormHandler(event) {
  event.preventDefault();

  const prod_name = document.getElementById('prod-name').value;
  const prod_qty = parseInt(document.getElementById('prod-qty').value);

  if (!prod_name || !prod_qty) {
    return;
  } else {
    const response = await fetch(`/api/products`, {
      method: 'POST',
      body: JSON.stringify({
        product_name: prod_name,
        quantity: prod_qty
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

document.querySelector('.new-inv-form').addEventListener('submit', newFormHandler);