const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;
// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

class User{
    constructor(){
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company{
    constructor(){
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address ={
            street:faker.address.streetName(),
            city:faker.address.city(),
            state:faker.address.state(),
            zipCode:faker.address.zipCode(),
            country:faker.address.country(),
        };
    }
}


app.get("/api/users/new", (req, res) => {
    let newUser = new User();
    res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
    let newCompany = new Company();
    res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
    let newUser = new User();
    let newCompany = new Company();
    res.json({User: newUser,Company: newCompany});
});


// this needs to below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));