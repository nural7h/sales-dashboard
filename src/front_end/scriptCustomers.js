document.addEventListener('DOMContentLoaded', async function() {
  let customerList = document.querySelector('.customer-list');
  let countSpan = document.getElementById('count');
  let showCustomersBtn = document.getElementById('showCustomersBtn');

 
  let customers_count = 0;

  // Function to fetch and display customers
  async function displayCustomers() {
    try {
      // Fetch customer data from backend API
      let response = await fetch('http://localhost:3000/customers', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      let data = await response.json();

      // Clear existing list items
      customerList.innerHTML = '';

      // Loop through customer data and create list items
      data.forEach(customer => {
        const listItem = document.createElement('li');
        listItem.textContent = `${customer.firstName} ${customer.lastName} - ${customer.email}`;
        customerList.appendChild(listItem);
        customers_count++;
      });
      countSpan.textContent = customers_count;
    } catch (error) {
      console.error('Error fetching customer data:', error);
      customerList.innerHTML = '<li>Error fetching customer data</li>';
    }
  }

  // Initially fetch and display customers
  await displayCustomers();

  // logic for clicking the button whether to show or hide
  showCustomersBtn.addEventListener('click', async function() {
    if (customerList.style.display === 'none') {
      // If it's hidden, show it
      customerList.style.display = 'contents';
    } else {
      // If it's visible, hide it
      customerList.style.display = 'none';
    }
  });
});
