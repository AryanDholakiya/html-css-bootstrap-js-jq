let btn = document.getElementById("btn");

let hashvaluesArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];


btn.addEventListener("click", () => {
    let random = "#";
    let random2 = "#";
    for (let i = 0; i < 6; i++) {
        random += hashvaluesArr[Math.floor(Math.random() * hashvaluesArr.length)];
        random2 += hashvaluesArr[Math.floor(Math.random() * hashvaluesArr.length)];
    }
    console.log(random);
    console.log("random 2: ", random2);

    document.body.style.backgroundImage = `linear-gradient(to right, ${random}, ${random2})`;
});

