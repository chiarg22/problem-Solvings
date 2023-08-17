const colors = ["red", "blue"];

const data = [
  {
    id: 1,
    color: "red",
    name: "John",
    city: "New York",
  },
  {
    id: 2,
    color: "blue",
    name: "Emily",
    city: "Los Angeles",
  },
  {
    id: 3,
    color: "green",
    name: "Michael",
    city: "Chicago",
  },
  {
    id: 4,
    color: "olive",
    name: "Sophia",
    city: "Houston",
  },
];

const output = [
  {
    id: 1,
    color: "red",
    name: "John",
    city: "New York",
  },
  {
    id: 2,
    color: "blue",
    name: "Emily",
    city: "Los Angeles",
  },
];

// const filtery = data.filter(
//   (item) => item.color === "red" || item.color === "blue"
// );
// console.log(filtery);
// Hard code

// let arri = colors.map((item) => item);
// // console.log(arri);
// const filtery = data.filter(
//   (item2) => item2.color == item || item2.color == item
// );
// console.log(filtery);

let filtery = data.filter((item) => colors.includes(item.color));
console.log(filtery);
