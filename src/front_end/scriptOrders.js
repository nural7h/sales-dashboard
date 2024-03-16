document.addEventListener('DOMContentLoaded', async function() {
  let ordersList = document.querySelector('.orders-list');
  let usersCountSpan = document.getElementById('ordersNum');
  let showOrdersBtn = document.getElementById('showOrdersBtn');
  let users_count =0;


  // Function to get and display orders
  async function displayOrders() {
    try {
      // Fetch orders data from backend API
      let response = await fetch('http://localhost:3000/orders', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      let data = await response.json();

      // Clear existing list items
      ordersList.innerHTML = '';

      // Loop through orders data and create list items
      data.forEach(order => {
        const listItem = document.createElement('li');
        listItem.textContent = `Order ID: ${order.id}, Date: ${order.purchaseDate}, Country: ${order.country}, Device: ${order.device}`;
        ordersList.appendChild(listItem);
        users_count++;
      });
      usersCountSpan.textContent = users_count;
    } catch (error) {
      console.error('Error fetching orders data:', error);
      ordersList.innerHTML = '<li>Error fetching orders data</li>';
    }
  }

  await displayOrders();

  showOrdersBtn.addEventListener('click', async function() {
    if (ordersList.style.display === 'none') {
      // If it's hidden, show it
      ordersList.style.display = 'contents';
    } else {
      // If it's visible, hide it
      ordersList.style.display = 'none';
    }
  });

});