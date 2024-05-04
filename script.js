//Question 1 : Write a “person” class to hold all the details.

class Person{
    constructor(firstname,lastname,Dob,location)
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.Dob = Dob;
        this.location = location;
    }
}
var person1 = new Person("Guru", "Moorthi", "24-06-1990" , "palladam");
var person2 = new Person("Saranya", "Guru", "10-10-1990" , "palladam");
var person3 = new Person("Mithun", "Prasanna", "9-01-2015" , "coimbatore");
var person4 = new Person("Krithanya", "Guru", "8-05-2019" , "coimbatore");
var person5 = new Person("Boobathy", "Kannan", "9-01-1994" , "coimbatore");

console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.Dob);
console.log(person1.location);

console.log(person2.firstname);
console.log(person2.lastname);
console.log(person2.Dob);
console.log(person2.location);

console.log(person3.firstname);
console.log(person3.lastname);
console.log(person3.Dob);
console.log(person3.location);

console.log(person4.firstname);
console.log(person4.lastname);
console.log(person4.Dob);
console.log(person4.location);

console.log(person5.firstname);
console.log(person5.lastname);
console.log(person5.Dob);
console.log(person5.location);


console.log(`All the Person Names are "person1" : ${person1.firstname}
"person2":${person2.firstname}
"person3":${person3.firstname}
"person4":${person4.firstname}
"person5":${person5.firstname}`)

/*----------------------------------------------------------------------------------------------------*/

//Question 2 : write a class to calculate the uber price.

// class UberPriceCalculator {
//     constructor() {
//       this.baseFare = 50;
//       this.costPerKilometer = 10;
//       this.costPerMinute = 2.0;
//       this.bookingFee = 20;
//     }
  
//     calculatePrice(distanceInKilometers, timeInMinutes) {
//       // Calculate the fare based on distance and time
//       const distanceCost = this.costPerKilometer * distanceInKilometers;
//       const timeCost = this.costPerMinute * timeInMinutes;
  
//       // Calculate the total price
//       const totalPrice = this.baseFare + distanceCost + timeCost + this.bookingFee;
  
//       return totalPrice;
//     }
//   }

//    // Example usage:
//    const calculator = new UberPriceCalculator();
//    const distanceInKilometers = 5.0; // Distance in kilometers
//    const timeInMinutes = 20; // Time in minutes
   
//    const estimatedPriceINR = calculator.calculatePrice(distanceInKilometers, timeInMinutes);
//    console.log(`Estimated Uber price in INR: ₹${estimatedPriceINR}`);