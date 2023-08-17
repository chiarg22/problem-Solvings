const products = [
  {
    name: "Smartphone",
    price: 499.99,
    category: "Electronics",
    description: "High-end smartphone with advanced features.",
  },
  {
    name: "Laptop",
    price: 799.0,
    category: "Electronics",
    description: "Powerful laptop for work and entertainment.",
  },
  {
    name: "Designer Watch",
    price: 299.5,
    category: "Fashion",
    description: "Elegant watch with a unique design.",
  },
  {
    name: "Gaming Console",
    price: 349.99,
    category: "Electronics",
    description: "Next-gen gaming console for immersive gameplay.",
  },
  {
    name: "Digital Camera",
    price: 599.95,
    category: "Electronics",
    description: "High-resolution camera for stunning photography.",
  },
];

const filtery = products.filter(
  (item) => item.price > 500 && item.category === "Electronics"
);
console.log("The required output ", filtery);

// const change2 = p.map((item) => {
//     if (!item.isActive) {
//       // (Or this can be written as item.isActive==false)
//       item.isActive = "Not Available";
//       return item;
//     } else {
//       item.isActive = "Available";
//       return item;
//     }
//   });
