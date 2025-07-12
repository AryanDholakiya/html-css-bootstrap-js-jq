// window.alert("hello India");

function geturl() {
    document.getElementById("url").innerHTML = window.location.href;
    document.getElementById("windowHeight").innerHTML = window.innerHeight;
    document.getElementById("windowWidth").innerHTML = window.innerWidth;

    console.log(window.location.href);
};

console.log(window.innerHeight); // these both shows size in pixels.
console.log(window.innerWidth);


//button 1 ClickIt
function clickIt() {
    let confirmation = window.confirm("Do you want to Continue?");

    if (confirmation) {
        window.alert("You selected YES.");
    }
    else {
        window.alert("you selected NO!");
    }
}



//button 2 windowPrompt
function windowPrompt() {
    let name = window.prompt("Enter your name here."); //we can also write like:prompt("Enter your name here.")
    console.log("hello" + " " + name);
}



//redirect to another page : it is not working.

function redirect() {
    let confirmRedirect = window.confirm("If you want to open google.com in same page then press OK!");

    if (confirmRedirect) {
        // Redirects to Google in same tab
        window.location.href = 'https://www.google.com';
    } else {
        // Opens Google in new tab and closes it after 2 seconds (if allowed)
        let newWindow = window.open("https://www.w3schools.com/js/js_window_location.asp", "_blank");
        console.log(newWindow);
        // Check if popup blocked
        if (newWindow) {
            setTimeout(() => {
                newWindow.close(); // Try to close the new tab
            }, 2000);
        } else {
            alert("Popup blocked! Please allow popups for this site.");
        }
    }
}

//window.navigator

console.log("window.navigator: ", window.navigator);
console.log("navigator.userAgent:", navigator.userAgent);
console.log("navigator.language:", navigator.language);
console.log("navigator.onLine:", navigator.onLine);


//window.location
function assingnewlocation() {
    window.location.assign('https://www.w3schools.com/js/js_window_location.asp');
}

console.log("window.location.href:", window.location.href);
console.log("window.location.hostname:", window.location.hostname);
console.log("window.location.pathname:", window.location.pathname);
console.log("window.location.protocol:", window.location.protocol);



//  <!-- window.history -->
function GoBack() {
    window.history.back();
}

function GoForward() {
    window.history.forward();
}

//line break in pop-up boxes like alert, confirm..
// alert("hello\nFrom line No.90");

let timeoutId;
function StartTimeout() {
    timeoutId = setTimeout(() => {//note that how we take setTimeout in one global varable and pass it to stop the show alert
        alert("hello from serttimeout.");
    }, 3000);
}

function cleartimeout2() {
    clearTimeout(timeoutId);
}


// function showTime() {
//     let d = new Date();
//     let showSecond = d.toLocaleTimeString();
//     console.log(showSecond);
// }

// showTime()

let showTime = document.getElementById("showTime");

let setinter;
function StartTime() {
     setinter = setInterval(() => {
        let time = new Date();
        let showingTime = time.toLocaleTimeString();
        showTime.innerHTML = showingTime;
    }, 1000);
};

function stopTime() {
    clearInterval(setinter);
}