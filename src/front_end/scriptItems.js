document.addEventListener('DOMContentLoaded', async function() {
  let itemsList = document.querySelector('.items-list');
  let itemsCountSpan = document.getElementById('itemsNum');
  let showItemsBtn = document.getElementById('showItemsBtn');

  let count =0;

  // Function to get and display orders
  async function displayItems() {
    try {
      // Fetch orders data from backend API
      let response = await fetch('http://localhost:3000/items', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      let data = await response.json();

      // Clear existing list items
      itemsList.innerHTML = '';

      // Loop through orders data and create list items
      data.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `Item ID: ${item.id}, EAN: ${item.EAN}, Quantity: ${item.quantity}, Price: ${item.price} Kr.`;
        itemsList.appendChild(listItem);
        count++;
      });
      console.log("hello"+ data)
      itemsCountSpan.textContent = count;
    } catch (error) {
      console.error('Error fetching orders data:', error);
      ordersList.innerHTML = '<li>Error fetching orders data</li>';
    }
  }

  await displayItems();

  showItemsBtn.addEventListener('click', async function() {
    if (itemsList.style.display === 'none') {
      // If it's hidden, show it
      itemsList.style.display = 'contents';
    } else {
      // If it's visible, hide it
      itemsList.style.display = 'none';
    }
  });

});