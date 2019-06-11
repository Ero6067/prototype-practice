//Prototype Practice

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

//Greeting
Person.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person( 'John', 'Doe' )

//Customer Constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

//Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

//Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

//Create customer
const customer1 = new Customer('Tom', 'King', '123-456-7890', 'Standard');

console.log(customer1);

//Customer greeting
Customer.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
}

console.log(customer1.greeting());