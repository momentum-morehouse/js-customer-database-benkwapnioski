import customers from './customers.js'


let person = [{
  thumbNail: "https://randomuser.me/api/portraits/thumb/women/89.jpg",
  name: "Pauline Hughes",
  email: "pauline.hughes@example.com",
  address: "3747 Elgin St, Roseville, IN 93281"
}]

let customerList = document.querySelector('#customer-list');
console.log(customerList)

function listCustomers(personArray) {

  for (let customer of customers) {
    let newCustomer = document.createElement("li");
    let customerText = document.createTextNode(`${customer.name.first} 
        ${customer.name.last}`);

    let customerAddress = document.createTextNode(`${customer.location.street} ${customer.location.city},${customer.location.state}`);
    // let customerLocation = document.createTextNode(`
    // ${customer.location.street}
    // ${customer.location.city}
    // ${customer.location.state}`);

    let customerEmail = document.createTextNode(`${customer.email}`);
    let customerPhone = document.createTextNode(`${customer.phone}`);
    let customerCell = document.createTextNode(`${customer.cell}`);


    let name = document.createElement("p");
    let address = document.createElement("p");
    // let street = document.createElement("p");
    // let city = document.createElement("p");
    // let state = document.createElement("p");

    let email = document.createElement("p");
    let phone = document.createElement("p");
    let cell = document.createElement("p");


    name.classList.add("name");
    address.classList.add("address");

    // location.classList.add("street", "city", "state");

    email.classList.add("email");
    phone.classList.add("phone");
    cell.classList.add("cell")


    name.append(customerText);
    address.append(customerAddress);

    // location.append(customerLocation);

    email.append(customerEmail);
    phone.append(customerPhone);
    cell.append(customerCell);

    newCustomer.append(name, address, email, phone, cell);

    let customerImage = document.createElement("img");
    customerImage.classList.add("br-100", "h4", "w4", "dib", "ba", "b--black-05", "pa2");
    customerImage.src = `${customer.picture.thumbnail}`;

    // let customerEmail = document.createElement("email");
    //newCustomer.append(address, customerEmail);

    newCustomer.prepend(customerImage);
    newCustomer.classList.add("ph3", "pv3", "bb", "b--light-silver");
    customerList.append(newCustomer);
  };



}

listCustomers(person);



