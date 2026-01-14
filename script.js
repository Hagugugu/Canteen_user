const menuItems = [
  { name: "Veg Sandwich", price: 30, available: true },
  { name: "Samosa", price: 15, available: true },
  { name: "Burger", price: 50, available: false },
  { name: "Tea", price: 10, available: true }
];

const menuDiv = document.getElementById("menu");

menuItems.forEach(item => {
  const div = document.createElement("div");
  div.className = "menu-item";

  div.innerHTML = `
    <h3>${item.name}</h3>
    <p>Price: ₹${item.price}</p>
    <p class="${item.available ? 'available' : 'not-available'}">
      ${item.available ? 'Available' : 'Out of Stock'}
    </p>
  `;

  menuDiv.appendChild(div);
});
