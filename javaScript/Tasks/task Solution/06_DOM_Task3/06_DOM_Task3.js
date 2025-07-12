// best method:
let rgbcolor = document.getElementById('btn2');

rgbcolor.addEventListener('click', () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;

    document.getElementById("colorcode").innerHTML = `rgb(${r},${g},${b})`;
});


//method 2
// let button = document.getElementById('btn');

// let colors = ["red", "yellow", "dodgerblue", 'gray', 'pink', 'blue', 'purple', 'black', 'orange'];
// let lastcolor = "";

// button.addEventListener('click', () => {

//     let newcolor;
//     do {
//         newcolor = colors[Math.floor(Math.random() * colors.length)];
//     } while (newcolor === lastcolor);

//     document.body.style.backgroundColor = newcolor;
//     lastcolor = newcolor;
// });

