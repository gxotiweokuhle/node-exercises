function Person(Firstname, Lastname, Emailaddress){
    this.firstname = Firstname;
    this.lastname = Lastname;
    this.email = Emailaddress;
}

const person1 = new Person('okuhle', 'gxotiwe', 'gxotiweokuhle@gmail.com');
const person2 = new Person('bonisa', 'gxotiwe', 'gxotiwebonisa@gmail.com');
const person3 = new Person('anathi', 'gxotiwe', 'gxotiweanathi@gmail.com');


module.exports = {
    person1, person2, person3
}
