//------------call method


let applicant = {
    firstname: "hello",
    lastname: 'heyy',
    fullname_applicant: function () {
        return this.firstname + " " + this.lastname;
    }
}
console.log("call method fullname function:", applicant.fullname_applicant());

let applicant2 = {
    firstname: "hellow",
    lastname: 'heyyy',
}
console.log("call method full name of refrence applicant2: ", applicant.fullname_applicant.call(applicant2));




//---------Apply Method

let person = {
    firstname: "abc",
    lastname: "bcd",
    fullname: function () {
        return this.firstname + " " + this.lastname
    },
};
console.log("Apply Method Fullname: ", person.fullname());

let child = {
    firstname: "xyz",
    lastname: "abc",
};
console.log("Apply Method fullname of child: ", person.fullname.apply(child));




//------------call method


let applicants = {
    fullname_applicant: function (city, country) {
        return this.firstname + " " + this.lastname + " " + city + "," + country;
    }
}
console.log("call method fullname function:", applicant.fullname_applicant());

let applicantNo1 = {
    firstname: "hellow",
    lastname: 'heyyy',
}
console.log("call method full name of refrence applicant2: ", applicants.fullname_applicant.call(applicant2, "surat", "india"));

//note that how we add "surat" and "india" as an argments in function call method....but in apply method we have to add these value as a array.



//apply methdod 

let applymethod = {
    fullname: function (city, country) {
        console.log(this.firstname + " " + this.lastname + " " + city + "," + country,)
    }
}
let user1 = {
    firstname: "revenue",
    lastname: "talati",
}
applymethod.fullname.apply(user1, ["ahemdabad", "gujarat"]);