let country_list = [
    {
        country_id: 1,
        country_name: "India"
    },
    {
        country_id: 2,
        country_name: "USA"
    },
    {
        country_id: 3,
        country_name: "Canada"
    }
];

let state_list = [
    {
        state_id: 1,
        state_country_id: 1,
        state_name: "Gujarat"
    },
    {
        state_id: 2,
        state_country_id: 1,
        state_name: "Maharashtra"
    },
    {
        state_id: 3,
        state_country_id: 1,
        state_name: "Rajasthan"
    },
    {
        state_id: 4,
        state_country_id: 2,
        state_name: "California"
    },
    {
        state_id: 5,
        state_country_id: 2,
        state_name: "Florida"
    },
    {
        state_id: 6,
        state_country_id: 2,
        state_name: "Washington"
    },
    {
        state_id: 7,
        state_country_id: 3,
        state_name: "British Columbia"
    },
    {
        state_id: 8,
        state_country_id: 3,
        state_name: "Alberta"
    },
    {
        state_id: 9,
        state_country_id: 3,
        state_name: "Ontario"
    }
];

let city_list = [
    {
        city_id: 1,
        city_state_id: 1,
        city_name: "Ahmedabad"
    },
    {
        city_id: 2,
        city_state_id: 1,
        city_name: "Surat"
    },
    {
        city_id: 3,
        city_state_id: 2,
        city_name: "Mumbai"
    },
    {
        city_id: 4,
        city_state_id: 2,
        city_name: "Pune"
    },
    {
        city_id: 5,
        city_state_id: 3,
        city_name: "Jaipur"
    },
    {
        city_id: 6,
        city_state_id: 3,
        city_name: "Ajmer"
    },
    {
        city_id: 7,
        city_state_id: 4,
        city_name: "Los Angeles"
    },
    {
        city_id: 8,
        city_state_id: 4,
        city_name: "San Francisco"
    },
    {
        city_id: 9,
        city_state_id: 5,
        city_name: "Miami"
    },
    {
        city_id: 10,
        city_state_id: 5,
        city_name: "Orlando"
    },
    {
        city_id: 11,
        city_state_id: 6,
        city_name: "Seattle"
    },
    {
        city_id: 12,
        city_state_id: 6,
        city_name: "Olympia"
    },
    {
        city_id: 13,
        city_state_id: 7,
        city_name: "Vancouver"
    },
    {
        city_id: 14,
        city_state_id: 7,
        city_name: "Victoria"
    },
    {
        city_id: 15,
        city_state_id: 8,
        city_name: "Calgary"
    },
    {
        city_id: 16,
        city_state_id: 8,
        city_name: "Edmonton"
    },
    {
        city_id: 17,
        city_state_id: 9,
        city_name: "Ottawa"
    },
    {
        city_id: 18,
        city_state_id: 9,
        city_name: "Hamilton"
    }
];


let CountrySelectField = document.getElementById("country");
let StateSelectField = document.getElementById("state");
let CityySelectField = document.getElementById("city");

country_list.forEach((countries) => {
    let option = document.createElement("option");
    option.value = countries.country_id;
    option.textContent = countries.country_name;
    CountrySelectField.appendChild(option);
});

function setdefault() {
    StateSelectField.innerHTML = "";
    CityySelectField.innerHTML = "";

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "-- Select State --";
    StateSelectField.appendChild(defaultOption);

    const defaultCity = document.createElement("option");
    defaultCity.value = "";
    defaultCity.textContent = "-- Select City --";
    CityySelectField.appendChild(defaultCity);
}

changeCountry = () => {
    // debugger;
    const selectedCountryID = +CountrySelectField.value; //note: '+' agal mukvathi value srtring mathi number bne 
    const filteredStateList = state_list.filter(x => x.state_country_id === selectedCountryID);

    setdefault();

    filteredStateList.forEach((state) => {
        let option = document.createElement("option");
        option.value = state.state_id;
        option.textContent = state.state_name;
        StateSelectField.appendChild(option);
    });
}


changeState = () => {

    const selectedStateID = +StateSelectField.value;
    const filteredCityList = city_list.filter(x => x.city_state_id === selectedStateID);

    CityySelectField.innerHTML = "";
    const defaultCity = document.createElement("option");
    defaultCity.value = "";
    defaultCity.textContent = "-- Select City --";
    CityySelectField.appendChild(defaultCity);

    filteredCityList.forEach((city) => {
        let option = document.createElement("option");
        option.value = city.city_id;
        option.textContent = city.city_name;
        CityySelectField.appendChild(option);
    });
}
