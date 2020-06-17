import customers from './customers.js'
let person = [{
  thumbNail: 'https://randomuser.me/api/portraits/thumb/women/89.jpg',
  name: "Pauline Hughes",
  email: "pauline.hughes@example.com",
  address: "3747 Elgin St, Roseville, IN 93281",
}]

function listCustomers(personArray) {
  let customerList = document.querySelector('#customer-list');
  //  for (let customer of customers) {
     let newCustomer = document.createElement("li");
     let customerText = document.createTextNode(`"${person.name}" located ${person.address}`);
     let customerImage = document.createElement("img")
     customerImage.src = `${person.thumbNail}`;
     let customerEmail = document.createElement("email");
     newCustomer.append(customerText, customerEmail);
     customerList.append(newCustomer);
     newCustomer.classList.add("ph3", "pv3", "bb", "b--light-silver");
  // };
};

listCustomers(person);
// let newCustomer = document.querySelector('#name-list')

// console.log()

// let newPerson = document.createElement("li")
// let personName = document.createTextNode("Mr. Curtis Ryan")

// let personNumber = document.createTextNode(" ")
// let personAddress = document.createTextNode("")
// let thumbNail = document.createTextNode(" ")
// let personBirthday = document.createTextNode("")
// let personSince = document.createTextNode("")

// let customerList = document.querySelector('#customers')
// console.log(customerList)

// let customerList = {
// name: 'Mr. Curtis Ryan';
// address: '8073 Rolling Green Rd South Valley, Missouri 99356';
// phonenumber: '(385)-917-9080';
// thumbnail: '';
// birthdate: '1967-10-29';
// since: '2007-01-12';
// }



// // function 
// console.log(customerList);