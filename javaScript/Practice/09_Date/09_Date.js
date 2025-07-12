// new Date(year,month,day,hours,minutes,seconds,ms)


// Date Object બનાવવાની સૌથી સરળ રીત
let currentdate = new Date();  //2025-05-16T03:55:31.897Z
console.log("current date:", currentdate);

// ખાસ તારીખ આપવી હોય તો:
let givedate = new Date('2040-12-31');  //2040-12-31T00:00:00.000Z
console.log("ખાસ તારીખ આપવી હોય તો:", givedate);

console.log(currentdate.getFullYear()); //2025 //વર્ષ
console.log(currentdate.getMonth()); //4 //મહિનો (0 થી 11 સુધી)
console.log(currentdate.getDate()); //16 //તારીખ
console.log(currentdate.getDay()); // દિવસ (0 = રવિવાર, 6 = શનિવાર)
console.log(currentdate.getHours()); // કલાક                 


//Date ને ફોર્મેટ પણ બદલી શકો છો
console.log("Normally it looks like:", currentdate);
console.log("Format toDateString krya pachhi:", currentdate.toDateString()); //Fri May 16 2025
console.log("normal tostring function no use krta:", currentdate.toString()); //Fri May 16 2025 09:35:04 GMT+0530 (India Standard Time)

// Setter Methods – તારીખ કે સમય બદલવો
let d = new Date();
console.log('set the year', d.setFullYear(2030));
console.log("set the month", d.setMonth(5));//june
d.setDate(10);
d.setHours(15)


//// new Date(year,month,day,hours,minutes,seconds,ms)
let today = new Date(2025, 4, 16, 9, 34);
console.log(today.toDateString());
document.getElementById("today").innerHTML = today;

let yesterday = new Date(2025);
console.log(yesterday);