const objMapping = {};

objMapping.tarun = true;
objMapping.varun = true;
objMapping.cat = true;
objMapping.dog = true;
objMapping.apple = true;

const map = new Map();

map.set("tarun", true);
map.set("varun", true);
map.set("cat", true);
map.set("dog", true);
map.set("apple", true);

console.log("obj: ", objMapping, map);

//We use map in the place of object as it is object as it arranges them in the order as they are
// being added rather what object does it puts the data in the sorted order,
//map does not show sorted in node terminal rather it shows it in console.
