
let btn = document.getElementById("btn2");

btn.addEventListener("click", () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let firstrandomColor = `rgb(${r},${g},${b})`;

    let r2 = Math.floor(Math.random() * 256);
    let g2 = Math.floor(Math.random() * 256);
    let b2 = Math.floor(Math.random() * 256);

    let secondrandomColor = `rgb(${r2},${g2},${b2})`;

    console.log("first", firstrandomColor);
    console.log("second", secondrandomColor);

    document.body.style.backgroundImage = `linear-gradient(to right,${firstrandomColor},${secondrandomColor})`;
});