const products = [
    { id: 1, name: "Laptop", price: 1500, stock: 5, "image" :"https://https://img.freepik.com/premium-psd/laptop-mock-up_1310-197.jpg"},
    { id: 2, name: "Headphones", price: 100, stock: 10, "image" : "https://https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817601.jpg"},
    { id: 3, name: "Keyboard", price: 50, stock: 20, "image" : "https://https://img.freepik.com/free-photo/white-keyboard-plant_23-2148708005.jpg" },
  ];
  
  function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    if (product && product.stock > 0) {
      product.stock--;
      displayNotification(`${product.name} added to cart successfully.`);
      document.getElementById(
        `stock${productId}`
      ).textContent = `In Stock: ${product.stock}`;
    } else {
      alert(`Sorry, ${product ? product.name : " "} is out of stock.`);
    }
  }
  
  function displayNotification(message) {
    const notification = document.getElementById("notification");
    notification.textContent = message;
    notification.classList.remove("d-none");
    setTimeout(() => {
      notification.classList.add("d-none");
    }, 3000);
  }
  