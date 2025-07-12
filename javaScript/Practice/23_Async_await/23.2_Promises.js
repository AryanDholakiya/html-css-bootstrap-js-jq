let firstPromise = new Promise((resolve, reject) => {
    let okay = true;

    if (okay) {
        resolve("successfull");
    }
    else {
        reject("Un successful");
    }
})

firstPromise.then((res) => {
    console.log("succeed msg:", res);
})
    .catch((err) => {
        console.log("error msg:", err)
    });



//example 2
let order = new Promise(function (resolve, reject) {
    let orderplacedSuccessfully = true;

    if (orderplacedSuccessfully) {
        resolve("Order Placed Successfully");
    }
    else {
        reject("Order Cancelled due to some issues.");
    }
});

order.then(function (message) { //you can make here anonymous function or an arrow function and you can take any variable name as you want like "message"
    console.log(message);
}).catch((reject) => {
    console.log(reject);
})