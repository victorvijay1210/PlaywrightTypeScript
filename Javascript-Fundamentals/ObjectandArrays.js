//Object

var customer = {
   firstname:'Victor',
   lastname:'Vijay'
}
console.log(customer)
console.log(customer.firstname)
console.log(customer.lastname)
console.log(customer['lastname'])
console.log(customer['firstname'])

customer.firstname='Mahendra Sigh' //we can change the value like this
customer['lastname']='Dhoni'
console.log(customer)


//Arrays
var cars =['Swift','Tiago','I10']
console.log(cars)
console.log(cars[1])
cars[1]='3xO'
console.log(cars)

var employee = {
    firstname:'Victor',
    lastname:'Vijay',
     cars :['Swift','Tiago','I10']
 }
 console.log(employee)