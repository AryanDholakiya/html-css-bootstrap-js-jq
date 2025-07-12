function OrderPizza() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Piiiiizzzaaa is delivered!");
        }, 3000);
    });
};

async function eatPizza() {
    console.log("craving for the pizza!!");

    let pizza = await OrderPizza();
    console.log(pizza);
    console.log("eating pizza");
}
eatPizza();
console.log("hello"); //this prints before.



//exaple 2
function fetchdata(fetched) {
    return new Promise((resolve, reject) => {
        if (fetched) {
            resolve("Data fetched Successfully.");
            
        }
        else {
            reject("Data not fetched!");
        }
    });
}

async function datafetch() {
    try{
        const response = await fetchdata(false);
        console.log(response);
    }
    catch(err){
        console.log("Error Occured:",err);
    }
}

datafetch()