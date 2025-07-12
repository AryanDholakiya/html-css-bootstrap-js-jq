let first = document.getElementById("first");
console.log("nodeType:", first.nodeType);
console.log("nodeName:", first.nodeName);

console.log();

console.log("firstchild nodeType:", first.firstChild.nodeType);  //3 : (etle k text node chhe.)
console.log("firstchild nodeType:", first.firstChild.nodeValue); // "Element Node Example"

let comments = document.childNodes[0];
console.log(comments);
console.log(comments.nodeType);