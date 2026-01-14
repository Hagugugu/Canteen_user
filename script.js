document.addEventListener("DOMContentLoaded", function () {

  const menuItems = [
    { name: "Samosa", price: 15, available: true },
    { name: "Tea", price: 10, available: true },
    { name: "Burger", price: 40, available: false }
  ];

  const menuDiv = document.getElementById("menu");
  const cartDiv = document.getElementById("cart");
  const totalSpan = document.getElementById("total");

  let total = 0;

  menuItems.forEach(item => {
    const div = document.createElement("div");
    div.className = "item";

    const btn = document.createElement("button");
    btn.innerText = "Add";
    btn.disabled = !item.available;

    btn.onclick = () => {
      const p = document.createElement("p");
      p.innerText = `${item.name} - ₹${item.price}`;
      cartDiv.appendChild(p);
      total += item.price;
      totalSpan.innerText = total;
    };

    div.innerHTML = `<strong>${item.name}</strong> - ₹${item.price}`;
    div.appendChild(btn);
    menuDiv.appendChild(div);
  });

});
