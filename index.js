// Write your solution in this file!
var customerName = "bob";
const leastFavoriteCustomer = 'Mercy';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Faith';
}
changeLeastFavoriteCustomer();

console.log(leastFavoriteCustomer);