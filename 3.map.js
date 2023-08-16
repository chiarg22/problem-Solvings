const p = [
  {
    id: 1,
    name: "John Doe",
    city: "New York",
    state: "New York",
    isActive: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    city: "Los Angeles",
    state: "California",
    isActive: false,
  },
  {
    id: 3,
    name: "Michael Johnson",
    city: "Chicago",
    state: "Illinois",
    isActive: true,
  },
  {
    id: 4,
    name: "Emily Brown",
    city: "Houston",
    state: "Texas",
    isActive: true,
  },
];

// const change = p.map((item) => {
//   if (item.isActive == false) {
//     item.isActive = "NA";
//     return item;
//   }
//   return item;
// });

// console.log({ p, change });

const change2 = p.map((item) => {
  if (item.isActive == false) {
    item.isActive = "Not Available";
    return item;
  } else if (item.isActive == true) {
    item.isActive = "Available";
    return item;
  }
});

// console.log({ p, change2 });
console.log({ change2 });
