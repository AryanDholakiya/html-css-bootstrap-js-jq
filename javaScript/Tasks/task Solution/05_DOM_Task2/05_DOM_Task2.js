let global = document.getElementById('all');
let sub = document.querySelectorAll('.sub');
// console.log(sub);

global.addEventListener('change', () => {
    if (global.checked) {
        // console.log("helo");
        for (let i = 0; i < sub.length; i++) {
            if (sub[i].checked == false) {
                sub[i].checked = true;
            }
        }
    }
    else {
        for (let i = 0; i < sub.length; i++) {
            if (sub[i].checked == true) {
                sub[i].checked = false;
            }
        }
    }
});

for (let i = 0; i < sub.length; i++) {
    sub[i].addEventListener('change', () => {
        let selectedBox = document.querySelectorAll('input[class="sub"]:checked');
        // console.log(selectedBox.length);
        if (selectedBox.length == sub.length) {
            global.checked = true;
        }
        else {
            global.checked = false;
        }
    });
}