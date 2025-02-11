function unique(arr) {
    return Array.from(new Set(arr));
}
//2

function aclean(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
      let sorted = arr[i].toLowerCase().split("").sort().join("");
      obj[sorted] = arr[i];
    }
    return Object.values(obj);
}

//3

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");