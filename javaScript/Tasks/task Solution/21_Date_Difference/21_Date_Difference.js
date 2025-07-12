// let firstDate = document.getElementById('firstDate');

// let secondDate = document.getElementById('secondDate');
let showMessage = document.getElementById('showDifference');


// function DateDifference() {
//     console.log(firstDate.value);
//     let first_Fulldate = new Date(firstDate.value); //firstDate.value = "2025-06-14"
//     let Second_Fulldate = new Date(secondDate.value)


//     let msDiff = new Date(Second_Fulldate).getTime() - new Date(first_Fulldate).getTime();
//     let totalDays = Math.floor(msDiff / (1000 * 60 * 60 * 24));

//     // Extract years, months, days
//     let years = Math.floor(totalDays / 365.25); // accounting for leap years
//     let remainingDays = totalDays % 365.25;

//     let months = Math.floor(remainingDays / 30.44); // average month
//     remainingDays = Math.round(remainingDays % 30.44); // remaining days

//     showMessage.innerHTML = `${years} Years ${months} Months ${remainingDays} Days`;
// }


//method 2 : gpt

function getDateDifferenceDetailed(start, end) {
    let d1 = new Date(start);
    let d2 = new Date(end);

    if (d1 > d2) {
        [d1, d2] = [d2, d1]; // Ensure d1 is earlier
    }
    // console.log("d1:", d1);
    // console.log("d2:", d2);

    let years = d2.getFullYear() - d1.getFullYear();
    console.log(years);
    let months = d2.getMonth() - d1.getMonth();
    console.log(months);
    let days = d2.getDate() - d1.getDate();
    console.log(days);

    if (days < 0) {
        months--;
        console.log("months-- if days < 0: ", months);
        days += new Date(d2.getFullYear(), d2.getMonth(), 0).getDate(); // days in previous month
        console.log(new Date(d2.getFullYear(), d2.getMonth(), 0));
        console.log(new Date(d2.getFullYear(), d2.getMonth(), 0).getDate());
        console.log("days if days < 0: ", days);
    }
    if (months < 0) {
        years--;
        console.log("years-- if months < 0: ", years);
        months += 12;
        console.log("monthsif montth < 0: ", months);
    }

    return { years, months, days };
}

function DateDifference() {
    if (!firstDate.value || !secondDate.value) {
        showMessage.innerHTML = "Please select both dates.";
        return;
    }

    const { years, months, days } = getDateDifferenceDetailed(firstDate.value, secondDate.value);
    showMessage.innerHTML = `Difference: ${years} Years, ${months} Months, ${days} Days`;
}
