

let Allicon = document.querySelectorAll(".icon");
let allDiv = document.querySelectorAll(".container > div");

function showContent(any) {
    // debugger
    let icon = any.firstElementChild.nextElementSibling;
    let IconisExist = icon.classList.contains('ri-add-line');
    // console.log(IconisExist);
    if (IconisExist) {
        Allicon.forEach((icn) => {
            if (icn.classList.contains('ri-subtract-line')) {
                icn.classList.remove('ri-subtract-line');
                icn.classList.add('ri-add-line');
            }
        })
        icon.classList.remove('ri-add-line');
        icon.classList.add('ri-subtract-line');
    }
    else {
        icon.classList.remove('ri-subtract-line');
        icon.classList.add('ri-add-line');
    }

    let isExist = any.nextElementSibling.classList.contains('d-none');
    // console.log(isExist);
    if (isExist) {
        allDiv.forEach((div) => {
            if (div.classList.contains('para')) {
                div.classList.add('d-none');
            }
        });
        any.nextElementSibling.classList.remove('d-none');
    }
    else {
        any.nextElementSibling.classList.add('d-none');
    }
}



//gpt:

// function showContent(any) {
//     // Hide all content divs and reset icons
//     const allIcons = document.querySelectorAll('.icon');
//     const allContentDivs = document.querySelectorAll('.container > div');

//     allContentDivs.forEach((div) => {
//         if (div.classList.contains('first') || div.classList.contains('second') || div.classList.contains('third')) {
//             div.classList.add('d-none');
//         }
//     });
//     // Toggle clicked section's content
//     const contentDiv = any.nextElementSibling;
//     contentDiv.classList.toggle('d-none');

//     allIcons.forEach((icn) => {
//         icn.classList.remove('ri-subtract-line');
//         icn.classList.add('ri-add-line');
//     });


//     // If now visible, change its icon
//     if (!contentDiv.classList.contains('d-none')) {
//         const icon = any.querySelector('.icon');
//         icon.classList.remove('ri-add-line');
//         icon.classList.add('ri-subtract-line');
//     }
// }
